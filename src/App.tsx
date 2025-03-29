import "./styles/style.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Clients from "./components/Clients";
import Cards from "./components/Cards";
import Wraper from "./components/Wraper";

function App() {
  return (
    <div className="containner">
      <Navbar />
      <Header />
      <Clients />
      <Cards />
      <Wraper
        img="src/assets/wraper-img1.png"
        title="The unseen of spending three years at Pixelgrade"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
      />
    </div>
  )
}

export default App
