import Intro from "./Components/Intro/Intro";
import ThemeProvider from "./Components/ThemeProvider/ThemeProvider";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Subscribe/Subscribe";
import UnderstandHatom from "./Components/UnderstandHatom/UnderstandHatom";
import Features from "./Components/Features/Features";
import Coin from "./Components/Coin/Coin";

function App() {
  return (
    <ThemeProvider>
      <Intro />
      <Coin />
      <Features />
      <UnderstandHatom />
      <Subscribe />
      <Disclaimer />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
