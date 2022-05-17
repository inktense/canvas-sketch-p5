# pj5-animations

Testing pj5 library while using canvas-sketch.

--------------------------------
## Pre-requisites

- [canvas-sketch](https://github.com/mattdesl/canvas-sketch).
- [p5.js](https://p5js.org/).
---------------------------------------------------------------
## Commands 

Start project 
```
canvas-sketch index.js
```
Expoting images 
```
canvas-sketch index.js --output=output/
```

Exporting gifs

First, you'll need `ffmpeg` installed. You can do the following to install a global utility:
```
npm install @ffmpeg-installer/ffmpeg --global
```
Then run: 
```
# Save animations to GIF file instead
canvas-sketch index.js --output=tmp --stream=gif

# Save animations to MP4 file
canvas-sketch animation.js --output=tmp --stream
```
