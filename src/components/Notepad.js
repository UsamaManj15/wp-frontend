function Notepad({ placeholder }) {
  return (
    <div className="p-8 w-4/5 mx-auto">
      <p className="p-2 w-full text-center">
        Type a few sentences and see the next word predictions appear in the section below!
      </p>
      <textarea
        className="w-full h-40 p-2 bg-black text-gray-400 rounded-lg mx-auto"
        placeholder={placeholder || "Type here..."}
      />
    </div>
  );
}

export default Notepad;
