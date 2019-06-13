import React, { Component } from "react";
import "./CommentSection.css";

import { Comment } from "./Comment";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    // console.log(this.state.comments)
    return (
      <div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </div>
    );
  }
}
export default CommentSection;
