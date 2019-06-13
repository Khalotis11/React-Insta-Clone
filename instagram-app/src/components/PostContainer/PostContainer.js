import React from "react";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

export const PostContainer = props => {
  console.log(props)
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
          <CommentSection comments={props.data.comments} />
        </div>
      ))}
    </div>
  );
};
