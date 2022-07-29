import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 25,
  },
  textStyle: {
    width: 250,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
});
export default ({text}) => {
  const buttonStyles = [styles.container];
  const textStyle = [styles.textStyle];
  const imgStyle = [styles.imgStyle];
  const lineStyle = [styles.line];

  if (text === 'Facebook') {
    buttonStyles.push({backgroundColor: '#3b5998'});
    textStyle.push({color: '#fff'});
  }
  if (text === 'Google Plus') {
    buttonStyles.push({backgroundColor: '#dd4b39'});
    textStyle.push({color: '#fff'});
  }

  return (
    <View>
      <TouchableOpacity
        style={buttonStyles}
        onPress={() => {
          alert(text);
        }}>
        {text == 'Facebook' ? (
          <Image source={require('./facebook.png')} style={imgStyle} />
        ) : (
          <Image source={require('./google.png')} style={imgStyle} />
        )}
        <View style={lineStyle}></View>
        <Text style={textStyle}>Login Using {text}</Text>
      </TouchableOpacity>
    </View>
  );
};
