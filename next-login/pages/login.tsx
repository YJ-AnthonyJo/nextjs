import type { NextPage } from "next";
import Head from "next/head";
import LoginForm from "../components/login-form";
import Link from "next/link";
const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Login Page</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="vh-100 d-flex justify-content-center align-items-center">
                <Link href="/">
                    <button>home</button>
                </Link>
                <Link href="/login">
                    <button>login</button>
                </Link>
                <Link href="/register">
                    <button>register</button>
                </Link>
                <Link href="/showuser">
                    <button>showuser</button>
                </Link>
                <LoginForm />
            </main>
            <button
                onClick={() =>
                    (window.parent.location.href = "http://localhost:3000/cart")
                }
            >
                {" "}
                iframe out - href
            </button>
            <a href="http://localhost:3000/cart" target="_parent">
                {"jalskdj"}
            </a>
        </>
    );
};

export default Home;
