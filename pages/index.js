import React from 'react';
import { RichText } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import { Container } from 'rbx';
import DefaultLayout from "../layouts";
import Prismic from "prismic-javascript";


const Home = ({ home, posts}) => (
        <DefaultLayout>
        <Container>
        <blockquote>
        <h3>{RichText.asText(home.data.quote)}</h3>
        <p>{RichText.asText(home.data.author)}</p>
        </blockquote>
                { posts.results.map((post) => (
        <article>
                <h1>{RichText.asText(post.data.title)}</h1>
                {RichText.render(post.data.intro)}
                {RichText.render(post.data.main)}
        </article>
                ))}
        </Container>
        </DefaultLayout>

)

export async function getServerSideProps() {

        const posts = await client.query(
            Prismic.Predicates.at('document.type', 'post'),
            {pageSize: 1, page: 1}
        )


  const home = await client.getSingle('home')

  return { props: { home, posts } }
}

export default Home
