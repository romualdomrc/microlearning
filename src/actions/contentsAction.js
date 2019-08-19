import firebase from 'firebase';

export const SET_CONTENTS = 'SET_CONTENTS';
const setContents = contents => ({
    type: SET_CONTENTS,
    contents
});
 
export const listContents = (content) => {
    return dispatch => {
        firebase
            .database()
            .ref(`/contents/${content}`)
            .on('value', snapshot => {
                console.log('snapshot', snapshot.val());
                const contents = snapshot.val();
                const action = setContents(contents);
                dispatch(action);
            });
    }
}