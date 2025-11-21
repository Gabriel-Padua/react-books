import Header from "./components/Header";
import styled from "styled-components";
import Pesquisa from "./components/Pesquisa";

const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
`;

function App() {
  return (
    <AppConteiner>
      <Header />
      <Pesquisa />
    </AppConteiner>
  );
}

export default App;
