import React, {Component} from 'react';
import {View} from 'react-native';
import colors from '../../config/colors';
import Input from './Input';

export default class Form extends Component {
  state = {email: ''};
  render() {
    return (
      <View>
        <Input label={'email'} placeholder={'example123@gmail.com'} />
      </View>
    );
  }
}
