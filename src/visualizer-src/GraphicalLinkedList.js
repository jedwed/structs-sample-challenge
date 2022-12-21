import { SVG } from "@svgdotjs/svg.js";
import GraphicalLinkedListNode from "./GraphicalLinkedListNode";

class GraphicalLinkedList {
  head = null;

  append(data) {
    const newNode = new GraphicalLinkedListNode(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;

    // Draww a horizontal arrow from the 'curr' node
    SVG("#canvas")
      .line(0, 0, 50, 0)
      .move(curr.svgCircle.cx() + 25, 50)
      .stroke({ width: 1, color: "#000000" })
      .marker("end", 20, 10, function (add) {
        add.polyline("0,0 0,10 10,5");
      });

    // Move the circle and the text representing the node to the correct position
    // 100 pixels to the right of the 'curr' node
    newNode.svgCircle.cx(curr.svgCircle.cx() + 100);
    newNode.svgText.cx(curr.svgCircle.cx() + 100);
  }
}

export default GraphicalLinkedList;
