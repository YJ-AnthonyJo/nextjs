import { atom } from "recoil";
export interface UserType {
    name: string;
    email: string;
    password: string;
    age: number;
}
export interface LoginType {
    email: string;
    password: string;
}

export const userListState = atom<UserType[]>({
    key: "userListState",
    default: [],
});

export const loginedUserListState = atom<UserType | undefined>({
    key: "loginedUserState",
    default: undefined,
});
// local storage.
