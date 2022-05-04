const canvasSketch = require("canvas-sketch");
const p5 = require("p5");

new p5();

const settings = {
  dimensions: [1080, 1080],
  p5: true,
  animate: true,
  duration: 20,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
};

canvasSketch(() => {
  // Inside this is a bit like p5.js 'setup' function
  // ...
  stroke(0, 18);
  // 
  
  noFill();
  // 
  let t = 0;

  // Attach events to window to receive them
  window.mouseClicked = () => {
    console.log('Mouse clicked');
  };

  // Return a renderer to 'draw' the p5.js content
  return ({ playhead, width, height }) => {
    background('#293241')

    const widthOffset = width / 5;
    //console.log(bezierWidth, width / 10)
    // console.log("noise => ", noise( 0.005, 0.03))

    //The curve starts at P0 going toward P1 and arrives at P3 coming from the direction of P2. 
    //Usually, it will not pass through P1 or P2; these points are only there to provide directional information. 
    //The distance between P1 and P2 determines "how far" and "how fast" the curve moves towards P1 before turning towards P2. 
    const x1 = widthOffset; // OK
    const y1 = height / 2; // OK
    const x2 = widthOffset; // OK
    const y2 = (height / 10) + t;

    const x3 = width - widthOffset; // OK
    const y3 = (height - (height / 10)) - t;
    const x4 = width - widthOffset; // OK
    const y4 = height / 2; // OK

    // const x11 = widthOffset; // OK
    // const y11 = height / 2; // OK
    // const x22 = widthOffset; // OK
    // const y22 = height - (height / 10);

    // const x33 = width - widthOffset; // OK
    // const y33 = height / 10;
    // const x44 = width - widthOffset; // OK
    // const y44 = height / 2; // OK


    // console.log("y2 -> y22 ", y2, y22)
    // console.log("y3 -> y33 ", y3, y33)

    // const x1 = width * noise(playhead + 15);
    // const x2 = width * noise(playhead + 25);
    // const x3 = width * noise(playhead + 35);
    // const x4 = width * noise(playhead + 45);
    // const y1 = height * noise(playhead + 55);
    // const y2 = height * noise(playhead + 65);
    // const y3 = height * noise(playhead + 75);
    // const y4 = height * noise(playhead + 85);


//console.log(width, height)

    line(x1, y1, x2, y2);
    line(x3, y3, x4, y4);

    // line(x11, y11, x22, y22);
    // line(x33, y33, x44, y44);
  
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  //  bezier(x11, y11, x22, y22, x33, y33, x44, y44);
  
    playhead += 0.005;

    t += 2;
  
    // clear the background every 500 frames using mod (%) operator
    // if (frameCount % 1000 == 0) {
    // background(255);
    // }
  };
}, settings);
