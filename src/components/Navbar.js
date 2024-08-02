import menu from "../assets/images/menu.png"
function Navbar() {
    return (
      <nav id="home">
        <h1>Perfumy</h1>
        <div className="menu">
        <img  id="menu-img" src={menu} alt="" />
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
  export default Navbar
