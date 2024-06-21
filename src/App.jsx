import React, { useReducer } from "react";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  const newState = { red: state.red, green: state.green, blue: state.blue };

  switch (action.type) {
    case "INCREMENT_RED":
      newState.red = Math.min(state.red + 10, 255);
      break;
    case "DECREMENT_RED":
      newState.red = (state.red - 10 + 256) % 256;
      break;
    case "INCREMENT_GREEN":
      newState.green = Math.min(state.green + 10, 255);
      break;
    case "DECREMENT_GREEN":
      newState.green = (state.green - 10 + 256) % 256;
      break;
    case "INCREMENT_BLUE":
      newState.blue = Math.min(state.blue + 10, 255);
      break;
    case "DECREMENT_BLUE":
      newState.blue = (state.blue - 10 + 256) % 256;
      break;
    default:
      break;
  }

  return newState;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      >
        <h1>RGB Color: {`rgb(${state.red}, ${state.green}, ${state.blue})`}</h1>
      </div>
      <div className="colors">
        <div className="color-control">
          <p>Red: {state.red}</p>
          <button onClick={() => dispatch({ type: "INCREMENT_RED" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_RED" })}>-</button>
        </div>
        <div className="color-control">
          <p>Green: {state.green}</p>
          <button onClick={() => dispatch({ type: "INCREMENT_GREEN" })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT_GREEN" })}>
            -
          </button>
        </div>
        <div className="color-control">
          <p>Blue: {state.blue}</p>
          <button onClick={() => dispatch({ type: "INCREMENT_BLUE" })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT_BLUE" })}>
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
