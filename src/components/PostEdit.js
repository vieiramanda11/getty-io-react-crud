import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions';
import { Form, Title, Button, Input, Textarea } from '../styles/styles';

class PostEdit extends Component {
  state = {
    titleError: '',
    bodyError: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateForm = () => {
    let titleError = '';
    let bodyError = '';

    if (this.state.title === '') {
      titleError = 'Title cannot be empty.';
    }

    if (this.state.body === '') {
      bodyError = 'Content cannot be empty.';
    }

    if (titleError || bodyError) {
      this.setState({ titleError, bodyError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {                                                             
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      const id = this.props.post.id;
      const title = this.state.title ? this.state.title : this.props.post.title;
      const body = this.state.body ? this.state.body : this.props.post.body;
      const post = {id: id, title: title, body: body}
      this.props.updatePost(post);
      this.props.history.push(`/posts/${this.props.post.id}`)
    }
  };

  handleCancel = () => {
    this.props.history.push(`/posts/${this.props.post.id}`);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Title>Edit {this.props.post.title}</Title>
          <Input type="text" name="title" defaultValue={this.props.post.title} onChange={this.handleChange} placeholder="Post title"/>
          <p>{this.state.titleError}</p>
          <Textarea name="body" rows="3" defaultValue={this.props.post.body} onChange={this.handleChange} placeholder="Post content"/>
          <p>{this.state.bodyError}</p>
          <Button type="submit">Update</Button>
          <Button type="button" onClick={this.handleCancel}>Cancel</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ post: state.post });

const mapDispatchToProps = { updatePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit);
