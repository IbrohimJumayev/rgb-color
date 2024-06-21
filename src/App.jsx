import React, { useReducer } from "react";


const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  let newState = { red: state.red, green: state.green, blue: state.blue };

  switch (action.type) {
    case "INCREMENT_RED":
      newState.red = state.red + 10 > 255 ? 255 : state.red + 10;
      break;
    case "DECREMENT_RED":
      newState.red = state.red - 10 < 0 ? 0 : state.red - 10;
      break;
    case "INCREMENT_GREEN":
      newState.green = state.green + 10 > 255 ? 255 : state.green + 10;
      break;
    case "DECREMENT_GREEN":
      newState.green = state.green - 10 < 0 ? 0 : state.green - 10;
      break;
    case "INCREMENT_BLUE":
      newState.blue = state.blue + 10 > 255 ? 255 : state.blue + 10;
      break;
    case "DECREMENT_BLUE":
      newState.blue = state.blue - 10 < 0 ? 0 : state.blue - 10;
      break;
    default:
      break;
  }

  return newState;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getTextColor = () => {
    return state.red + state.green + state.blue > 382 ? "black" : "white";
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          color: getTextColor(),
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
