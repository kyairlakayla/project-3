import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Navigation from "./components/Navigation/index";
import Hero from "./components/Hero/index";
import Recipe from "./components/Recipe/index";
import Single from "./components/Single";
import Saved from "./components/Saved";
import Footer from "./components/Footer/index";
import { useState } from "react";

function App() {

  const [search, setSearch] = useState("food");
  const [detail, setDetail] = useState(null);

  const getDetail = (id) => {
    console.log("card click +++");
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "6127f14de5msh612ece9ab1405a8p1e0f35jsnd4ba0173c7d7",
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          console.log("detail recipe +++", data);
          if (data) {
            setDetail(data);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <section className="top-section">
        <Navigation></Navigation>
        <Hero setSearch={setSearch}></Hero>
      </section>

      <main className="middle-section">
        <Recipe search={search} getDetail={getDetail}></Recipe>
        <Single detail={detail}></Single>
        <Saved></Saved>
      </main>

      <footer className="bottom-section">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
