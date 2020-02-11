import axios from 'axios';
import history from '../history';

export const RECEIVE_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';

export const getPosts = () => {
  return dispatch => {
    return axios.get(BASE_URL)
      .then(response => {
        dispatch({ type: RECEIVE_POSTS, posts: response.data });
      })
      .catch(error => { throw (error); });
  };
};

export const addPost = ({ title, body }) => {
  return dispatch => {
    return axios.post(BASE_URL, {title, body})
      .then(response => {
        const data = response.data;
        dispatch({ type: ADD_POST, payload: { userId: data.userId, id: data.id, title: data.title, body: data.body } });
      })
      .then(() => {
        history.push('/posts');
      })
      .catch(error => { throw (error); });
  };
};
