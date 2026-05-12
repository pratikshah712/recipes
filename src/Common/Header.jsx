import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="uk-navbar-container uk-letter-spacing-small">
        <div className="uk-container">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
              <Link className="uk-navbar-item uk-logo" to="/">
                Kocina
              </Link>
              <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                <li className="uk-active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav uk-visible@m">
                <li>
                  <Link to="/sign-in">Sign In</Link>
                </li>
              </ul>
              <div className="uk-navbar-item">
                <div>
                  <Link className="uk-button uk-button-primary" to="/sign-up">
                    Sign Up
                  </Link>
                </div>
              </div>
              <button
                className="custom-menu-btn uk-hidden@m "
                type="button"
                data-uk-toggle="target: #offcanvas"
              >
                <span className="fa fa-bars"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <div id="offcanvas" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            data-uk-close
          ></button>

          <h3 className="uk-light">Menu</h3>

          <ul className="uk-nav uk-nav-default">
            <li className="uk-active">
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/search">Search</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>

 
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
