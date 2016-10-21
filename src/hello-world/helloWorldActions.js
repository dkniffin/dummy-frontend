import { SET_NAME } from './helloWorldConstants';
import api from '../services/api';

export const setName = (name) => {
  return {
    type: SET_NAME,
    name
  };
};

export function getName() {
  return function(dispatch) {
    return api.get('/name').then((response) => {
      return dispatch(setName(response.data.name));
    });
  };
}
