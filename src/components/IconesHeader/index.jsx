import sacola from "../../images/sacola.svg";
import perfil from "../../images/perfil.svg";
import "./style.css";

const icones = [sacola, perfil];

function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone} alt="icones"></img>
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
