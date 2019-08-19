
//import content from '../content.json';

import { SET_COURSES } from '../actions';

//const INITIAL_STATE = content;
export default function(state = null, action) {
    switch (action.type) {
        case SET_COURSES:
            return action.courses;
        default:
            return state;
    }
}