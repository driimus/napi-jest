import { readFileSync } from "fs";

/**
 * Tests direct instantiation of the a custom engine that doesn't use logging.
 *
 * @see https://github.com/driimus/prisma-engines
 */
describe("direct custom engine import", () => {
  const libEnginePath =
    "/home/driimus/forks/prisma-engines/target/release/engine.node";
  const { QueryEngine } = require(libEnginePath);

  it.each(new Array(6).fill(1))("doesn't leak memory", async () => {
    expect.assertions(1);
    let a = new QueryEngine(
      {
        datamodel: readFileSync("./schema.prisma").toString(),
        logLevel: "error",
        configDir: "./",
      },
      () => {}
    );
    expect(1).toBeTruthy();
  });
});
