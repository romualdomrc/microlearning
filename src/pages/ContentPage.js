import React, { Component } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import ContentCard from "../components/ContentCard";
import ProgressBar from "../components/ProgressBar";

import { connect } from 'react-redux';
import { listContents } from '../actions';

const Button = ({ action, text } = this.props) => (
  <TouchableHighlight onPress={action} activeOpacity={0.7} style={styles.button}>
    <View style={styles.buttonContent}>
      <Text style={styles.label}>{text}</Text>
    </View>
  </TouchableHighlight>
);

class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      currentPosition: 0
    };

  }

  componentDidMount() {
    this.props.listContents(this.props.navigation.state.params.content.id);
  }

  _handleChangeScrollPosition = position => {
    let data = this.props.contents.length;

    let currentProgress = this.props.increment * position + this.props.increment;
    if (position > -1 && position < data) {
      this.setState({ currentPosition: position });
      this.flatList.scrollToIndex({ animated: true, index: position });
      this.setState({ progress: currentProgress });
    }
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={{ marginTop:0 }}>
          <ProgressBar progress={this.state.progress}/>
        </View>  
        <FlatList
          ref={flatList => (this.flatList = flatList)}
          data={this.props.contents}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ContentCard img={item.img} text={item.text} title={item.title}/>}
        />
        <View style={styles.actionContainer}>
          <Button
            text={"<"}
            action={() =>
              this._handleChangeScrollPosition(this.state.currentPosition - 1)
            }
          />
          <View />
          <Button
            text={">"}
            action={() =>
              this._handleChangeScrollPosition(this.state.currentPosition + 1)
            }
          /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008b8b"
  },
  actionContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    margin: 15,
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: "#DCDCDC",
    elevation: 2,
    transform: [
      {
        rotate: "45deg"
      }
    ]
  },
  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [
      {
        rotate: "-45deg"
      }
    ]
  },
  label: {
    marginTop: -5,
    fontSize: 50,
    color: "#000000"
  }
});

const mapStateToProps = state => {
  const { contents } = state;
  let increment = 0;
  if ((contents != undefined ) && (contents.length != 0)) {
    increment = 1/contents.length;
  } 

  console.log("contents", contents);
  console.log("increment",increment);

  return ({contents, increment})
}

export default connect(mapStateToProps, { listContents })(ContentPage);

