const canvasSketch = require("canvas-sketch");
const p5 = require("p5");

new p5();

const settings = {
  dimensions: [1080, 1080],
  p5: true,
  animate: true,
  context: "webgl",
  duration: 6,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
};

canvasSketch(() => {
  // Inside this is a bit like p5.js 'setup' function
  // ...

  // Attach events to window to receive them
  window.mouseClicked = () => {
    console.log('Mouse clicked');
  };

  // Return a renderer to 'draw' the p5.js content
  return ({ playhead, width, height }) => {
    // Draw with p5.js things
    clear()
    normalMaterial();
    rotateX(playhead * 2 * PI);
    rotateZ(playhead * 2 * PI);
    cylinder(20, 50);
  };
}, settings);
