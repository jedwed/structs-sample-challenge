import { useState, useEffect } from "react";
import GraphicalLinkedList from "../visualizer-src/GraphicalLinkedList";

function Interface() {
  // A state storing a Graphical Data Structure (only linked lists supported in this case)
  const [struct, setStruct] = useState(new GraphicalLinkedList());

  // The input value text field
  const [value, setValue] = useState(0);

  const handleAppend = (e) => {
    e.preventDefault();
    // Call the append method on the Graphical Data Structure class (Linked list)
    struct.append(value);
    setValue(0);
  };

  return (
    <form onSubmit={handleAppend}>
      <label>
        Value
        <input
          value={value}
          type="number"
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Append</button>
      </label>
    </form>
  );
}

export default Interface;
