import React from 'react';
import '../styles/App.css';
import { Route, Router, Switch } from 'react-router-dom';
import PostList from './PostList';
import PostForm from './PostForm';
import PostInfo from './PostInfo';
import PostEdit from './PostEdit';
import history from '../history';

const App = () => (
  <div className="ui relaxed four column grid container">
    <Router history={history}>
      <PostForm />
      <PostList />
      <Switch>
        <Route exact path="/posts/:id" component={PostInfo} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </Router>
  </div>
);

export default App;
