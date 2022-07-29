import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

	state = {
		number: 0
	}
	
	onPressIncrease = ()=>{
		this.setState({
			number: ++this.state.number
		});
	};

	onPressDecrease = ()=>{
		this.setState({
			number: --this.state.number
		});
	};

  return (
    <View style={styles.container}>
		<View>
			<Text style={styles.number}></Text>
		</View>

		<View style={styles.buttons}>
			<Button
			title='Azalt'
			color='#000'
			onPress={this.onPressDecrease}>
			</Button>

			<Button
			title='Arttır'
			color='#000'
			onPress={this.onPressIncrease}>
			</Button>

		</View>

    </View>
  );
}



const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center'
  },
  buttons:{
	  flexDirection:'row'
  },
  number:{
	  fontSize: 44
  }
});
