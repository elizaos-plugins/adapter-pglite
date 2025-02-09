import { pgLiteAdapter } from "./client";

const pgLite = {
    name: "pglite",
    description: "PgLite database adapter plugin",
    adapters: [pgLiteAdapter],
};
export default pgLite;
