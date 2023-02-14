import React from "react";
import Badge from "react-bootstrap/Badge";

const MyBadge = (props) => {
  return (
    <div>
      <h1>
        <Badge bg={props.color}>{props.badge}</Badge>
      </h1>
    </div>
  );
};

export default MyBadge;
