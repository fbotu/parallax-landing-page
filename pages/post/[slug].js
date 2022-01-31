// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
/* STYLES */
import styles from '../../styles/singlePost.module.scss'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Post = ({post}) => {
  if (!post) return null

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = post
  return (
    <article className={styles.post}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.author}>By {name}</span>
      {categories > 0 ? (
        <ul className={styles.categories}>
          Posted in
          {categories.map(category => 
          <li key={category} className={styles.categories}>{category}</li>)}
        </ul>
      ) : (<h4 className={styles.categories}>No Categories</h4>)
      }

      {authorImage ? (
        <div className={styles.authorImage}>
          <img
            src={urlFor(authorImage)
              .size(200, 150)
              .url()}
          />
        </div>
      ) : (<h4>No Image!!!</h4>)
      }
      <BlockContent
        className={styles.body}
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post