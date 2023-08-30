const Rocket = require("../src/Rocket");

describe("Checking: Move downword command.", () => {
  it("Runs and checks move down command.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);

    rocket.toUpDown("d");
    rocket.toUpDown("d");

    const actual = rocket.getDirection();
    const expected = "S";
    expect(actual).toBe(expected);
  });
});
