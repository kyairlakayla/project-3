/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Image, Card, Icon, Header, Grid, Container } from "semantic-ui-react";
import "./index.css";

function Saved() {
  const randomSaves = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <section id="saved">
      <Container>
        <Header textAlign="center" size="large">
          Saved Recipe
        </Header>
        <Grid>
          {randomSaves.map((i) => (
            <Grid.Column mobile={16} tablet={8} computer={4} key={i}>
              <Card>
                <Image
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="user" />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Saved;
