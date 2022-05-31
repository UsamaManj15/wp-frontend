import "../App.css";
import logo from "../logo.svg";

function Logo() {
  return (
    <div className="p-8 w-4/5 mx-auto">
      <img src={logo} className="App-logo w-full" alt="logo" />
    </div>
  );
}

export default Logo;
