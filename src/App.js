import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Product from "./components/Product";
import About from "./components/About";
import Footer from "./components/Footer";
import Sidenav from "./components/Sidenav";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Sidenav></Sidenav>
            <Search></Search>
            <Product></Product>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default App
