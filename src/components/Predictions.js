function Predictions({ depth = 1 }) {
  return (
    <>
      <div className="w-full py-2 bg-gray-400 shadow-lg shadow-black" />
      <div className="p-8 w-4/5 mx-auto flex items-center">
        <span className="flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
        <p className="p-2 text-left">
          Predictions will appear here. Press <span className="bg-gray-300 p-1 rounded">Tab</span> to accept each
          one-by-one. Predicting next <b>{depth}</b> word(s).
        </p>
      </div>
    </>
  );
}

export default Predictions;
