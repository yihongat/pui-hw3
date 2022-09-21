import BunBunLogo from "../../assets/logo-01.svg";

const Navbar = () => {
  return (
    <header className="siteHeader">
      <img
        src={BunBunLogo}
        className="logo"
        alt="Logo of the Bun Bun Bake Shop, an outline of a "
      />
      <div className="headerItems">
        <nav className="navbar">
          <div>
            <a href="/" className="selectedPage">
              Products
            </a>
          </div>
          <div id="cartItem">
            <a href="/">Cart</a>
          </div>
        </nav>
        <hr />
        <div className="tagline">Our hand-made cinnamon rolls</div>
      </div>
    </header>
  );
};

export default Navbar;
