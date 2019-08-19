import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet, 
        SectionList, 
        Alert, 
        ActivityIndicator,
        TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { listSections } from '../actions';

const renderSeparator = () => (
    <View style={{ height: 1, backgroundColor: "grey", marginLeft: 80 }} />
);

class SectionPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listSections(this.props.navigation.state.params.course.id);
    }

    GetSectionListItem=(item)=>{
        Alert.alert(item)
    };

    renderSection = ({section}) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.SectionHeaderStyle}> { section.title } </Text>
            </View>
        );
    };    

    render() {
        const { sections, navigation } = this.props;
    
        if (sections === null) {
            return <ActivityIndicator />
        }

        return (
            <View style={styles.container}>
            <SectionList
                 sections={ sections }
                 renderSectionHeader={ this.renderSection }
                 renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Content', { content : item} )}>
                        <View style={styles.row}>
                            <View style={styles.row_cell}>
                                <Text style={styles.row_title}>{item.title}</Text>
                                <Text style={styles.row_description}>{item.description}</Text>
                            </View>
                            <Text style={styles.row_percent}>100%</Text>
                        </View>
                    </TouchableOpacity> 
                 )
                 }
                 keyExtractor={(item, index) => index}
             />
         </View> 
        )
    }
}

const getFont = () => {
    if (require('react-native').Platform.OS === 'ios') {
      return 'NotoSans';
    }
    else return 'NotoSans-Regular';
  };

const colors = {
    "tertiary": '#ffffff',
    "weather_text_color": '#464646',
};

const values = {
    "font_time_size": 12,
    "font_place_size": 20,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: "#008b8b"
    },

    SectionHeaderStyle: { 
        backgroundColor : '#696969',
        fontSize : 20,
        padding: 5,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#c5c5c5'
    },

    headerContainer: {
        elevation: 1,
        borderRadius: 2,
        flex: 1,
       
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 6,
      },

    row: {
        elevation: 1,
        borderRadius: 3,
        backgroundColor: colors.tertiary,
        flex: 1,
        flexDirection: 'row',  // main axis
        justifyContent: 'flex-start', // main axis
        alignItems: 'center', // cross axis
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 18,
        paddingRight: 16,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 0,
        marginBottom: 6,
      },

      row_cell: {
        flex: 1,
        flexDirection: 'column',
      },

      row_description: {
        color: colors.weather_text_color,
        textAlignVertical: 'bottom',
        includeFontPadding: false,
        flex: 0,
        fontSize: values.font_time_size,
      },

      row_title: {
        color: colors.weather_text_color,
        textAlignVertical: 'top',
        includeFontPadding: false,
        flex: 0,
        fontSize: values.font_place_size,
      },

      row_percent: {
        color: colors.weather_text_color,
        paddingLeft: 16,
        flex: 0,
        fontSize: values.font_temp_size,
        fontFamily: values.font_body,
      },

  });

const mapStateToProps = state => {
    const { sections } = state;

    const itemsArray = [];

    if (sections === null) {
        return { sections }
    }

    const itemsData = sections;

    for (let itemKey in itemsData) {
        var itemsNewData = []
        for (let itemNewKey in itemsData[itemKey].data) {
            itemsNewData.push(itemsData[itemKey].data[itemNewKey])
        }
        var newObject = new Object()
        newObject.data = itemsNewData
        newObject.title = itemsData[itemKey].title   
        itemsArray.push(newObject)
    }
    console.log('sections', itemsArray);

    return ({sections: itemsArray});
}

export default connect(mapStateToProps, { listSections })(SectionPage);
