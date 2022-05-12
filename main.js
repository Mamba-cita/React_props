function App() {
  return (
    <div>
      <Headers />
      <Navbar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

function Headers() {
  return (
    <div className="nav_bar">
      <nav>
        <img src="./images/logo1.png" className="logo_image" />

        <h1 className="logo_title"> Secure Funds Unit </h1>
      </nav>
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul className="nav_list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Signup</a></li>
      </ul>
    </nav>
  );
}
