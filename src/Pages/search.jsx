import { useEffect, useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from "react-router-dom"; 

function Fetchdata() {
  let [apidata, setApidata] = useState([]);
  let [searchdata, setSearchdata] = useState("");

  async function FetchData() {
    try {
      fetch(`https://dummyjson.com/recipes/search?q=${searchdata}`)
        .then((res) => res.json())
        .then((data) => setApidata(data.recipes));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    FetchData();
  }, [searchdata]);

  return (
    <>
      <Header />
      <div className="uk-section uk-section-default uk-padding-remove-top">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-1-2@m">
              <form className="uk-search uk-search-default uk-width-1-1 uk-margin-small-bottom">
                <span data-uk-search-icon />
                <input
                  className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                  type="search"
                  placeholder="Search for recipes..."
                  onChange={(e) => {
                    setSearchdata(e.target.value);
                  }}
                />
              </form>
            </div>
 
          </div>
          <div
            className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top"
            data-uk-grid
          >
            {/* starting */}
            {apidata.map((value, index) => {
              return (
                <div className="uk-card" key={index}>
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
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
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
              );
            })}
          </div>
           
        </div>
      </div> 
      <Footer />
    </>
  );
}
export default Fetchdata;
