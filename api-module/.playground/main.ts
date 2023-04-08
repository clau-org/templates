import { logger } from "../deps.ts";
import { hello } from "../src/hello.ts";

logger.info({ hello: hello() });
