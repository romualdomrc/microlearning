import { combineReducers } from 'redux';
import userReducer from './userReducer';

import coursesReducer from './coursesReducer';
import sectionsReducer from './sectionsReducer';
import contentsReducer from './contentsReducer';

//construção de pequenos reducers para cada state
export default combineReducers ({
//    qualquer: (state =[], action) => state
    user: userReducer,
    courses: coursesReducer,
    sections: sectionsReducer, 
    contents: contentsReducer
});