import firebase from 'firebase';
import { Alert } from 'react-native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGOUT = 'USER_LOGOUT'

const userLoginSuccess = user => ({
    type: USER_LOGIN_SUCCESS,
    user
});

const userLogout = () => ({
    type: USER_LOGOUT 
});


//criar uma innerfunction
export const tryLogin = ({mail, password}) => dispatch => {
    return firebase.auth().signInWithEmailAndPassword(mail, password)
        .then(user => {
//            console.log('Usuário autenticado', user)
//            this.setState({ message: 'Sucesso'})
            const action = userLoginSuccess(user);
            dispatch(action);
            return user; 
        })
        .catch(error => {
            if (error.code === 'auth/user-not-found') {
                return new Promise((resolve, reject) => {
                    Alert.alert('Usuário não encontrado',
                    'Deseja cadastrar um novo usuário?',
                    [{
                        text: 'Não',
                        onPress: () => resolve()
                    },
                    {
                        text: 'Sim', 
                        onPress: () => {
                            firebase
                                .auth()
                                .createUserWithEmailAndPassword(mail, password)
                                .then(user => { resolve(user) })
                                .catch(error => { reject (error) })
                        } 
                    }],
                    { cancelable: false }
                    ) 
                })
            }
            return Promise.reject(error)     
        })
    }