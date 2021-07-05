const LOCALSTORE_KEY = "token";

export default class TokenService {
    static save(token) {
        localStorage.setItem(LOCALSTORE_KEY, token);
    }

    static get() {
        return localStorage.getItem(LOCALSTORE_KEY);
    }
    static remove() {
        localStorage.removeItem(LOCALSTORE_KEY);
    }
}
