import React from "react";
import { Grid, Image, Header, Icon, Container, Card } from "semantic-ui-react";

function Recipe() {
  const grids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section>
      <Container>
        <Header as="h2">Just for you </Header>
        <Grid>
          {grids.map((i) => (
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Card>
                <Image
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574"
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

export default Recipe;
