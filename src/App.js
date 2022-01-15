import Topbar from "./components/Topbar/Topbar";
import GlobalStyle from "./styles/global";
import "./styles/font.css";
import MainContent from "./components/MainContent/MainContent";
import MakeRandomStars from "./components/MakeRandomStars/MakeRandomStars";
import CustomModal from "./components/CustomModal/CustomModal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Topbar />
      <MainContent />
      <MakeRandomStars />
      <CustomModal />
    </>
  );
}

export default App;
