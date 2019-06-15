import React from "react";

export const Comment = props => {
  return (
    <div className="comment-container">
      <span className="username">{props.comment.username}:</span>{" "}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};
