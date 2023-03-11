function newNonPlayableCharacter(x, y) {
  let element = newImage("assets/red-character/static.gif");
  element.style.zIndex = 1;

  let direction = null;

  function moveCharacter() {
    if (direction === "west") {
      x -= 1;
    }
    if (direction === "north") {
      y += 1;
    }
    if (direction === "east") {
      x += 1;
    }
    if (direction === "south") {
      y -= 1;
    }
    element.style.left = x + "px";
    element.style.bottom = y + "px";
  }

  setInterval(moveCharacter, 1);

  async function walkEast(time, callback) {
    await sleep(5000);
    direction = "east";
    element.src = `./assets/green-character/east.gif`;
    setTimeout(() => {
      stop();
      if (callback) {
        callback();
      }
    }, time);
  }
  async function walkNorth(time, callback) {
    await sleep(5000);
    direction = "north";
    element.src = `./assets/green-character/north.gif`;
    setTimeout(() => {
      stop();
      if (callback) {
        callback();
      }
    }, time);
  }
  async function walkWest(time, callback) {
    await sleep(5000);
    direction = "west";
    element.src = `./assets/green-character/west.gif`;
    setTimeout(() => {
      stop();
      if (callback) {
        callback();
      }
    }, time);
  }
  async function walkSouth(time, callback) {
    await sleep(5000);
    direction = "south";
    element.src = `./assets/green-character/south.gif`;
    setTimeout(() => {
      stop();
      if (callback) {
        callback();
      }
    }, time);
  }

  function stop() {
    direction = null;
    element.src = `./assets/red-character/static.gif`;
  }

  return {
    element: element,
    walkWest: walkWest,
    walkNorth: walkNorth,
    walkEast: walkEast,
    walkSouth: walkSouth,
    stop: stop,
  };
}
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
