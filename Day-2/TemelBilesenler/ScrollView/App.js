import { View,TextInput } from "react-native";

export default function App() {
	state = {
		name: ''
	};

	_onChangeText = text =>{
		this.setState({
			name:text,
		});
	};
	
	const {name} = this.state
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
	  <TextInput 
	  autoCapitalize='none'
	  keyboardType='numeric'
	  value={name}
	  placeholder='Bir isim giriniz...'
	  onChangeText={this._onChangeText}
	  style={styles.myInput}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFEB3B",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
	paddingHorizontal:10
  },
  myInput:{
	  width:'%100',
	  height:60,
	  borderWidth:2,
	  borderColor:'gray'
  }
  
});
