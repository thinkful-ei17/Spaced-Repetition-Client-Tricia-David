import {
    FETCH_QUESTION_INIT,
    FETCH_QUESTION_SUCCESS,
    FETCH_QUESTION_ERROR
} from '../actions/questions';

const initialState = {
    image: null,
    answer: null,
    isCorrect: false,
    error: null,
    loading: false
};

export default function reducer(state = initialState, action) {
 if(action.type === FETCH_QUESTION_INIT) {
   return Object.assign({}, state, {
     loading: true
   });
 } else if (action.type === FETCH_QUESTION_SUCCESS) {
   console.log('enter fetchQuestionSuccess ', action)
   return Object.assign({}, state, {
     image: action.image.image,
     answer: action.image.answer,
     error: false,
     loading: false 
   });
 } else if (action.type === FETCH_QUESTION_ERROR) {
     return Object.assign({}, state, {
     error: action.error,
     loading: false
   });
 }
    return state;
}