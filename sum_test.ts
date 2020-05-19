import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { add } from "./sum.ts";

Deno.test("sum 1+2 should be 3", () => {
  const result = add(1, 2);
  assertEquals(result, 3);
});

Deno.test("sum 1+2+3 should be 6", () => {
  const result = add(1, 2, 3);
  assertEquals(result, 6);
});
