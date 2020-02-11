import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {

  let renderPosts;
  if (posts.length > 0) {
    renderPosts = posts.map(post => (
      <div key={post.id} className="column">
        <div className="ui card">
          <div className="content">
            <div className="header">
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </div>
            <div className="description">
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <div>
      {renderPosts}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps)(PostList);
