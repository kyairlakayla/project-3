import React from "react";
import { Card } from "semantic-ui-react";

function Single(props) {
  console.log("single +++", props);
  return (
    <>
      {props && props.detail && (
        <section id="single" className="single">
          <h3>{props.detail.title}</h3>
          <div>
            <ul>
              <li>Salt</li>
              <li>Butter</li>
              <li>Eggs</li>
              <li>Flour</li>
              <li>Vanilla</li>
            </ul>
          </div>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet tellus velit. Proin luctus erat ut pretium finibus. Donec quis lobortis magna. Phasellus pulvinar felis a dolor posuere pulvinar. Praesent quis augue in odio cursus commodo sed ac velit. In sollicitudin leo ligula, id ornare mauris ultrices ut. Maecenas a sem quam. Vestibulum commodo ante tincidunt semper porttitor. Vestibulum nec leo sit amet augue laoreet varius non ut odio. Nulla in commodo sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas maximus massa eu velit vulputate pharetra. Praesent ac commodo eros, et suscipit felis. Ut pellentesque lacinia orci ac efficitur. Duis ex mi, elementum sit amet mauris ac, convallis consequat tortor.
            </p>
          </div>
          <div>
            Comments
          </div>
        </section>
      )}
    </>
  );
}

export default Single;
