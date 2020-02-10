import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PostList = ({ posts }) => {
  let renderPosts;
  if (posts.length > 0) {
    renderPosts = posts.map(post => (
      <div key={post.id}>
        <h5>{post.title}</h5>
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
