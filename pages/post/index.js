import Link from 'next/link'
import groq from 'groq'
import client from '../../client'
/* STYLES */
import styles from '../../styles/post.module.scss'

const Index = ({posts}) => {
    return (
      <div className={styles.pageWrapper}>
        <h1 className={styles.title}>Welcome to a blog!</h1>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id} className={styles.postList}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
      </div>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      }
    }
}

export default Index