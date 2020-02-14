import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Cardbody, Cardtitle } from '../styles/styles';

const PostList = ({ posts }) => {
  let renderPosts;
  if (posts.length) {
    renderPosts = posts.map(post => (
      <div key={post.id}>
        <Card>
          <Cardbody className="content">
            <Cardtitle className="header">
                {post.title}
            </Cardtitle>
            <h3>
              <Link to={`/posts/${post.id}`}>
                See post
              </Link>
            </h3>
          </Cardbody>
        </Card>
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
