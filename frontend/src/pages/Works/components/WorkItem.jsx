import React, { useState } from "react";

import Card from "../../../shared/components/UIElements/Card";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "../../../shared/components/UIElements/Button";
// import { red } from '@material-ui/core/colors';
import "./WorkItem.css";
import Modal from "../../../shared/components/UIElements/Modal";
import SimpleTabs from "../../../shared/components/UIElements/SimpleTabs";

function WorkItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const tabsContent = {
    tab1: (
      <div className="place-item__tab">
        <h2>Description</h2>
        <div className="place-item__modal-description"><p>{props.description}</p></div>
      </div>
    ),
    tab2: (
      <div className="place-item__tab">
        <h2>Technical information</h2>
        <ul>
          <li>
            <span>Language: </span>
            <strong>{props.technicalInfo.language}</strong>
          </li>
          <li>
            <span>Platform: </span>
            <strong>{props.technicalInfo.platform}</strong>
          </li>
          <li>
            <span>Dev Method: </span>
            <strong>{props.technicalInfo.method}</strong>
          </li>
        </ul>
      </div>
    ),
    tab3: (
      <div className="place-item__tab">
        <h2>Links</h2>
        <a target="_blank" href={props.links}>
          {props.links}
        </a>
      </div>
    ),
    tab4: (
      <div className="place-item__tab">
        <h2>Extra Info</h2>
        <ul className="place-item__modal-extra">
          <li>
            <span>Contractor: </span>
            <strong>{props.contractor}</strong>
          </li>
          <li>
            <span>Start Date: </span>
            <strong>{props.duration.start}</strong>
          </li>
          <li>
            <span>End Date: </span>
            <strong>{props.duration.end}</strong>
          </li>
        </ul>
        <p>Tags: {props.tags}</p>
      </div>
    ),
  };

  const eh_expand_button = () => {
    setIsExpanded(true);
  };
  const eh_close_button = () => {
    setIsExpanded(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={isExpanded}
        onCancel={eh_close_button}
        header={props.title}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        // footer={<Button onClick={eh_close_button}>Close</Button>}
      >
        <div className="place-item__modal-image">
          <img src={props.images[0]} alt={props.title} />
        </div>
        <SimpleTabs content={tabsContent} />
      </Modal>

      <li
        className="place-item"
        style={{
          animation: `fadeInAnimation ${300}ms ease-in ${
            props.displayDelay
          }ms forwards`,
        }}
      >
        {/* <li className="place-item" style={{transitionDelay: `${props.displayDelay}ms` }}>       */}
        <Card className="place-item__content">
          <div className="place-item__image" onClick={eh_expand_button}>
            <img src={`${props.images[0]}`} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2 onClick={eh_expand_button}>{props.title}</h2>
            {/* <h3>{props.technicalInfo}</h3> */}
            <p>{props.description}</p>
          </div>
          <div className="place-item__tags">{props.tags}</div>
          <div className="place-item__actions">
            {/* <Button
              inverse
              onClick={eh_expand_button}
              isCompact
              borderTopLeftRoundCorner
            >
              <SettingsOverscanIcon />
            </Button> */}
            {props.showEditButtons && (
              <Button to={"/places/" + props.id} isCompact borderTopLeftRoundCorner>
                <EditIcon />
              </Button>
            )}
            {props.showEditButtons && (
              <Button danger isCompact borderTopRightRoundCorner>
                {/* <DeleteIcon style={{ color: red[500] }}/> */}
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
