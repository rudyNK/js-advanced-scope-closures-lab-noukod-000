// Returns a function that calculates whether a given trip is within range
function produceDrivingRange(maxDistance) {
  return function (start, end) {
    let pathDistance = Math.abs(parseInt(start) - parseInt(end));
    let diff = Math.abs(maxDistance - pathDistance);

    if (pathDistance > maxDistance) {
      return `${diff} blocks out of range`;
    }
    else {
      return `within range by ${diff}`
    }
  }
}

// Returns a function that calculates a tip
function produceTipCalculator(percent) {
  return function(fare) {
    return percent * fare;
  };
}

// returns a Driver class
function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}