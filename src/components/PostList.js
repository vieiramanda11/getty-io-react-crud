import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PostList extends Component {
  render() {
    if (this.props.posts.length) {
      return (
        <div>
          <h1>POSTS</h1>
          {this.props.posts.map(post => {
            return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <h2>NO POST</h2>
      )
    }
  }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps)(PostList);
