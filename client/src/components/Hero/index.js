import React from "react";
import {Header, Input, Icon } from "semantic-ui-react";
import "./index.css";

function Hero(props) {

  console.log('hero props +++', props);

  const searchInputChnage = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      props.setSearch(e.target.value);
    }
  };

  return (
    <section className="hero ui placeholder segment">
      <Header as="h1" textAlign="center" inverted>
        Find a Recipe.
      </Header>
      <Input
        icon="search"
        size="huge"
        iconPosition="left"
        placeholder="Search for food"
        onKeyPress={(e) => searchInputChnage(e)}
      />
      <Icon name="angle double down" size="huge" color="grey" />
    </section>
  );
}

export default Hero;
