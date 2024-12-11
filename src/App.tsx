import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Simpsons from "./components/Simpsons";

import "./styles/app.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import "./styles/simpsons.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Simpsons />
      <Footer />
    </>
  );
}
