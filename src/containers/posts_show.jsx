import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  render() {
    if (!this.props.post) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="post-item">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

export default PostsShow;
