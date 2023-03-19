import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "./redux/action";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  return (
    <div className="App">
      <div className="lg:h-[75%] h-[95%] w-[90%] lg:w-[45%] bg-white text-center">
        <h1 className="text-[3rem] font-[400] mb-8">COUNTER</h1>
        <p className="text-[5rem] font-[500] mb-8">{counter}</p>
        <div className="w-[50%] flex lg:gap-0 gap-2 justify-around m-auto">
          <button
            className="border-solid border-2 border-slate-400 text-black py-1 px-2 bg-[#c1c1c194] font-[400]"
            onClick={() => {
              dispatch(increase());
            }}
          >
            Increase
          </button>
          <button
            className="border-solid border-2 border-slate-400 text-black py-1 px-2 bg-[#c1c1c194] font-[400]"
            onClick={() => {
              dispatch(decrease());
            }}
          >
            Decrease
          </button>
          <button
            className="border-solid border-2 border-slate-400 text-black py-1 px-2 bg-[#c1c1c194] font-[400]"
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
