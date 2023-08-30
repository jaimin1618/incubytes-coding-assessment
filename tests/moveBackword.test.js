const Rocket = require("../src/Rocket");

describe("Checking: Move 1step backword command.", () => {
  it("Check move backword command.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    rocket.move("b"); // ["f", "b", "r", "l", "u", "d"] command inputs only
    expect(rocket.getY()).toBe(y - 1);

    rocket.move("b");
    rocket.move("b");
    rocket.move("b");
    expect(rocket.getY()).toBe(y - 4);
  });
});
