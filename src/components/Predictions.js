import { useState } from "react";

function Predictions({ depth = 1 }) {
  const [predictions, setPredictions] = useState(["my", "name", "is"]);
  return (
    <>
      <div className="w-full py-2 bg-gray-400 shadow-lg shadow-black" />
      <div className="w-full bg-gray-500 bg-opacity-20">
        <div className="p-8 w-4/5 mx-auto flex flex-col items-center">
          <p className="p-2 text-left">
            While typing above, press <span className="bg-gray-300 p-1 rounded">Tab</span> to accept the words appearing
            below one-by-one. Predicting next <b>{depth}</b> word(s)...
          </p>
          <div className="p-2 w-full flex items-center gap-3">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            {predictions.map((word, key) => (
              <button
                // eslint-disable-next-line react/no-array-index-key
                key={key}
                type="button"
                className="p-1 text-left bg-gray-300 lowercase rounded"
                onClick={() => predictions.shift() && setPredictions([...predictions])}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Predictions;
