//import content from '../content.json';

import { SET_SECTIONS } from '../actions';

//const INITIAL_STATE = content;
export default function(state = null, action) {
    switch (action.type) {
        case SET_SECTIONS:
            return action.sections;
        default:
            return state;
    }
}