
import "./App.css";
import Category from "./components/Category";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar.jsx";
import SkinComponent from "./components/SkinComponent";
import Slider from "./components/Slider";

function App() {
  return <>
  <Navbar/>
  <Slider/>
  <Category/>
  <Posts Title="Latest Posts" GridValue={3}/>
  <SkinComponent/>
  <Posts Title="Popular Post" GridValue={3}/>
  <Posts noTitle GridValue={2}/>
  </>;
}

export default App;
