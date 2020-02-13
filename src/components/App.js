import React from 'react';
import '../styles/App.css';
import { Route, Router, Switch } from 'react-router-dom';
import PostList from './PostList';
import PostForm from './PostForm';
import PostInfo from './PostInfo';
import PostEdit from './PostEdit';
import Navigation from './Navigation';
import history from '../history';

const App = () => (
  <div className="ui">
    <Router history={history}>
      <Navigation />
      <Switch>
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/new" component={PostForm} />
        <Route exact path="/posts/:id" component={PostInfo} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </Router>
  </div>
);

export default App;
