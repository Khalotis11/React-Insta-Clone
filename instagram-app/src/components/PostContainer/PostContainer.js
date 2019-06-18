import React from "react";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "../CommentSection/LikeSection";
import AddComment from "../CommentSection/AddComment";
import PropTypes from "prop-types";

export const PostContainer = props => {
  // console.log(props)
  return (
    <div className="post-container">
      {props.data.map(data => (
        <div key={data.id}>
          <div className="user-profile">
            <img
              src={data.thumbnailUrl}
              alt={data.username}
              className="profile-photo"
            />
            <h3> {data.username} </h3>
          </div>
          <img src={data.imageUrl} alt={data.username} className="post-photo" />
          <div className="comments-likes">
            <LikeSection likes={data} key={data.id} />
            <CommentSection comments={data.comments} key={data.comments.id} />
          </div>
          <AddComment comments={data.comments} key={data.comments.id} />
        </div>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
