import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.slideOne}></View>
    <View style={styles.slideTwo}>
      <View style={[styles.box, styles.box1]}></View>
      <View style={[styles.box, styles.box2]}></View>
      <View style={[styles.box, styles.box3]}></View>
    </View>
  </View>
  );
}

// eğer flex-direction row verilirse birincil eksen yatay olur.
// eğer flex-direction columnt verilirse birincil eksen dikey olur.

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flex: 1
  },
	slideOne: {
		backgroundColor: '#607D8B',
		flex: 1 // 3:6
	},
	slideTwo: {
		backgroundColor: '#FF5722',
		flex: 2,
		flexDirection: 'row'//column
	},
	box: {
		width: 100,
		height: 100
	},
	box1: {
		backgroundColor:'#795548'
	},
	box2: {
		backgroundColor: '#9E9E9E'
	},
	box3: {
		backgroundColor: '#3F51B5'
	}
});
