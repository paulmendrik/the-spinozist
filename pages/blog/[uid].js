import React from 'react';
import { Date,RichText } from 'prismic-reactjs';
import { client } from '../../prismic-configuration';
import { Container } from 'rbx';
import DefaultLayout from "../../layouts";

import Back from "../../components/Back"

const Post = ({ post }) => (

    <DefaultLayout>
    <Container>
        <article>
    <h1>{RichText.asText(post.data.title)}</h1>
        <p className="date">{Date(post.data.date).toDateString()}</p>
            {RichText.render(post.data.intro)}
            {RichText.render(post.data.main)}
    </article>
        <Back/>
    </Container>
    </DefaultLayout>

)


export async function getServerSideProps({ query }) {
    const post = await client.getByUID('post', query.uid)

    return { props: { post } }
}

export default Post
