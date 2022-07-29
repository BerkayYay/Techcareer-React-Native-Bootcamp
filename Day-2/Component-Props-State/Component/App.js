import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
		<Card />
		<Card />
		<Card />
    </View>
  );
}



const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
  }
});
