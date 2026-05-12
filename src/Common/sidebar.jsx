import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  let [dishdata, setDishdata] = useState([]);
  const FetchDishData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes/tags");
      setDishdata(response.data);
    } catch (error) {
      console.log("dish api", error);
    }
  };
  useEffect(() => {
    
  window.scrollTo({
  top: 600,
  left: 0,
  behavior: "smooth",}) 
    FetchDishData();
       
  }, []);
  return (
    <>
     <div className="uk-width-1-4@m sticky-container">
      <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
        <h2>Recipes</h2>
        <ul
          className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top"
          data-uk-nav
        >
          <li className="uk-parent uk-open">
            <Link to="#">Dish Type </Link>
            <ul className="uk-nav-sub">
              {dishdata?.map((value, index) => {
                return (
                  <>
                    <li key={index}>
                      <Link to={`/Dishtype/${value}`}>{value}</Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </li>
          <li className="uk-parent">
            <Link to="#">Meal Type</Link>
            <ul className="uk-nav-sub">
              <li>
                <Link to={`/Mealtype/Breakfast`}>Breakfast and Brunch</Link>
              </li>
              <li>
                <Link to={`/Mealtype/Dessert`}>Desserts</Link>
              </li>
              <li>
                <Link to={`/Mealtype/Dinner`}>Dinners</Link>
              </li>
              <li>
                <Link to={`/Mealtype/Lunch`}>Lunch</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}
export default Sidebar;
