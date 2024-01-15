import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const { count, actualValue } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 bg-orange-50 rounded-md p-10">
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
        <h1 className="text-4xl font-bold mx-10">{count}</h1>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-blue-500 text-xl font-semibold text-white"
        >
          Increment By 5
        </button>
      </div>
      <div className="mt-4">
        {actualValue.map((message, index) => (
          <p key={index} className="text-green-600">
            {message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
