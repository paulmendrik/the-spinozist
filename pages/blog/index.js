import React from 'react';
import Link from 'next/link'
import Prismic from 'prismic-javascript';
import { client, linkResolver, hrefResolver } from '../../prismic-configuration';
import DefaultLayout from "../../layouts";
import {Container} from "rbx";
import {Date, RichText} from "prismic-reactjs";


const Blog = ({ posts }) => (
    <DefaultLayout>
        <Container>

            { posts.results.map((post) => (
                <article key={post.uid}>
                    <div className="meta">
                       <h1><Link href={hrefResolver(post)} as={linkResolver(post)} passHref>
                            <a>{RichText.asText(post.data.title)}</a>
                        </Link>
                       </h1>
                    </div>
                    <div className="excerpt">{RichText.render(post.data.intro)}</div>
                    <p className="date">{Date(post.data.date).toDateString()}</p>
                </article>
            ))}

        </Container>
    </DefaultLayout>
)


export async function getServerSideProps() {
    const posts = await client.query(
        Prismic.Predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
    )

    return { props: { posts } }
}

export default Blog
