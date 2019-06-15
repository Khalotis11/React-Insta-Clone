import React, { Component } from "react";
import "./CommentSection.css";

import { Comment } from "./Comment";

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <div>
            <Comment comment={comment} key={comment.id} />
          </div>
        ))}
      </div>
    );
  }
}
