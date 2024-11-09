import Navbar from "./Components/Navbar";
import End from "./Pages/End";
import Home from "./Pages/Home";
import Information from "./Pages/Information";
import Products from "./Pages/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Products />
      <Information />
      <End />
    </div>
  );
}

export default App;
