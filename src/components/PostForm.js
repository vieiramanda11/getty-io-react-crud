import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions';

const PostForm = ({ addPost }) => {
  const [state, setState] = useState({
    title: '',
    body: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, body } = state;
    if (title) {
      addPost({ id: (Math.random() * (10 ** 9)), title, body });
      setState({
        title: '',
        body: '',
      });
    }
  };

  return (
    <div className="form-container">
      <div className="line" />
      <p>ADD NEW POST</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={state.title} name="title" placeholder="Post title" className="input-title" />
        <input type="text" onChange={handleChange} value={state.body} name="body" placeholder="Post content" className="input-body" />
        <button type="submit" className="button-form">ADD POST</button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addPost };

export default connect(null, mapDispatchToProps)(PostForm);
