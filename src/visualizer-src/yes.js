import { SVG } from "@svgdotjs/svg.js";

const drawRectangle = () => {
  const canvas = SVG("#canvas");
  canvas.rect(100, 100).animate().attr({ fill: "#f06" });
};

export { drawRectangle };
