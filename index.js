const canvasSketch = require("canvas-sketch");
const p5 = require("p5");

new p5();

const settings = {
  dimensions: [1080, 1080],
  p5: true,
  animate: true,
  duration: 15,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
};

canvasSketch(() => {
  // Setup
  stroke(0, 18);
  noFill();

  let step = 0;

  return ({ playhead, width, height }) => {
    const widthOffset = width / 5;

    //The curve starts at P0 going toward P1 and arrives at P3 coming from the direction of P2. 
    //Usually, it will not pass through P1 or P2; these points are only there to provide directional information. 
    //The distance between P1 and P2 determines "how far" and "how fast" the curve moves towards P1 before turning towards P2. 
    const x1 = widthOffset; // OK
    const y1 = height / 2; // OK
    const x2 = widthOffset; // OK
    const y2 = (height / 10) + step;

    const x3 = width - widthOffset; // OK
    const y3 = (height - (height / 10)) - step;
    const x4 = width - widthOffset; // OK
    const y4 = height / 2; // OK
  
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
    playhead += 0.005;

    step += 2;
  
    if(y2 >= (height - (height / 10))) {
      clear()
      background('white')
    }
  };
}, settings);
