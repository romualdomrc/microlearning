import React, { Component } from "react";
import {StyleSheet, View, Animated } from "react-native";

export default class ProgressBar extends Component {

    componentWillMount(){
        this.animation = new Animated.Value
        (this.props.progress);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.progress != this.props.progress) {
            Animated.timing(this.animation, {
                toValue: this.props.progress,
                duration: this.props.duration,
            }).start();
        }
    }

    render () {
        const {
            height,
            borderColor,
            borderRadius,
            borderWidth,
            barColor,
            fillColor,
        } = this.props;

        const widthInterpolated = this.animation.interpolate
        ({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"],
            extrapolate: "clamp"
        })

        return (
            <View style={styles.container}>
                <View style={styles.progressContainer}>
                    <View style= {{ flex:1, flexDirection: "row", height}}>
                        <View style={{ flex:1, borderColor, borderWidth, borderRadius}}>
                            <View style={[StyleSheet.absoluteFill, {backgroundColor: fillColor}]}/>
                            <Animated.View
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: widthInterpolated,
                                    backgroundColor: barColor,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>    
        )
    }
}

ProgressBar.defaultProps = {
    height: 7,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    barColor: "black",
    fillColor: "white",
    duration: 100,
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: "center"
    },
    progressContainer: {
        flexDirection: "row",
        width: "80%",
        
    }
});
