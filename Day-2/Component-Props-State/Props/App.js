import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
		<Card text='Merhaba' backgroundColor='blue' />
		<Card text='React Native' backgroundColor='red' />
		<Card text='Bootcamp' backgroundColor='yellow' />
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
