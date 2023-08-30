const Rocket = require("../src/Rocket");

describe("Checking: Move upword command.", () => {
  it("Runs and checks move up command.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    rocket.toUpDown("u");
    const actual = rocket.getDirection();
    const expected = "U";
    expect(actual).toBe(expected);
  });
});
