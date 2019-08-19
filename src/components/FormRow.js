import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormRow = (props) => {
    const { children } = props
    return (
        <View style = {styles.container}>
            { children }
        </View>
    )    
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginLeft: 20,
        marginRight: 20, 
        backgroundColor: 'whitesmoke',
        marginTop: 5,
        marginBottom: 5,
        elevation: 2,
        borderRadius: 5,
    }
})

export default FormRow;