import React, { useEffect, useState } from "react";
import { Grid, Image, Header, Icon, Container, Card } from "semantic-ui-react";
// import { generateRecipe } from "../../utils/js/random-recipes";

function Recipe(props) {
  console.log("recipe +++", props.search);
  const [list, setlist] = useState([]);
  const [baseUri, setBaseUri] = useState("");

  const generateRandomRecipe = function () {
    fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=12",
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
        response.json().then(function (data) {
          setlist(data.results);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };


  function getListFromApi() {
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${props.search}&number=12`,
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
          console.log("data +++", data);
          if (data.results.length) {
            setlist(data.results);
          } else {
            setlist([]);
          }

          if (data.baseUri) {
            setBaseUri(data.baseUri);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getListFromApi();
  }, [props.search]);

  return (
    <section>
      <Container>
        <Header as="h2">Just for you </Header>
        <Grid>
          {list &&
            list.length &&
            list.map((i) => (
              <Grid.Column mobile={16} tablet={8} computer={4} key={i.id}>
                <Card onClick={() => props.getDetail(i.id)}>
                  <img
                    alt=""
                    height={300}
                    src={`${baseUri}${i.image}`}
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>{i.title}</Card.Header>
                    <Card.Meta>Ready in: {i.readyInMinutes}</Card.Meta>
                    <Card.Description>Servings: {i.servings}</Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Recipe;
