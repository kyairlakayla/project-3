import React from "react";
import { Card, Container, Message } from "semantic-ui-react";

function Single(props) {
  console.log("single +++", props);
  return (
    <>
      <Message>
        {props && props.detail && (
          <section id="single" className="single">
            <h3>{props.detail.title}</h3>
          </section>
        )}
      </Message>
    </>
  );
}

export default Single;
