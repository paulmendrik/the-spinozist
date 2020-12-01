import React from 'react';
import { RichText } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import { Container } from 'rbx';
import DefaultLayout from "../layouts";


const About = ({ about }) => (
    <DefaultLayout>
        <Container>
            <article>
                <h1>{RichText.asText(about.data.title)}</h1>
                {RichText.render(about.data.content)}
            </article>
        </Container>
    </DefaultLayout>

)

export async function getServerSideProps() {
    const about = await client.getSingle('about')

    return { props: { about } }
}

export default About