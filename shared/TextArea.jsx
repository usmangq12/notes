import React, { Component } from "react";
import { TextInput, Platform } from "react-native";

const iosTextHeight = 20.5;
const androidTextHeight = 20.5;
const textHeight = Platform.OS === "ios" ? iosTextHeight : androidTextHeight;

export class TextArea extends Component {
  state = { height: textHeight * 2, lines: 1 };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value === "") {
      this.setState({ height: textHeight * 2, lines: 1 });
    }
  }

  render() {
    const {
      style,
      value,
      placeholder,
      numberOfLines = 8,
      autoFocus = false,
      onChangeText,
    } = this.props;

    return (
      <TextInput
        style={style}
        multiline
        autoFocus={autoFocus}
        value={value}
        placeholder={placeholder}
        onChangeText={(text) => onChangeText(text)}
        underlineColorAndroid="transparent"
      />
    );
  }
}
