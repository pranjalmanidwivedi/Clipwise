import "./App.css";
import Navbar from "./assets/components/navbar";
import Herosection from "./assets/components/Herosection";
import ProductPage from "./assets/components/Product-page";
import Offersection from "./assets/components/Offersection";
import Footer from "./assets/components/footer";

function App() {
  return (
    <>
      <div className="home h-screen w-screen">
        <Navbar />
        <Herosection />
        <ProductPage />
        <Offersection />
        <Footer />
      </div>
      
    </>
  );
}

export default App;
