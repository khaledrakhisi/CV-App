import React from "react";

import WorkItem from "./WorkItem";
import Card from "../../../shared/components/UIElements/Card";
import "./WorksList.css";

function WorksList(props) {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>The list is empty.</h2>
          {/* <Button to="/places/new">Create One?</Button> */}
        </Card>
      </div>
    );
  }

  console.log(props.items[0].technicalInfo);

  const DELAY = 200;
  const populatedItems = (
    <ul className="place-list">
      {props.items.map((item, i) => (
       
          <WorkItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            images={item.images}
            contractor={item.contractor}
            url={item.url}
            duration={item.duration}
            showEditButtons={true}
            tags={item.tags}
            displayDelay={DELAY * i}
            technicalInfo={item.technicalInfo}
          />
       
      ))}
    </ul>
  );

  return <React.Fragment>{populatedItems}</React.Fragment>;
}

export default WorksList;
