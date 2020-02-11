import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

const PostList = ({ posts, deletePost }) => {


  const handleRemovePost = (post) => {
    deletePost(post);
  };

  let renderPosts;
  if (posts.length > 0) {
    renderPosts = posts.map(post => (
      <div key={post.id} className="column">
        <div className="ui card">
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">
              <p>{post.body}</p>
            </div>
            <button type="button">Edit</button>
            <button type="button" onClick={handleRemovePost}>Delete</button>
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

const mapDispatchToProps = { deletePost };


export default connect(mapStateToProps, mapDispatchToProps)(PostList);
