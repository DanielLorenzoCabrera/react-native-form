import React from 'react';
import colors from '../../config/colors';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const Input = ({label, placeholder}) => {
  const {inputContainer, labelStyle, input, labelFont, inputFont} = styles;
  return (
    <View style={inputContainer}>
      <Text style={(labelStyle, labelFont)}>{label}</Text>
      <TextInput
        style={(input, inputFont)}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    borderColor: colors.primary,
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
  },
  input: {
    flex: 3,
    fontSize: 20,
    color: colors.secondary,
    paddingVertical: 10,
  },
  labelStyle: {
    flex: 1,
  },
  labelFont: {
    fontSize: 20,
    padding: 10,
    backgroundColor: colors.primary,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  inputFont: {
    fontSize: 20,
    color: colors.secondary,
    borderTopColor: colors.primary,
    borderTopWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});

export default Input;
