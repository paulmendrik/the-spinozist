import { useRouter } from 'next/router'
import React from "react";
import { Button } from 'rbx';


export default function Back() {
    const router = useRouter()

    return <Button><a onClick={() => router.push('/blog')}>Back</a></Button>
}