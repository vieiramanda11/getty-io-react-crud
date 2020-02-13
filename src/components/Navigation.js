import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="ui menu">
    <li className="item"><NavLink exact to="/posts">Posts</NavLink></li>
    <li className="item"><NavLink exact to="/posts/new">New Post</NavLink></li>
  </div>
);

export default Navigation;
