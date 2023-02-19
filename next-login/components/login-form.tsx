import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Button, Box } from "@mantine/core";
import { useRecoilState } from "recoil";
import { loginedUserListState } from "../states";
import { userListState, LoginType } from "../states";

export default function Login() {
    const [loginedUser, setLogineduser] = useRecoilState(loginedUserListState);
    const [userList, _setUserList] = useRecoilState(userListState);

    const form = useForm({
        initialValues: { email: "", password: "" },

        // functions will be used to validate values at corresponding key
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            password: (value) =>
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
                    value
                )
                    ? null
                    : "Password must include at least Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        },
    });

    function onLogin(value: LoginType) {
        // console.log(value);
        const user = userList.find((elem) => elem.email === value.email);
        // console.log(user);
        if (user?.password === value.password) {
            setLogineduser(user);
        }
    }

    return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <form onSubmit={form.onSubmit(onLogin)}>
                <TextInput
                    mt="sm"
                    label="Email"
                    placeholder="Email"
                    {...form.getInputProps("email")}
                />
                <PasswordInput
                    placeholder="password"
                    label="Password"
                    withAsterisk
                    {...form.getInputProps("password")}
                />
                <Button type="submit" mt="sm">
                    Submit
                </Button>
            </form>
        </Box>
    );
}
//recoil -> persist
