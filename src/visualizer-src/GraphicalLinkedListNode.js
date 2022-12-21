import { SVG } from "@svgdotjs/svg.js";

class GraphicalLinkedListNode {
  data;
  next;
  svgCircle;
  svgText;

  constructor(data) {
    this.data = data;
    this.next = null;
    const canvas = SVG("#canvas");
    this.svgCircle = canvas
      .circle(50)
      .cx(50)
      .cy(50)
      .attr({ fill: "#fefefe", stroke: "#000000" });
    this.svgText = canvas.text(data).cx(50).cy(50);
  }
}

export default GraphicalLinkedListNode;
