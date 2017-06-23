import axios from 'axios';
import { CHANGE_AUTH, SAVE_COMMENT, FETCH_USERS } from './types';

function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

function fetchUsers() {
  const request = axios
    .get('https://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: request
  }
}

export {
  authenticate,
  saveComment,
  fetchUsers
}
