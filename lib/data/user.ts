import { readFileSync, writeFileSync } from "fs";
import { StoredUserType } from "../../types/user";

const getList = () => {
    const userBuffer = readFileSync("data/users.json");
    const usersString = userBuffer.toString();
    if (!usersString) {
        return [];
    }
    const users: StoredUserType[] = JSON.parse(usersString);
    return users;
};

const exist = ({ email }: {email: string}) => {
    const users = getList();
    return users.some((user) => user.email === email);
};

const write = async (users: StoredUserType[]) => {
    writeFileSync("data/users.json", JSON.stringify(users));
};

export default { getList, exist, write };
