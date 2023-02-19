import Link from "next/link";
import { useRecoilState } from "recoil";
import { userListState } from "../states";
import Head from "next/head";

const ShowUser = () => {
    const [userList, setUserList] = useRecoilState(userListState);

    return (
        <>
            <Head>
                <title>List of Users</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div>
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
                    <h1>List of Users</h1>
                </div>
                <div>
                    <ul>
                        {userList.map((car) => (
                            <li id={car.email} key={car.age}>
                                {`${car.age}, ${car.email}, ${car.name}, ${car.password}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ShowUser;
