import React, from 'react';
import { View,TextInput, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default function App() {
	
  return (
    <View style={styles.container}>
      <ScrollView
	  pagingEnabled={true}
	  horizontal={true}>
	  <Text style={styles.title}>1</Text>
	  <Text style={styles.title}>2</Text>
	  <Text style={styles.title}>3</Text>
	  <Text style={styles.title}>4</Text>
	  <Text style={styles.title}>5</Text>
	  <Text style={styles.title}>6</Text>
	  <Text style={styles.title}>7</Text>
	  <Text style={styles.title}>8</Text>
	  <Text style={styles.title}>9</Text>
	  <Text style={styles.title}>10</Text>
	  <Text style={styles.title}>11</Text>
	  <Text style={styles.title}>12</Text>

	  </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFEB3B",
    flexDirection: "row",
	flex: 1
  },
  title:{
	  backgroundColor: 'orange',
	  marginVertical: 30,
	  textAlign: 'center',
	  paddingVertical: 30,
	  borderColor: 'yellow',
	  borderWidth:2,
	  fontSize: 36,
	  width
  }
 
  
});
