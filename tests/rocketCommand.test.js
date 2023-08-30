const Rocket = require("../src/Rocket");

describe("Moving rocket with series of commands.", () => {
  it("Runs and moves rocket according to commands.", () => {
    const commands = ["f", "r", "u", "b", "l"];

    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    expect(rocket.getX()).toBe(x);
    expect(rocket.getDirection()).toBe(direction);

    for (command of commands) {
      switch (command) {
        case "f":
          rocket.move("f");
          break;
        case "b":
          rocket.move("b");
          break;
        case "r":
          rocket.toLeftRight("r");
        case "l":
          rocket.toLeftRight("l");
        case "u":
          rocket.toUpDown("u");
        case "d":
          rocket.toUpDown("d");
      }
    }

    const actualX = rocket.getX();
    const actualY = rocket.getY();
    const actualZ = rocket.getZ();
    const actualDir = rocket.getDirection();

    const expectedX = 0;
    const expectedY = 1;
    const expectedZ = -1;
    const expectedDir = "N";

    expect(actualX).toBe(expectedX);
    expect(actualY).toBe(expectedY);
    expect(actualZ).toBe(expectedZ);
    expect(actualDir).toBe(expectedDir);
  });
});
