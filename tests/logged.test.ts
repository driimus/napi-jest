import { readFileSync } from "fs";

/**
 * Tests direct instantiation of the library engine.
 */
describe("direct library engine import", () => {
  const libEnginePath = // Replace me
    "/home/driimus/napi-jest/node_modules/.prisma/client/libquery_engine-debian-openssl-1.1.x.so.node";

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
