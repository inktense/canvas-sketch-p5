const canvasSketch = require("canvas-sketch");
const p5 = require("p5");

new p5();

const settings = {
 dimensions: [1600, 1200],
  p5: true,
 // context: "webgl",
  // Enable MSAA
//   attributes: {
//     antialias: true,
//   },
};

let points = [];
let density = 100;

canvasSketch((p5) => {
    //createCanvas(600, 200);
    background(30);
    console.log("width", width);
    let space = width / density;
    console.log("space", space);
    for (let x = 0; x < width; x += space) {
        for (let y = 0; y < height; y += space) {
            let p = createVector(x, y);
            console.log('x -> ', x, "y -> ", y)
           // console.log("p ", p)
            points.push(p);
        }
    }

  return ({ playhead, width, height }) => {
    noStroke();

    for (let i = 0; i < 10000; i++) {
        console.log("sfs ", points[i])
        let angle = createVector(points[i].x, points[i].y);
        points[i].add(angle);
        stroke('white')
        ellipse(points[i].x, points[i].y, 5);
    }
  };
}, settings);
