const validCredentials = {
    username: "admin",
    password: "admin123"
};
export const authenticate = (username, password) => {
    return username === validCredentials.username && password === validCredentials.password;
};
export const checkAuth = () => {
    return sessionStorage.getItem("isAuthenticated") === "true";
};
export const login = (username, password) => {
    if (authenticate(username, password)) {
        sessionStorage.setItem("isAuthenticated", "true");
        return true;
    }
    return false;
};
export const logout = () => {
    sessionStorage.removeItem("isAuthenticated");
};
