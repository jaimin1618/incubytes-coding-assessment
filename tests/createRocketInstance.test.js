const Rocket = require("../src/Rocket");

/**
 * Following heart (Laws) of Test driven development by Robert Martin AKA Uncle Bob
 * (1) You are not allowed to write production code unless it is to make failing unit test pass.
 * (2) You are not allowed to write more unit test than it is sufficient to fail;
 * (3) You are not allowed to write any more production code than it is sufficient to pass the one failing test.
 * In summary, Test => Code => Refactor => more Test => more Code => again Refactor that's the strategy for Test Driven Development
 */

describe("Checking: Chandrayaan-3 create Rocket instance.", () => {
  it("Sets up (or constructs) A Rocket instance.", () => {
    const rocket = new Rocket();
    expect(rocket).not.toBeNull();
    expect(rocket).toBeInstanceOf(Rocket);
  });
});
