import "./styles/style.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Clients from "./components/Clients";
import Cards from "./components/Cards";
import Wraper from "./components/Wraper";
import Stats from "./components/Stats";
import About from "./components/About";
import Community from "./components/Community";
import Demo from "./components/Demo";

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
      < Stats/>
      <Wraper
        img="src/assets/wraper-img2.png"
        title="How to design your site footer like we did"
        text="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
      />
      <About />
      <Community />
      <Demo />
    </div>
  )
}

export default App
