import React from "react";

import WorkItem from "./WorkItem";
import Card from "../../../shared/components/UIElements/Card";
import "./WorksList.css";

function WorksList(props) {

    if (props.items.length === 0) {
        return <div className="place-list center">
        <Card>
          <h2>The list is empty.</h2>
          {/* <Button to="/places/new">Create One?</Button> */}
        </Card>
      </div>
    }

    console.log(props.items);

  return (
    <React.Fragment>
      <ul className="place-list">
        {props.items.map((item) => (
          <WorkItem
            title={item.title}
            description={item.description}
            images={item.images}
            contractor={item.contractor}
            url={item.url}
            duration={item.duration}
            showEditButtons={true}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default WorksList;
