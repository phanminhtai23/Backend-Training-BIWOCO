import { api } from "encore.dev/api";


interface Response {
    message: string;
}

export const get = api(
    { method: "GET", path: "/ping", expose: true },
    async (): Promise<Response> => {
        return { message: "hello from the Farm" };
    }
)