import React from 'react';
import { View, TextInput, StyleSheet, Button, ActivityIndicator, Text, Alert } from 'react-native';
import firebase from 'firebase';

import FormRow from '../components/FormRow';

import { connect } from 'react-redux';
import { tryLogin } from '../actions';


class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyDHM_im-erbsPVgQOWSQ_j-l1KJPuzdD1k",
            authDomain: "cadastro-f48eb.firebaseapp.com",
            databaseURL: "https://cadastro-f48eb.firebaseio.com",
            projectId: "cadastro-f48eb",
            storageBucket: "",
            messagingSenderId: "234844262067"
          };
          firebase.initializeApp(config);
          



  //método assíncrono promisse
  //Teste inicial do firebase        
  //      firebase.auth().signInWithEmailAndPassword('romualdomrc@gmail.com','123456')
  //        .then(user => {
  //            console.log('Usuário autenticado', user)
  //        })
  //        .catch(error => {
  //            console.log('Usuário não encontrado', error)
  //        })
    }

    onChangeMail(value) {
        this.setState({
            mail: value
        })
    }

    onChangePassword(value) {
        this.setState({
            password: value
        })
    }

    tryLogin() {
//        console.log(this.state);
        this.setState({ isLoading: true });

        const { mail, password } = this.state

        this.props.tryLogin({mail, password})
         .then((user) => {
             if (user) {
                console.log('Usuário autenticado');
//                this.setState({ message: 'Sucesso'});
                return this.props.navigation.replace('Main');
             }   
                this.setState({ isLoading: false });
         })
        .catch((error) => {
                console.log('caiu no catch');
                this.setState({ isLoading: false });
                this.setState({ message: this.getMessageByErrorCode(error.code)});
        });
    }

    getMessageByErrorCode(errorCode) {
        switch(errorCode) {
            case 'auth/wrong-password':
                return 'Senha incorreta';
            case 'auth/user-not-found':
                return 'Usuário não encontrado';
            default:
                return 'Erro na autenticação';
        }
    }

    renderMessage(){
        const { message } = this.state;
        if (!message)
            return null;
        return (
            <Text>{ message }</Text>
        );    
    }

    renderButton() {
      if (this.state.isLoading)
        return <ActivityIndicator />  

      return (
        <View style={styles.button}>
            <Button color="#696969" title="Entrar"
            onPress={()=> this.tryLogin()}/>
        </View>
      )   
    }  

//databinding
    render() {
        return (
            <View style={{backgroundColor: "#008b8b", flex: 1}}>
                <View style={{marginTop: 20}}>
                <FormRow>
                    <TextInput style = {styles.textInput} 
                        placeholder="user@email.com"
                        value={this.state.mail}
                        onChangeText={value => this.onChangeMail(value)}/>
                </FormRow>
                <FormRow>        
                    <TextInput style = {styles.textInput}
                        placeholder="******"
                        secureTextEntry 
                        value={this.state.password}
                        onChangeText={value => this.onChangePassword(value)}/>

                </FormRow>
                </View>
                { this.renderButton() }     
                { this.renderMessage() }       
  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
        fontSize: 20
    },
    button: {
        marginTop: 20,

    }

});

export default connect(null, { tryLogin } )(LoginScreen)