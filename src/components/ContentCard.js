import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet, 
        Image } from "react-native";
import { DEVICE_SIZE } from "../configs/Configs";

class ContentCard extends Component {
  state = {
    isMarked: false
  };
  
  renderImg(img) {

    console.log("img",img);
    if (img == "nulo") return

    return (<View style={styles.image}>
              <Image source={{ uri: img } } 
                   style={{flex:1, height: undefined, width: undefined}}
                  resizeMode="contain"/>
            </View>);
  }

  render({ img, text, title } = this.props) {
    console.log("imagem",img);

    return (
      <View style={{ marginTop:20, width: DEVICE_SIZE.width, height: "95%" }}>
        <View style={styles.container}>
          { this.renderImg(img) }     
          <View style={styles.info}>
            <Text style={styles.labelTile}>{ title }</Text>
            <Text style={{ padding: 5 }}>
            { text }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#FFF"
  },
  image: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: "#FFFFFF"
  },
  info: {
    height: 150,
    marginLeft: 15,
    marginRight: 15
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  labelTile: {
    fontSize: 22,
    fontWeight: "bold"
  },
  actionButton: status => ({
    position: "absolute",
    width: 100,
    height: 50,
    top: 10,
    right: 10,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: status ? "#e74c3c" : "#FFF"
  }),
  buttonLabel: status => ({
    fontSize: 18,
    fontWeight: "bold",
    color: status ? "#FFF" : "#2c3e50"
  })
});

export default ContentCard;
