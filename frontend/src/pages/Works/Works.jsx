import React, { useEffect, useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import useHttpClient from "../../shared/Hooks/useHttpClient";
import WorksList from "./components/WorksList";

import "./Works.css";

function Works() {
  const { isLoading, errorMessage, sendRequest } = useHttpClient();
  const [works, setWorks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/works/`
        );
        console.log(responseData);
        setWorks(responseData.works);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);
  // useEffect with [] parameter means run just once.

  if (!!errorMessage) {
    return (
      <div className="center">
        <Card>
          {" "}
          <h3>{errorMessage} </h3>{" "}
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      {isLoading && (
        <div className="center">
          {" "}
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && works && <WorksList items={works} />}
    </React.Fragment>
  );
}

export default Works;
