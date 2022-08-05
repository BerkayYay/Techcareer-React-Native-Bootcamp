import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import Data from '../MOCK_DATA.json';
const renderItem = ({item}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          alert(item.email);
        }}>
        <Image source={{uri: item.id}} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.company}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default function users() {
  return (
    <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 16,
    flex: 1,
    alignSelf: 'center',
  },
});
