import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
  let renderPosts;
  if (posts.length) {
    renderPosts = posts.map(post => (
      <div key={post.id} className="column">
        <div className="ui card">
          <div className="content">
            <div className="header">
                {post.title}
            </div>
            <p>
              <Link to={`/posts/${post.id}`}>
                Show
              </Link>
            </p>
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
