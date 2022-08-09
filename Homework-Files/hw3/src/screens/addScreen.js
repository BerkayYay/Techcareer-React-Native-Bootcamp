import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import React from 'react';
import {useState} from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Screen3({navigation, route}) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  };
  const [postText, setPostText] = useState([]);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text> Add Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setPostText(text)}
      />
      <Button
        title="Add"
        onPress={() => {
          navigation.navigate({
            name: 'Settings',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '75%',
    height: '10%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: '5%',
    borderRadius: 10,
  },
});
