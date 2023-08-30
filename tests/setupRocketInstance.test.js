const Rocket = require("../src/Rocket");

describe("Checking: Chandrayaan-3 initialization with custom setup.", () => {
  it("Sets up (or constructs) A Rocket with initial location (x, y, z) and direction variables.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    expect(rocket).toBeInstanceOf(Rocket);
    const locations = rocket.getLocation();
    const rocketDirection = rocket.getDirection();
    expect(locations).toEqual([x, y, z]);
    expect(rocketDirection).toBe(direction);
  });

  it("Returns the current location (x, y, z) axis of rocket.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    expect(rocket.getX()).toBe(x);
    expect(rocket.getY()).toBe(y);
    expect(rocket.getZ()).toBe(z);
  });
});
