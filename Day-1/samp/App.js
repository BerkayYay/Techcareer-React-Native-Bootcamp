import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <View style={styles.container2}>
        <Text style={styles.title}>Hello World</Text>
      </View>
      <View style={styles.slideOne}>
        <Text style={styles.text}>
          This is the first slide in the carousel.
        </Text>
      </View>
      <View style={styles.slideTwo}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slideOne: {
    flex: 3,
    backgroundColor: '#FFEB3B',
  },
  slideTwo: {
    flex: 6,
    backgroundColor: '#FF9123',
    flexDirection: 'row',
  },
  box1: {
    flex: 1,
    backgroundColor: '#F2B',
    width: 50,
    height: 100,
  },
  box2: {
    flex: 1,
    backgroundColor: '#9fB',
    width: 50,
    height: 100,
    marginTop: 100,
  },
  box3: {
    flex: 1,
    backgroundColor: '#BAA',
    width: 50,
    height: 100,
    marginTop: 200,
  },
});

export default App;
