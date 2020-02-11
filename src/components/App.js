import React from 'react';
import '../styles/App.css';
import PostList from './PostList';
import PostForm from './PostForm';

const App = () => (
  <div className="ui relaxed four column grid container">
    <PostForm />
    <PostList />
  </div>
);

export default App;
