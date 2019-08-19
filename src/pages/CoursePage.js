import React, { Component } from 'react';
import { StyleSheet, 
        View, 
        FlatList, 
        ActivityIndicator } from 'react-native';
import CourseCard from '../components/CourseCard';

import { connect } from 'react-redux';
import { listCourses } from '../actions';

const isEven = number => number % 2 === 0;

class CoursePage extends Component {
    componentDidMount() {
        this.props.listCourses();
    }

    render() {
        const { courses, navigation } = this.props;
    
        if (courses === null) {
            return <ActivityIndicator />
        }

        return (
            <View style={{backgroundColor: "#008b8b", flex: 1}}>
                <FlatList 
                    data = {courses}
                    renderItem={({item, index}) => (
                        <CourseCard 
                            course={item} 
                            isFirstColumn={isEven(index)}
                            onNavigate={() => navigation.navigate('Section', { course : item} )} />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    ListHeaderComponent={props => <View style={styles.marginTop}></View>}
                    ListFooterComponent={props => <View style={styles.marginBottom}></View>}
                />
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    marginTop: {
        marginTop: 5,
    },
    marginBottom: {
        marginBottom: 5,
    }

})

const mapStateToProps = state => {
    const { courses } = state;

    if (courses === null) {
        return { courses }
    }

    const keys = Object.keys(courses);
    const coursesWithKeys = keys.map(id => {
        return { ...courses[id], id}
    })
    console.log('mapStateToProps',coursesWithKeys);
    return { courses: coursesWithKeys };
}

export default connect(mapStateToProps, { listCourses })(CoursePage);
