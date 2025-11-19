import logo from "../../images/logo.svg";
import "./style.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo do Site"></img>
      <p>
        <strong>Gabriel</strong>Books
      </p>
    </div>
  );
}

export default Logo;
