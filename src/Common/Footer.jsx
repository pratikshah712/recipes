import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="uk-section uk-section-default">
        <div className="uk-container uk-text-secondary uk-text-500">
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div>
              <a href="/" className="uk-logo">
                Kocina
              </a>
            </div>
            <div className="uk-flex uk-flex-middle uk-flex-right@s">
              <div data-uk-grid className="uk-child-width-auto uk-grid-small">
                <div>
                  <a
                    href="https://www.facebook.com/share/1D7gAdJLty/?mibextid=wwXIfr"
                    data-uk-icon="icon: facebook; ratio: 0.8"
                    className="uk-icon-button facebook"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/pratik._.shah712/"
                    data-uk-icon="icon: instagram; ratio: 0.8"
                    className="uk-icon-button instagram"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://x.com/msdhoni"
                    data-uk-icon="icon: twitter; ratio: 0.8"
                    className="uk-icon-button twitter"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="uk-child-width-1-2@s uk-child-width-1-4@m"
            data-uk-grid
          >
            <div>
              <ul className="uk-list uk-text-small">
                <li>
                  <Link className="uk-link-text" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="uk-link-text" to="/sign-up">
                    Sign-Up
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-list uk-text-small">
                <li>
                  <Link className="uk-link-text" to="/sign-in">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="uk-link-text" to= {`/Mealtype/Dessert`} >
                    Dessert
                  </Link>
                </li>

                <li>
                  <Link className="uk-link-text" to="#"></Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-list uk-text-small">
                <li>
                  <Link className="uk-link-text" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="uk-link-text" to={`/Mealtype/Lunch`}>
                    Lunch
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-list uk-text-small">
                <li>
                  <Link className="uk-link-text" to="/search">
                    Search
                  </Link>
                </li>
                <li>
                  <Link className="uk-link-text" to={`/Mealtype/Dinner`} >
                    Dinner
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="uk-margin-medium-top uk-text-small uk-text-muted">
            <div>
              Made by Pratik Shah
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
