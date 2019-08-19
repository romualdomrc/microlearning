import firebase from 'firebase';

export const SET_COURSES = 'SET_COURSES';
const setCourses = courses => ({
    type: SET_COURSES,
    courses
});
 
export const listCourses = () => {
    const { currentUser } = firebase.auth();
    return dispatch => {
 
        firebase
            .database()
            .ref(`/users/${currentUser.uid}/courses`)
            .on('value', snapshot => {
                console.log('snapshot', snapshot.val());
                const courses = snapshot.val();
                const action = setCourses(courses);
                dispatch(action);
            });
    }
}