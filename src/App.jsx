
import "./App.css";
import Category from "./components/Category";
import LatestPosts from "./components/Latests";
import Navbar from "./components/Navbar.jsx";
import SkinComponent from "./components/SkinComponent";
import Slider from "./components/Slider";

function App() {
  return <>
  <Navbar/>
  <Slider/>
  <Category/>
  <LatestPosts/>
  <SkinComponent/>
  </>;
}

export default App;
