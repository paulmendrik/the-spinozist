import React from 'react'
import {Navbar} from "rbx";
import Link from "next/link";

const Navigation = () => (
        <Navbar>
        <Navbar.Brand>
                <Navbar.Item href="/"><h1>The Spinozist</h1></Navbar.Item>
        <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
        <Navbar.Segment align="end">
        <Link href="/"><Navbar.Item>Home</Navbar.Item></Link>
        <Link href="/blog"><Navbar.Item>Articles</Navbar.Item></Link>
        <Link href="/about"><Navbar.Item>About</Navbar.Item></Link>
        </Navbar.Segment>
        </Navbar.Menu>
        </Navbar>
)

export default Navigation