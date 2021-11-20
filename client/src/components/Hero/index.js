import React from 'react'
import { Button, Header, Input, Icon } from 'semantic-ui-react'
import "./index.css"

function Hero() {
    return (
      <section className="hero ui placeholder segment">
        <Header as="h1" textAlign="center" inverted>
          Find a Recipe.
        </Header>
        <Input icon="search" size="huge" iconPosition="left" placeholder="Search for food" />
        <Icon name="angle double down" size="huge" color="grey" />
      </section>
    );
}

export default Hero
