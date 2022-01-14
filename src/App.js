import Topbar from "./components/Topbar/Topbar";
import GlobalStyle from "./styles/global";
import "./styles/font.css";
import MainContent from "./components/MainContent/MainContent";
import MakeRandomStars from "./components/MakeRandomStars/MakeRandomStars"

function App() {
  return (
    <>
      <GlobalStyle />
      <Topbar />
      <MainContent />
      <MakeRandomStars />
    </>
  );
}

export default App;
