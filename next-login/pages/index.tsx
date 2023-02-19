import type { NextPage } from "next";
import Head from "next/head";
import LoginForm from "../components/login-form";
import GetLoginedUser from "../components/get-logined-user";
import Link from "next/link";
import { Box } from "@mantine/core";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Main Page</title>
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
                <Box mx="auto" sx={{ maxWidth: 300 }}>
                    <GetLoginedUser />
                </Box>
            </main>
        </div>
    );
};

export default Home;
