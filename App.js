/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form';

const App = () => {
  return (
    <SafeAreaView>
      <Header title={'Login'} />
      <Form />
    </SafeAreaView>
  );
};

export default App;
