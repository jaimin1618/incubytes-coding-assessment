const Rocket = require("../src/Rocket");

describe("Checking: Move 1step forward command.", () => {
  it("Runs and checks move forward command.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    rocket.move("f"); // ["f", "b", "r", "l", "u", "d"] command inputs only
    expect(rocket.getY()).toBe(y + 1);

    rocket.move("f");
    rocket.move("f");
    rocket.move("f");
    expect(rocket.getY()).toBe(y + 4);
  });
});
