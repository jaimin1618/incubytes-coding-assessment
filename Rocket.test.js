const Rocket = require("./Rocket");

/**
 * Following heart (Laws) of Test driven development by Robert Martin AKA Uncle Bob
 * (1) You are not allowed to write production code unless it is to make failing unit test pass.
 * (2) You are not allowed to write more unit test than it is sufficient to fail;
 * (3) You are not allowed to write any more production code than it is sufficient to pass the one failing test.
 * In summary, Test => Code => Refactor => more Test => more Code => again Refactor that's the strategy for Test Driven Development
 */

describe("Checking: Chandrayaan-3 Rocket set-up and initialization.", () => {
  it("Sets up (or constructs) A Rocket correctly.", () => {
    const rocket = new Rocket();
    expect(rocket).not.toBeNull();
    expect(rocket).toBeInstanceOf(Rocket);
  });

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

describe("Checking: Move/Turn Commands for Chandrayaan-3 Rocket after initialization.", () => {
  it("(Forward/Backword - f/b command): Moves rocket 1 step ahead or 1 step backword in current direction of rocket.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    rocket.move("f"); // ["f", "b", "r", "l", "u", "d"] command inputs only
    expect(rocket.getY()).toBe(y + 1);

    rocket.move("b");
    expect(rocket.getY()).toBe(y);

    rocket.move("f");
    rocket.move("f");
    rocket.move("f");
    expect(rocket.getY()).toBe(y + 3);
  });

  it("(Left/Right - l/r command): Moves rocket Left or Right relative to its current direction.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    rocket.toLeftRight("l");
    rocket.toLeftRight("l");
    rocket.toLeftRight("r");
    rocket.toLeftRight("r");
    const actual = rocket.getDirection();
    const expected = "N";
    expect(actual).toBe(expected);
  });

  it("(Upword/Downword - u/d command): Moves rocket up or down relative to its current direction.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    rocket.toUpDown("u");
    rocket.toUpDown("u");
    const actual = rocket.getDirection();
    const expected = "S";
    expect(actual).toBe(expected);
  });

  it("Running combined: Moved rocket with all available commands f|b|l|r|u|d.", () => {
    let x = 0,
      y = 0,
      z = 0;
    let direction = "N";

    const rocket = new Rocket(x, y, z, direction);
    expect(rocket.getX()).toBe(x);
    expect(rocket.getDirection()).toBe(direction);

    rocket.move("f");
    expect(rocket.getY()).toBe(y + 1);
    expect(rocket.getDirection()).toBe(direction);

    rocket.toLeftRight("r");
    let actual = rocket.getDirection();
    let expected = "E";
    expect(actual).toBe(expected);

    rocket.toUpDown("u");
    actual = rocket.getDirection();
    expected = "U";
    expect(actual).toBe(expected);

    rocket.move("f");
    console.log(rocket.getDirection());
    console.log(rocket.getLocation());
  });
});
