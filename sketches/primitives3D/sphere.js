const canvasSketch = require("canvas-sketch");
const p5 = require("p5");

new p5();

const settings = {
  dimensions: [1680, 1080],
  p5: true,
  context: "webgl",
  animate: true,
  duration: 3,
  fps: 3,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
};

const reset = (bool) => {
  return !bool;
};

canvasSketch((p5) => {
  console.log(p5)
  let bool = true;
  let step = 2;
  //frameRate(20);
  noFill();
  strokeWeight(2);
  stroke("#969695");

  return ({ playhead, width, height }) => {
    background("#040404");
    console.log('frameCount ',  frameCount)
    const radius = height / 4;

    rotateY(millis() / 10000);
    sphere(radius, step, step);

    if ((step < 24) & (bool === true)) {
      step = step + 1;

      if (step == 24) bool = reset(bool);
    }

    // if ((step <= 24) & (bool === false)) {
    //   console.log("here 1 ", step, bool);
    //   step = step - 1;

    //   if (step == 2) bool = reset(bool);
    // }
  };
}, settings);
