import { useState, useEffect } from "react";
import GraphicalLinkedList from "../visualizer-src/GraphicalLinkedList";

function Interface() {
  const [struct, setStruct] = useState();
  useEffect(() => {
    setStruct(new GraphicalLinkedList());
  }, []);

  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    struct.append(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Value
        <input
          value={value}
          type="number"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Append</button>
      </label>
    </form>
  );
}

export default Interface;
