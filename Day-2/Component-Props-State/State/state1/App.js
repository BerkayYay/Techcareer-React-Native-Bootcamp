import { StyleSheet, Text, View, Button } from 'react-native';
import Card from './src/components/Card';

export default function App() {

	onPressDetail = () =>{
		alert('Detail');
		state ={
			name: 'Faik'
		};

		onPressChangeName = () =>{
			this.setState({
				name:'Ahmet'
			});
		};
	};

  return (
    <View style={styles.container}>
		<Text>{this.state.name}</Text>
		<Button 
		title='Detail'
		color='#000'
		onPress={this.onPressDetail}
		onPress={this.onPressChangeName}
		/>

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
