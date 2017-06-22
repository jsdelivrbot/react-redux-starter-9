import { CHANGE_AUTH, SAVE_COMMENT } from './types';

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

export {
  authenticate,
  saveComment
}
