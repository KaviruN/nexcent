import "./styles/style.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Clients from "./components/Clients";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="containner">
      <Navbar />
      <Header />
      <Clients />
      <Cards />
    </div>
  )
}

export default App
