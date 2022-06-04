import React, { useState } from "react";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";
import { createStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core";
import moment from "moment";

import Card from "../../../shared/components/UIElements/Card";
import Button from "../../../shared/components/UIElements/Button";
import Modal from "../../../shared/components/UIElements/Modal";
import SimpleTabs from "../../../shared/components/UIElements/SimpleTabs";

import "./WorkItem.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    rotateIcon: {
      // transition: "transform .5s ease"
    },
    li: {
      // transition: "transform 0.2s ease-in-out",
      transition: theme.transitions.create(["scale", "transform"], {
        duration: theme.transitions.duration.complex,
      }),
      "&:hover": {
        // backgroundColor: "#333",
        // animation: "zoom .2s ease 1 forwards",
        transform: "scale(1.07)",
      },
    },
  })
);

function WorkItem(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const classes = useStyles();

  const tabsContent = {
    tab1: (
      <div className="place-item__tab">
        <h2>Description</h2>
        <div className="place-item__modal-description">
          <p>{props.description}</p>
        </div>
      </div>
    ),
    tab2: (
      <div className="place-item__tab">
        <h2>Technical information</h2>
        <ul className="place-item__modal-extra">
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
        <ul className="place-item__modal-links">
          {props.links.map((item, i) => {
            return (
              <li key={i}>
                <a target="_blank" rel="noreferrer" href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
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
            <strong>{moment(props.duration.start).format("YYYY-MM-DD")}</strong>
          </li>
          <li>
            <span>End Date: </span>
            <strong>{moment(props.duration.end).format("YYYY-MM-DD")}</strong>
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
      <Zoom in={true} style={{ transitionDelay: props.displayDelay }}>
        <li
          className={`place-item ${classes.li}`}
          // style={{
          //   animation: `fadeInAnimation ${300}ms ease-in ${
          //     props.displayDelay
          //   }ms forwards`,
          // }}
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
                <Button
                  to={"/places/" + props.id}
                  isCompact
                  borderTopLeftRoundCorner
                >
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
      </Zoom>
    </React.Fragment>
  );
}

export default WorkItem;
