interface User {
    username: string;
    password: string;
}

const validCredentials: User = {
    username: "admin",
    password: "admin123"
};

export const authenticate = (username: string, password: string): boolean => {
    return username === validCredentials.username && password === validCredentials.password;
};

export const checkAuth = (): boolean => {
    return sessionStorage.getItem("isAuthenticated") === "true";
};

export const login = (username: string, password: string): boolean => {
    if (authenticate(username, password)) {
        sessionStorage.setItem("isAuthenticated", "true");
        return true;
    }
    return false;
};

export const logout = (): void => {
    sessionStorage.removeItem("isAuthenticated");
};
