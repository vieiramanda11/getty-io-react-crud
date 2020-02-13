import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPost, deletePost } from "../actions";

class PostInfo extends Component {
  componentDidMount() {
    const { getPost, match } = this.props;
    getPost(match.params.id);
  }

  render() {
    const { post, deletePost } = this.props;
    return (
      <div>
        <div className="ui card">
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">
              <p>{post.body}</p>
            </div>
          </div>
          <div className="extra content">
            <div className="ui three buttons">
              <button className="ui basic blue button">
                <Link
                  to={{ pathname: `/posts/${post.id}/edit`, state: { post } }}
                >
                  Edit
                </Link>
              </button>
              <button
                className="ui basic red button"
                type="button"
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
              <button className="ui basic green button">
                <Link to="/posts">Back</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostInfo.propTypes = {
  getPost: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
  post: PropTypes.arrayOf.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ post: state.post });

const mapDispatchToProps = { getPost, deletePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);
