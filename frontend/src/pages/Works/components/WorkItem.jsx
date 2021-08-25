import React from "react";

import Card from "../../../shared/components/UIElements/Card";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "../../../shared/components/UIElements/Button";

import "./WorkItem.css";

function WorkItem(props) {
  return (
    <React.Fragment>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.images[0]} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.technicalInfo}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button
              inverse
              
              isCompact
              borderTopLeftRoundCorner
            >
              <SettingsOverscanIcon />
            </Button>
            {props.showEditButtons && (
              <Button to={"/places/" + props.id} isCompact>
                <EditIcon />
              </Button>
            )}
            {props.showEditButtons && (
              <Button danger isCompact>
                <DeleteIcon />
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
}

export default WorkItem;
