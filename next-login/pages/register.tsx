import type { NextPage } from "next";
import Head from "next/head";
import RegisterForm from "../components/registration-form";
import Link from "next/link";

const Register: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Register Page</title>
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
                <RegisterForm />
            </main>
        </div>
    );
};

export default Register;
