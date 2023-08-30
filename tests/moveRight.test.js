const Rocket = require("../src/Rocket");

describe("Checking: Move right command.", () => {
  it("Runs and checks move right command.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    rocket.toLeftRight("r");
    const actual = rocket.getDirection();
    const expected = "E";
    expect(actual).toBe(expected);
  });
});
