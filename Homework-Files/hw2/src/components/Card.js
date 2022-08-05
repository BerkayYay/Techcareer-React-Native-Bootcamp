import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import axios from 'axios';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {useState, useEffect, useLayoutEffect} from 'react';

// get news from api

function Card() {
  const [news, setNews] = useState([]);
  const [pageSize, setPageSize] = useState(2);
  const [duringMomentum, setDuringMomentum] = useState(false);

  useLayoutEffect(() => {
    getNewsFromAPI();
  }, []);
  function getNewsFromAPI() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&pageSize=' +
          pageSize +
          '&apiKey=bb2cdcda4ab648e7828e8a594c26d1b3',
      )
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function loadMore() {
    if (!duringMomentum) {
      setPageSize(pageSize + 2);
      getNewsFromAPI();
    }
    setDuringMomentum(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top News</Text>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.title}> {item.title}</Text>
            <Text style={styles.author}>{item.author} </Text>
            <Image style={styles.image} source={{uri: item.urlToImage}} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.title}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => setDuringMomentum(false)}
        onMomentumScrollEnd={loadMore}
      />
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    padding: width * 0.03,
    backgroundColor: 'white',
    margin: width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
  },
  header: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    margin: width * 0.03,
    marginTop: width * 0.03,
    marginBottom: width * 0.03,
  },
  title: {
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: 'gray',
    fontSize: 18,
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginBottom: width * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: 'gray',
  },
});
