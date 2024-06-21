import { useReducer } from "react";

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_RED":
      return { ...state, red: Math.min(state.red + 10, 255) };
    case "DECREMENT_RED":
      return { ...state, red: (state.red - 10 + 256) % 256 };
    case "INCREMENT_GREEN":
      return { ...state, green: Math.min(state.green + 10, 255) };
    case "DECREMENT_GREEN":
      return { ...state, green: (state.green - 10 + 256) % 256 };
    case "INCREMENT_BLUE":
      return { ...state, blue: Math.min(state.blue + 10, 255) };
    case "DECREMENT_BLUE":
      return { ...state, blue: (state.blue - 10 + 256) % 256 };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementRed = () => {
    dispatch({ type: "INCREMENT_RED" });
  };

  const decrementRed = () => {
    dispatch({ type: "DECREMENT_RED" });
  };

  const incrementGreen = () => {
    dispatch({ type: "INCREMENT_GREEN" });
  };

  const decrementGreen = () => {
    dispatch({ type: "DECREMENT_GREEN" });
  };

  const incrementBlue = () => {
    dispatch({ type: "INCREMENT_BLUE" });
  };

  const decrementBlue = () => {
    dispatch({ type: "DECREMENT_BLUE" });
  };

  const containerStyle = {
    backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
    color: state.red + state.green + state.blue > 382 ? "black" : "white",
    padding: "150px 50px",
    textAlign: "center",
  };

  return (
    <>
      <div className="container" style={containerStyle}>
        <h1>RGB Color: {`rgb(${state.red}, ${state.green}, ${state.blue})`}</h1>
      </div>
      <div className="colors">
        <div className="red">
          <p>Red: {state.red}</p>
          <div className="buttons">
            <button onClick={incrementRed}>+</button>
            <button onClick={decrementRed}>-</button>
          </div>
        </div>
        <div className="green">
          <p>Green: {state.green}</p>
          <div className="buttons">
            <button onClick={incrementGreen}>+</button>
            <button onClick={decrementGreen}>-</button>
          </div>
        </div>
        <div className="blue">
          <p>Blue: {state.blue}</p>
          <div className="buttons">
            <button onClick={incrementBlue}>+</button>
            <button onClick={decrementBlue}>-</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
