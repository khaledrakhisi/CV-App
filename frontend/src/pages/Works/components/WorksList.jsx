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
          links={item.links}
          duration={item.duration}
          showEditButtons={!!auth.loggedinUser}
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
