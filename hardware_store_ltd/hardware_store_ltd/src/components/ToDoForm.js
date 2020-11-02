// In co-operation with Teemu Kosonen, Arttu Kesanto.
import React from "react";

export default function FormComp(props) {
  return (
    <div>
      <div className="inputfield">
        <label>Buyer's notes: </label>
        <input
          name="desc"
          type="text"
          placeholder="Enter text"
          value={props.input.desc} // Props.
          onChange={props.inputChanged}
        />

        <label> Date added (if provided): </label>
        <input
          name="date"
          type="date"
          value={props.input.date} // Using propped items.
          onChange={props.inputChanged}
        ></input>
        <label> </label>
        <button onClick={props.addTodo}>Add an item to your list</button>
      </div>
    </div>
  );
}