import p5 from "p5";
import React from "react";

const sketch = (p) => {
  p.setup = () => {
    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
};

export default function Sketch() {
  return <SketchWrapper sketch={sketch} />;
}

// Wrapper component
function SketchWrapper({ sketch }) {
  // const canvasRef = React.useRef(null);

  // React.useEffect(() => {
  //   new p5(sketch, canvasRef.current);
  // }, [sketch]);

  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       height: "100vh",
  //     }}
  //   >
  //     <div ref={canvasRef} />
  //   </div>
  // );
  return <div ref={(ref) => new p5(sketch, ref)} />;
}
