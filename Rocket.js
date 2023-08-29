class Rocket {
  RotateX = [
    [1, 0, 0],
    [0, 0, -1],
    [0, 1, 0],
  ];
  NegRotateX = [
    [1, 0, 0],
    [0, 0, 1],
    [0, -1, 0],
  ];
  RocketY = [
    [0, 0, 1],
    [0, 1, 0],
    [-1, 0, 0],
  ];
  NegRocketY = [
    [0, 0, -1],
    [0, -1, 0],
    [1, 0, 0],
  ];
  NegRotateZ = [
    [0, 1, 0],
    [-1, 0, 0],
    [0, 0, 0],
  ];
  RotateZ = [
    [0, -1, 0],
    [1, 0, 0],
    [0, 0, 1],
  ];

  direction = [0, 0, 0];
  axis = [0, 0, 0];

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
      case "U":
        this.direction = [0, 0, 1];
        break;
      case "D":
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

    if (this.direction[2] === 1) return "U";
    else if (this.direction[2] === -1) return "D";
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
    let idx = this.direction.find((item) => item === 1 || item === -1);
    console.log(this.direction);

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
        const newDirection = new Array(3).fill(0);
        for (let i = 0; i < this.RotateZ.length; ++i) {
          for (let j = 0; j < this.direction.length; ++j) {
            newDirection[i] += this.direction[j] * this.RotateZ[i][j];
          }
        }

        this.direction = newDirection;
      } else if (this.getDirection() === "U" || this.getDirection() === "D") {
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
        const newDirection = new Array(3).fill(0);
        for (let i = 0; i < this.NegRotateZ.length; ++i) {
          for (let j = 0; j < this.direction.length; ++j) {
            newDirection[i] += this.direction[j] * this.NegRotateZ[i][j];
          }
        }

        this.direction = newDirection;
      } else if (this.getDirection() === "U" || this.getDirection() === "D") {
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

  toUpDown(input) {
    if (
      (this.getDirection() === "N" && input === "d") ||
      (this.getDirection() === "S" && input === "u") ||
      (this.getDirection() === "U" && input === "u") ||
      (this.getDirection() === "D" && input === "d")
    ) {
      const newDirection = new Array(3).fill(0);
      for (let i = 0; i < RotateX.length; ++i) {
        for (let j = 0; j < this.direction.length; ++j) {
          newDirection[i] += this.direction[j] * RotateX[i][j];
        }
      }

      this.direction = newDirection;
    } else if (
      (this.getDirection() === "N" && input === "u") ||
      (this.getDirection() === "S" && input === "d") ||
      (this.getDirection() === "U" && input === "d") ||
      (this.getDirection() === "D" && input === "u")
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
    } else if (
      (this.getDirection() === "W" && input === "d") ||
      (this.getDirection() === "E" && input === "d")
    ) {
      const newDirection = new Array(3).fill(0);
      for (let i = 0; i < this.RocketY.length; ++i) {
        for (let j = 0; j < this.direction.length; ++j) {
          newDirection[i] += this.direction[j] * this.RocketY[i][j];
        }
      }

      this.direction = newDirection;
    } else if (
      (this.getDirection() === "E" && input === "u") ||
      (this.getDirection() === "W" && input === "u")
    ) {
      const newDirection = new Array(3).fill(0);
      for (let i = 0; i < this.NegRocketY.length; ++i) {
        for (let j = 0; j < this.direction.length; ++j) {
          newDirection[i] += this.direction[j] * this.NegRocketY[i][j];
        }
      }

      this.direction = newDirection;
    }
  }
}

module.exports = Rocket;

// N: Y dir
// => +Y => -90 deg on X for U & +90 deg on X for D | -Y => +90 deg on X for U & -90 deg on X for D
// => For both +Y & -Y => LeftOrRight (Z axis rotation) (+90 deg on Z for Right) and (-90 deg on Z for left)

// E: X dir
// => +X => +90 deg on Y for U & -90 deg on Y for D) | -X => -90 deg on Y for U & +90 deg on Y for D
// => For both +X & -X => LeftOrRight (Z axis rotation) (+90 deg on Z for Right) and -90 deg on Z for left

// U: Z dir
// +Z => +90 deg on X for U & -90 deg on X for D | -Z => -90 deg on X for U & +90 deg on X for D
// => For both +Z & -Z => LeftOrRight (X axis rotation) (+90 deg on X for Right) and -90 deg on Z for left
