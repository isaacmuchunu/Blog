import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage"


const App = () => {
  return (
    <main className="App body-font font-poppins">
      <Header />
      <HomePage/>
      <Footer/>
    </main>
  );
};
export default App;
