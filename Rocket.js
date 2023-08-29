class Rocket {
  constructor(x = 0, y = 0, z = 0, direction = "N") {
    this.axis = [x, y, z];

    // assign initial direction according to input parameter
    switch (direction) {
      case "N":
        this.direction = [0, 1, 0];
        break;
      case "S":
        this.direction = [0, -1, 0];
        break;
      case "E":
        this.direction = [1, 0, 0];
        break;
      case "W":
        this.direction = [-1, 0, 0];
        break;
      case "Up":
        this.direction = [0, 0, 1];
        break;
      case "Down":
        this.direction = [0, 0, -1];
        break;
    }
  }

  getLocation() {
    return this.axis;
  }

  getDirection() {
    return this.direction;
  }

  getX() {
    return this.axis[0];
  }

  getY() {
    return this.axis[1];
  }

  getZ() {
    return this.axis[2];
  }

  move(input) {
    // get the index of changing axis (x, y, z)
    let idx;
    idx = this.direction.find((item) => item === 1);
    if (idx === -1) idx = this.direction.find((item) => item === -1);

    // change the axis according to "f" or "b" command
    if (input === "f") {
      this.axis[idx] += 1;
    } else if (input === "b") {
      this.axis[idx] -= 1;
    }
  }
}

module.exports = Rocket;
