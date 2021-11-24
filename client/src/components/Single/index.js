import React from "react";
import { Header, Container } from "semantic-ui-react";

function Single(props) {
  return (
    <>
      <Container>
        {props && props.detail && (
          <section id="single" className="single">
            <Header size="large" textAlign="center">
              {props.detail.title}
            </Header>
            <div>
              <ul>
                {props.detail.extendedIngredients.map((i) => (
                  <li key={i.id}>{i.originalString}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>{props.detail.instructions}</p>
            </div>
            <div>Comments</div>
          </section>
        )}
      </Container>
    </>
  );
}

export default Single;
