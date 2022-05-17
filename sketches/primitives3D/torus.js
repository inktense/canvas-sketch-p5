const canvasSketch = require("canvas-sketch");
const p5 = require("p5");

new p5();

const settings = {
  dimensions: [800, 600],
  p5: true,
  context: "webgl",
  animate: true,
  duration: 10,
  fps: 10,
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
  noFill();
  strokeWeight(1);
  stroke("#969695");

  return ({ playhead, width, height }) => {
    background("#11151c");
    const radius = height / 4;
    const tubeRadius = height / 10;

    torus(radius, tubeRadius, 24, step);

    if ((step < 16) & (bool === true)) {
        step = step + 1;
  
        if (step == 16) bool = reset(bool);
      }
  
      if ((step <= 16) & (bool === false)) {
        step = step - 1;
  
        if (step == 2) bool = reset(bool);
      }

  };
}, settings);
