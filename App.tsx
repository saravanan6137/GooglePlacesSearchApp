
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/navigation/Routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
