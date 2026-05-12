import { Link, useParams } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { useEffect, useState } from "react";
import Sidebar from "../Common/sidebar";
import axios from "axios";

function MealType() {
  return (
    <>
      <Header />
      <Hero />
      <FetchApiData />
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <>
      <div className="uk-container">
        <div
          className="uk-border-rounded-large uk-background-top-center uk-background-cover 
    uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1"
          style={{ backgroundImage: "url(/img/header.jpg)" }}
        >
          <div className="uk-position-cover uk-header-overlay" />
          <div className="uk-position-relative" data-uk-grid>
            <div className="uk-width-1-2@m uk-flex uk-flex-middle">
              <div className="uk-padding-large uk-padding-remove-right">
                <h1 className="uk-heading-small uk-margin-remove-top">
                  Choose from thousands of recipes
                </h1>
                <p className="uk-text-secondary">
                  Appropriately integrate technically sound value with scalable
                  infomediaries negotiate sustainable strategic theme areas
                </p>
                <a
                  className="uk-text-secondary uk-text-600 uk-text-small hvr-forward"
                  href="sign-up.html"
                >
                  Sign up today
                  <span
                    className="uk-margin-small-left"
                    data-uk-icon="arrow-right"
                  />
                </a>
              </div>
            </div>
            <div className="uk-width-expand@m"></div>
          </div>
        </div>
      </div>
    </>
  );
}
function FetchApiData() {
  let [apidata, setApidata] = useState([]);
  let { meal } = useParams();

  const FetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/recipes/meal-type/${meal}`,
      );
      setApidata(response.data.recipes);
    } catch (error) {
      console.log("SearchApi Home.jsx", error);
    }
  };
  useEffect(() => {
    window.scrollTo({
  top: 600,
  left: 0,
  behavior: "smooth",}) 
    FetchData();
  }, [meal]);

  return (
    <>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-1-4@m sticky-container">
              <Sidebar />
            </div>
            <div className="uk-width-expand@m">
              <div data-uk-grid>
  
              </div>
              <div
                className="uk-child-width-1-2 uk-child-width-1-3@s"
                data-uk-grid
              >
                {apidata.map((value, index) => {
                  return (
                    <>
                      <div key={index}>
                        <div className="uk-card">
                          <div className="uk-card-media-top uk-inline uk-light">
                            <img
                              className="uk-border-rounded-medium"
                              src={value.image}
                              alt="Course Title"
                            />
                            <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                            <div className="uk-position-xsmall uk-position-top-right">
                              <a
                                href="#"
                                className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                data-uk-icon="heart"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                              {value.name}
                            </h3>
                            <div
                              className="uk-text-xsmall uk-text-muted"
                              data-uk-grid
                            >
                              <div className="uk-width-auto uk-flex uk-flex-middle">
                                <span
                                  className="uk-rating-filled"
                                  data-uk-icon="icon: star; ratio: 0.7"
                                />
                                <span className="uk-margin-xsmall-left">
                                  {value.rating}
                                </span>
                                <span>({value.reviewCount})</span>
                              </div>
                              <div className="uk-width-expand uk-text-right">
                                by{value.cuisine}
                              </div>
                            </div>
                          </div>
                          <Link
                            to={`/recipe/${value.id}`}
                            className="uk-position-cover"
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MealType;
