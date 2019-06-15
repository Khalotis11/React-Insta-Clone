import React from "react";
import PropTypes from "prop-types";

export const LikeSection = props => {
  return (
    <div className="like-section">
      <div className="like-icons">
        <i class="far fa-heart" /> <i class="far fa-comment" />
      </div>
      <div>{props.likes.likes} Likes</div>
    </div>
  );
};
LikeSection.propTypes = {
  likes: PropTypes.shape({
    likes: PropTypes.number
  })
};
