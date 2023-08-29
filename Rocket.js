class Rocket {
  constructor(x = 0, y = 0, z = 0, direction = "N") {
    this.x = x;
    this.y = y;
    this.z = z;

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
    return [this.x, this.y, this.z];
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getZ() {
    return this.z;
  }

  getDirection() {
    return this.direction;
  }
}

module.exports = Rocket;
