import firebase from 'firebase';

export const SET_SECTIONS = 'SET_SECTIONS';
const setSections = sections => ({
    type: SET_SECTIONS,
    sections
});
 
export const listSections = (course) => {
    return dispatch => {
 
        firebase
            .database()
            .ref(`/sections/${course}`)
            .on('value', snapshot => {
                console.log('snapshot-content', snapshot.val());
                const sections = snapshot.val();
                const action = setSections(sections);
                dispatch(action);
            });
    }
}