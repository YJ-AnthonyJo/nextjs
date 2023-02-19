import { useRecoilState } from "recoil";
import { loginedUserListState } from "../states";

export default function Getuser() {
    const [loginedUser, _setLoginedUser] = useRecoilState(loginedUserListState);
    if (loginedUser) {
        return (
            <>
                <h1>Logined User Info</h1>
                <p>{`name: ${loginedUser.name}`}</p>
                <p>{`email: ${loginedUser.email}`}</p>
                <p>{`age: ${loginedUser.age}`}</p>
                <p>{`password: ${loginedUser.password}`}</p>
            </>
        );
    }
    return <h1>Not Logined</h1>;
}
