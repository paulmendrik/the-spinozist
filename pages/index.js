import React from 'react';
import { RichText } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import { Container } from 'rbx';
import DefaultLayout from "../layouts";


const Home = ({ home }) => (
        <DefaultLayout>
        <Container>
        <blockquote>
        <h3>{RichText.asText(home.data.quote)}</h3>
        <p>{RichText.asText(home.data.author)}</p>
        </blockquote>
        <article>
        <div class="meta"><h1>{RichText.asText(home.data.title)}</h1></div>
                {RichText.render(home.data.content)}
        </article>
        </Container>
        </DefaultLayout>

)

export async function getServerSideProps() {
  const home = await client.getSingle('home')

  return { props: { home } }
}

export default Home
