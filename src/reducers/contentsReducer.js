import { SET_CONTENTS } from '../actions';

export default function(state = null, action) {
    switch (action.type) {
        case SET_CONTENTS:
            return action.contents;
        default:
            return state;
    }
}