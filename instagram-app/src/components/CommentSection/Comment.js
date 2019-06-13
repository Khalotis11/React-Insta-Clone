import React from "react";

export const Comment = props => {
  return (
    <div className="comment">
      {props.comment.username}
      {props.comment.text}
    </div>
  );
};
