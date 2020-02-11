import axios from 'axios';
import history from '../history';

export const RECEIVE_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const BASE_URL = 'https://cryptic-scrubland-22569.herokuapp.com/api/posts';

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
    return axios.post(BASE_URL, { title, body })
      .then(response => {
        const data = response.data;
        dispatch({ type: ADD_POST, payload: { title: data.title, body: data.body }});
      })
      .then(() => {
        history.push('/posts');
      })
      .catch(error => { throw (error); });
  };
};

export const getPost = id => {
  return dispatch => {
    return axios.get(`${BASE_URL}/${id}`)
      .then(response => {
        dispatch({ type: RECEIVE_POST, post: response.data });
      })
      .catch(error => { throw (error); });
  };
};

export const deletePost = id => {
  return dispatch => {
    return axios.delete(`${BASE_URL}/${id}`)
      .then(response => {
        dispatch({ type: REMOVE_POST, payload: { id } });
      })
      .then(() => {
        history.push('/posts');
      })
      .catch(error => { throw (error); });
  };
};
