import axios from "axios";

// 회원가입 body
interface SingUpAPIBody {
    email: string;
    lastname: string;
    firstname: string;
    password: string;
    birthday: string;
}

// 회원가입 api
export const signupAPI = (body: SingUpAPIBody) =>
    axios.post("/api/auth/signup", body);
