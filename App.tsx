
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { Home } from '@screens/Home';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.safeArea}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
