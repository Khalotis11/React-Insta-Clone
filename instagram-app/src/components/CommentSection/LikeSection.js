import React, { Component } from "react";
import PropTypes from "prop-types";

// export const LikeSection = props => {
  export default class LikeSection extends Component {
    constructor(props){
      super(props)
      this.state ={
        likes: props.likes.likes
      }
    }

  incrementLike = e => {
    let likes = this.state.likes + 1;
    this.setState({likes})
  }
    render(){
        return (
    <div className="like-section">
      <div className="like-icons">
        <i class="far fa-heart" onClick={this.incrementLike} /> <i class="far fa-comment" />
      </div>
      <div>
        <strong>{this.state.likes}</strong> Likes
      </div>
    </div>
  );
    }
  }



//   return (
//     <div className="like-section">
//       <div className="like-icons" onClick={this.incrementLike}>
//         <i class="far fa-heart" /> <i class="far fa-comment" />
//       </div>
//       <div>
//         <strong>{props.likes.likes}</strong> Likes
//       </div>
//     </div>
//   );
// };
LikeSection.propTypes = {
  likes: PropTypes.shape({
    likes: PropTypes.number
  })
};
