import React, { Component } from 'react';
import { View, 
        Text,
        StyleSheet, 
        Dimensions, 
        Image,
        TouchableHighlight }  from 'react-native';

const CourseCard = ({course, isFirstColumn, onNavigate }) => (
    <TouchableHighlight 
        onPress={onNavigate}
        style ={[styles.container, isFirstColumn ? styles.firstColumn : styles.lastColumn]} >
        <View style={styles.card}>
            <Image 
                source={{
                    uri: course.img
                }}
                aspectRatio={1}
                resizeMode="cover"
                style={{borderRadius: 15}}
            />
            <View style={styles.cardTitleWrapper}>
                <Text style={styles.cardTitle}>{course.title}
                </Text>
            </View>    
        </View> 
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: {
        flex: .5,
        width: '50%',
        height: Dimensions.get("window").width /2,
    },
    card: {
        flex: 1,
        borderWidth: 1,
        margin: 5,
        borderRadius: 15,
    },
    cardTitleWrapper: {
        backgroundColor: 'black',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: .5,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 0,
        paddingLeft: 3,
        paddingRight: 3,
        alignItems: 'center',
        borderRadius: 15
    },
    cardTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    firstColumn: {
        paddingLeft: 10,
    },
    lastColumn: {
        paddingRight: 10,
    }
});

export default CourseCard;