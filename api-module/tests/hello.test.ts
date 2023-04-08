import { assertEquals } from "../deps_tests.ts";
import { hello } from "../src/hello.ts";

Deno.test("Hello function should work", async () => {
  const helloResult = hello();

  assertEquals(helloResult, "Hello from <NAME>");
});
