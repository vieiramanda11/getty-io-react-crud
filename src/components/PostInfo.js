import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost, deletePost } from '../actions';

class PostInfo extends Component {
  componentDidMount() {
    const { getPost, match } = this.props;
    getPost(match.params.id);
  }

  render() {
    const { post, deletePost } = this.props;
    return (
      <div>
        <h2>
          {post.title}
        </h2>
        <p>{post.body}</p>
        <div>
          <Link
            to={{
              pathname: `/posts/${post.id}/edit`,
              state: { post },
            }}
          >
            Edit
          </Link>
          <button
            type="button"
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
          <Link to="/posts">
            Close
          </Link>
        </div>
        <hr />
      </div>
    );
  }
}

PostInfo.propTypes = {
  getPost: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
  post: PropTypes.arrayOf.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ post: state.post });

const mapDispatchToProps = { getPost, deletePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);
