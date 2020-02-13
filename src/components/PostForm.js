import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

const PostForm = ({ addPost }) => {
  const [state, setState] = useState({
    title: '',
    body: '',
    titleError: '',
    bodyError: '',
  });

  const validateForm = () => {
    let titleError = '';
    let bodyError = '';

    if (state.title === '') {
      titleError = 'Title cannot be empty.';
    }

    if (state.body === '') {
      bodyError = 'Content cannot be empty.';
    }

    if (titleError || bodyError) {
      setState({ titleError, bodyError });
      return false;
    }

    return true;
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const { title, body } = state;
      if (title) {
        addPost({ title, body });
        setState({
          title: '',
          body: '',
        });
      }
    }
  };

  return (
    <div className="form-container">
      <div className="line" />
      <p>ADD NEW POST</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={state.title} name="title" placeholder="Post title" className="input-title" />
        <p>{state.titleError}</p>
        <input type="text" onChange={handleChange} value={state.body} name="body" placeholder="Post content" className="input-body" />
        <p>{state.bodyError}</p>
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
