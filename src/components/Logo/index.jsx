import styled from "styled-components";
import logo from "../../images/logo.svg";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo do Site" />
      <p>
        <strong>Gabriel</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
