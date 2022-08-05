import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';

import Data from '../data.json';
const renderItem = ({item}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          alert(item.email);
        }}>
        <Image source={{uri: item.picture}} style={styles.image} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.company}</Text>
      </TouchableOpacity>
    </View>
  );
};
const searchFilter = text => {
  const newData = Data.filter(item => {
    const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;
    return listItem.indexOf(text.toLowerCase()) > -1;
  });
  return newData;
};
const renderHeader = ({Data, setData}) => {
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={text => {
          {
            text != '' ? setData(searchFilter(text)) : setData(Data);
          }
        }}
      />
    </View>
  );
};

export default function users() {
  const [Data, setData] = React.useState(Data);
  return (
    <FlatList
      ListHeaderComponent={renderHeader({Data, setData})}
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
  header: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
});
