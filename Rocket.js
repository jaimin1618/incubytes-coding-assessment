class Rocket {
  constructor(x = 0, y = 0, z = 0, direction = "N") {
    // TODO: assign instance variables according to arguments
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
    // TODO: return current location - axis array
    return this.axis;
  }

  getDirection() {
    // TODO: return direction string
    if (this.direction[0] === 1) return "E";
    else if (this.direction[0] === -1) return "W";

    if (this.direction[1] === 1) return "N";
    else if (this.direction[1] === -1) return "S";

    if (this.direction[2] === 1) return "Up";
    else if (this.direction[2] === -1) return "Down";
  }

  getX() {
    // TODO: return x-axis
    return this.axis[0];
  }

  getY() {
    // TODO: return y-axis
    return this.axis[1];
  }

  getZ() {
    // TODO: return z-axis
    return this.axis[2];
  }

  move(input) {
    // TODO: Move rocket object according to f/b command

    // 1st - get the index of changing axis (x, y, z)
    let idx;
    idx = this.direction.find((item) => item === 1);
    if (idx === -1) idx = this.direction.find((item) => item === -1);

    // 2nd - change the axis according to "f" or "b" command
    if (input === "f") {
      this.axis[idx] += 1;
    } else if (input === "b") {
      this.axis[idx] -= 1;
    }
  }

  toLeftRight(input) {
    // TODO: Turn 90 Deg left or right based on current direction vector

    if (input === "l") {
      if (
        this.getDirection() === "E" ||
        this.getDirection() === "N" ||
        this.getDirection() === "S" ||
        this.getDirection() === "W"
      ) {
        const RotateZ = [
          [0, -1, 0],
          [1, 0, 0],
          [0, 0, 1],
        ];

        const newDirection = new Array(3).fill(0);
        for (let i = 0; i < RotateZ.length; ++i) {
          for (let j = 0; j < this.direction.length; ++j) {
            newDirection[i] += this.direction[j] * RotateZ[i][j];
          }
        }

        this.direction = newDirection;
      } else if (
        this.getDirection() === "Up" ||
        this.getDirection() === "Down"
      ) {
        const NegRotateX = [
          [1, 0, 0],
          [0, 0, 1],
          [0, -1, 0],
        ];

        const newDirection = new Array(3).fill(0);
        for (let i = 0; i < NegRotateX.length; ++i) {
          for (let j = 0; j < this.direction.length; ++j) {
            newDirection[i] += this.direction[j] * NegRotateX[i][j];
          }
        }

        this.direction = newDirection;
      }
    } else if (input === "r") {
      if (
        this.getDirection() === "E" ||
        this.getDirection() === "N" ||
        this.getDirection() === "S" ||
        this.getDirection() === "W"
      ) {
        const NegRotateZ = [
          [0, 1, 0],
          [-1, 0, 0],
          [0, 0, 0],
        ];

        const newDirection = new Array(3).fill(0);
        for (let i = 0; i < NegRotateZ.length; ++i) {
          for (let j = 0; j < this.direction.length; ++j) {
            newDirection[i] += this.direction[j] * NegRotateZ[i][j];
          }
        }

        this.direction = newDirection;
      } else if (
        this.getDirection() === "Up" ||
        this.getDirection() === "Down"
      ) {
        const RotateX = [
          [1, 0, 0],
          [0, 0, -1],
          [0, 1, 0],
        ];

        const newDirection = new Array(3).fill(0);
        for (let i = 0; i < RotateX.length; ++i) {
          for (let j = 0; j < this.direction.length; ++j) {
            newDirection[i] += this.direction[j] * RocketX[i][j];
          }
        }

        this.direction = newDirection;
      }
    }
  }
}

module.exports = Rocket;

// N: Y dir
// => UPorDown(X axis rotation) for UP in +ve Y (-90) & -ve Y (+90)
// => For both +Y & -Y => LeftOrRight (Z axis rotation) (+90 deg on Z for Right) and (-90 deg on Z for left)

// E: X dir
// => For both +X & -X => LeftOrRight (Z axis rotation) (+90 deg on Z for Right) and -90 deg on Z for left

// Up: Z dir
// => For both +Z & -Z => LeftOrRight (X axis rotation) (+90 deg on X for Right) and -90 deg on Z for left
// E: X dir
