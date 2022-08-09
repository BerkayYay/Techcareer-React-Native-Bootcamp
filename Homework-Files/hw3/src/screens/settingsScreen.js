import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Screen2({navigation, route}) {
  const [text, setText] = useState([]);
  useEffect(() => {
    if (route.params?.post) {
      setText(route.params.post);
    }
  }, [route.params?.post]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text> Settings Screen</Text>
      <Text> {text} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
