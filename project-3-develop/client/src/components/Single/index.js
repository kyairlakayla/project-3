import React from "react";
import { Card } from "semantic-ui-react";

function Single(props) {
  console.log("single +++", props);
  return (
    <>
      {props && props.detail && (
        <section id="single" className="single">
          <h3>{props.detail.title}</h3>
          <Card
            className="single-recipe"
            href="#card-example-link-card"
            header="Elliot Baker"
            meta="Friend"
            description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          />
        </section>
      )}
    </>
  );
}

export default Single;
