import { useForm } from "@mantine/form";
import {
    NumberInput,
    TextInput,
    PasswordInput,
    Button,
    Box,
} from "@mantine/core";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { userListState } from "../states";

export default function Demo() {
    const [userList, setUserList] = useRecoilState(userListState);

    const form = useForm({
        initialValues: { name: "", email: "", age: 0, password: "" },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) =>
                value.length < 2 ? "Name must have at least 2 letters" : null,
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            age: (value) =>
                value < 18 ? "You must be at least 18 to register" : null,
            password: (value) =>
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
                    value
                )
                    ? null
                    : "Password must include at least Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        },
    });

    return (
        <Box sx={{ maxWidth: 450 }} mx="auto">
            <form
                onSubmit={form.onSubmit((values) => {
                    console.log(values);
                    setUserList([...userList, values]);
                })}
            >
                <TextInput
                    mt="sm"
                    label="Email"
                    placeholder="Email"
                    {...form.getInputProps("email")}
                />
                <PasswordInput
                    placeholder="password"
                    label="Password"
                    description="Password must include at least Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                    withAsterisk
                    {...form.getInputProps("password")}
                />

                <TextInput
                    mt="sm"
                    label="name"
                    placeholder="name"
                    {...form.getInputProps("name")}
                />

                <NumberInput
                    mt="sm"
                    label="Age"
                    placeholder="Age"
                    min={0}
                    max={99}
                    {...form.getInputProps("age")}
                />
                <Button type="submit" mt="sm">
                    Submit
                </Button>
            </form>
        </Box>
    );
}
