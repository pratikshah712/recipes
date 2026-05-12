import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="uk-navbar-container uk-letter-spacing-small">
        <div className="uk-container">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
              <a className="uk-navbar-item uk-logo" href="/">
                Kocina
              </a>
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
              <Link
                className="uk-navbar-toggle uk-hidden@m"
                to="#offcanvas"
                data-uk-toggle
              >
                <span data-uk-navbar-toggle-icon />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
