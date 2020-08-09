import Axios from "axios";

const BOOK_URL = "https://api.marktube.tv/v1/book";

export default class BookService {
    static async getBooks(token) {
        try {
            const response = await Axios.get(BOOK_URL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (err) {
            console.log("서비스 문제 : ", err);
        }
    }

    static async addBooks(token, book) {
        try {
            const response = await Axios.post(BOOK_URL, book, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (err) {
            console.log("서비스 문제 : ", err);
        }
    }
    static async removeBook(token, id) {
        try {
            const response = await Axios.delete(`${BOOK_URL}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (err) {
            console.log("서비스 문제 : ", err);
        }
    }
}
