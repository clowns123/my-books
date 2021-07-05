import Axios from "axios";

const API_URL = "https://api.marktube.tv/v1/me";

export default class UserService {
    static async login(email, password) {
        const response = await Axios.post(API_URL, {
            email,
            password,
        });

        return response.data.token;
    }
}
