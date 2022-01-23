import Head from "next/head";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText,
} from "../lib/sanity";

import { groq } from "next-sanity";

export default function Postmain(props) {
  const { postdata, preview } = props;

  const router = useRouter();

  const { data: posts } = usePreviewSubscription(query, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });
  return (
    <>
      {posts &&
        posts.map((post) => (
          <article key={post.title}>
            <h3 className="text-lg"> {post.title} </h3>
            <p className="mt-3">{post.excerpt}</p>
          </article>
        ))}
    </>
  );
}

const query = groq`
*[_type == "post"] | order(_createdAt desc) {
  ..., 
  author->,
  categories[]->
}
`;

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(query);

  return {
    props: {
      postdata: post,
      preview,
    },
    revalidate: 10,
  };
}