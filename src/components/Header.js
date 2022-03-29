import {Text, View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import colors from '../../config/colors';

const Header = ({title}) => {
  const {container, text} = styles;
  return (
    <View style={container}>
      <Text style={text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    marginTop: StatusBar.currentHeight,
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 26,
    color: colors.base_color,
  },
});

export default Header;
