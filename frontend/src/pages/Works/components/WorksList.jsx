import React, { useContext } from "react";

import WorkItem from "./WorkItem";
import Card from "../../../shared/components/UIElements/Card";
import { AuthContext } from "../../../shared/components/context/AuthContext";
import "./WorksList.css";

function WorksList(props) {
  const auth = useContext(AuthContext);

  if (props.items.length === 0) {
    return (
      <React.Fragment>
        <div className="place-list center">
          <Card>
            <h2>The list is empty.</h2>
            {/* <Button to="/places/new">Create One?</Button> */}
          </Card>
        </div>
      </React.Fragment>
    );
  }

  const ITEM_DISPLAY_DELAY = 200;

  const populatedItems = (
    <ul className="place-list">
      {props.items
        .sort((a, b) => {
          if (a.duration.start < b.duration.start) return 1;
          if (a.duration.start > b.duration.start) return -1;
          return 0;
        })
        .map((item, i) => (
          <WorkItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            images={item.images}
            contractor={item.contractor}
            links={item.links}
            duration={item.duration}
            showEditButtons={!!auth.loggedinUser}
            tags={item.tags}
            displayDelay={ITEM_DISPLAY_DELAY * i}
            technicalInfo={item.technicalInfo}
          />
        ))}
    </ul>
  );

  return <React.Fragment>{populatedItems}</React.Fragment>;
}

export default WorksList;
