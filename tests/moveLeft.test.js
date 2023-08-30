const Rocket = require("../src/Rocket");

describe("Checking: Move left command.", () => {
  it("Runs and checks move left command.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    rocket.toLeftRight("l");
    rocket.toLeftRight("l");
    const actual = rocket.getDirection();
    const expected = "S";
    expect(actual).toBe(expected);
  });
});
