// In co-operation with Teemu Kosonen, Arttu Kesanto.
import React from "react";
import FormComp from "./ToDoForm";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

export default function AppNotes() {
  const [input, setInput] = React.useState({ desc: "", date: "" });
  const [todos, setTodos] = React.useState([]);

  const deleteTodo = event => {
    setTodos(todos.filter((_, i) => i !== Number(event.target.id))); // Filter-stuff.
  };

  const addTodo = event => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput({ desc: "", date: "" });
  };

  const inputChanged = event => {
    setInput({ ...input, [event.target.name]: event.target.value }); // Copy from input, set value / target.
  };

  const columns = [
    {
      Header: "Description",
      accessor: "desc"
    },
    {
      Header: "Date",
      accessor: "date"
    },
    {
      Cell: ({ index }) => (
        <button id={index} onClick={deleteTodo}> {/*// Certain ID deleted.*/}
          Delete added
        </button>
      ),
      filterable: false,
      sortable: false,
      width: 90
    }
  ];

  return (
    <div className="App">
      <header>Your own notes (BETA)</header>
      <FormComp inputChanged={inputChanged} input={input} addTodo={addTodo} /> {/* Propsing stuff also functions to another component IMPORTANT */}
      <ReactTable data={todos} columns={columns} filterable="true" /> {/* Using ReactTable*/}
    </div>
  );
}