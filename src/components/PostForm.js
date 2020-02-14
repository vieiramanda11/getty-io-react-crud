import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';
import { Form, Title, Button, Input, Textarea } from '../styles/styles';

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
    <div>
      <Form onSubmit={handleSubmit}>
        <Title>NEW POST</Title>
        <Input type="text" onChange={handleChange} value={state.title} name="title" placeholder="Post title"/>
        <p>{state.titleError}</p>
        <Textarea type="text" rows="5" onChange={handleChange} value={state.body} name="body" placeholder="Post content" />
        <p>{state.bodyError}</p>
        <Button type="submit" className="button-form">ADD POST</Button>
      </Form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addPost };

export default connect(null, mapDispatchToProps)(PostForm);
