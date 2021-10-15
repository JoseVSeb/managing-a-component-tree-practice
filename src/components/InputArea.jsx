import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  return (
    <div className="form">
      <input
        onChange={(event) => {
          setItem(event.target.value);
        }}
        type="text"
        value={item}
      />
      <button
        onClick={() => {
          props.onSubmit(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
