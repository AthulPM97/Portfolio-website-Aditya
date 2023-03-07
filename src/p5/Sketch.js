import p5 from "p5";
import React from "react";

const sketch = (p) => {
  let bubbles = [];
  p.setup = () => {
    const parent = document.getElementById("app-root");
    const parentWidth = parent.offsetWidth;

    const canvas = p.createCanvas(parentWidth, p.windowHeight);

    canvas.position(0, 0);
    canvas.style("z-index", "-1");
  };

  p.draw = () => {
    p.background(255);
    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].display();

      // Check if bubble is off screen
      if (bubbles[i].y < -bubbles[i].r) {
        bubbles.splice(i, 1);
      }
    }

    // Add new bubble every 30 frames
    if (p.frameCount % 30 === 0) {
      bubbles.push(
        new Bubble(p.random(p.windowWidth), p.windowHeight, p.random(10, 50))
      );
    }
  };

  class Bubble {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.speed = p.random(1, 3);
    }

    move() {
      this.y -= this.speed;
    }

    display() {
      p.stroke(0);
      p.strokeWeight(2);
      p.noFill();
      p.ellipse(this.x, this.y, this.r * 2);
    }
  }
};

export default function Sketch() {
  return <SketchWrapper sketch={sketch} />;
}

// Wrapper component
function SketchWrapper({ sketch }) {
  return <div ref={(ref) => new p5(sketch, ref)} />;
}
