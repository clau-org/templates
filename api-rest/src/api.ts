import { API } from "../deps.ts";
import { hello } from "./routers/hello.ts";

const api = new API({ name: "<NAME>" });

api.addRouter(hello);

export { api };
