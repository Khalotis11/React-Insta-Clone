import React from "react";
import PropTypes from "prop-types";

export const Comment = props => {
  return (
    <div className="comment-container">
      <span className="username">{props.comment.username}:</span>{" "}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};
