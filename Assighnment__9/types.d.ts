declare const axios: {
    get<T>(url: string): Promise<{ data: T; status: number }>;
    post<T>(url: string, data: any): Promise<{ data: T; status: number }>;
    put<T>(url: string, data: any): Promise<{ data: T; status: number }>;
    delete<T>(url: string): Promise<{ data: T; status: number }>;
};
declare const Toastify: any; 