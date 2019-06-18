import React, { Component } from "react";

export default class AddComment extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      comments: props.comments,
      commentInput: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newComment = { username: "user", text: "this.state.commentInput" };
    const commentString = this.state.comments;
    commentString.push(newComment);
    this.setState({
      comments: commentString,
      commentInput: ""
    });
  };
  render() {
    return (
      <div className="add-comment-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="textarea"
            name="commentInput"
            placeholder="Add Comment..."
            id="exampleText"
            value={this.state.commentInput}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
