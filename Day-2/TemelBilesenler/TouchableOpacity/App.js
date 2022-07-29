import { View, TouchableOpacity } from "react-native";

export default function App() {
	_onPressButton = () =>{
		alert('test');
	}

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginBottom: 40 }}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>My Button</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
	  onPress={this._onPressButton}>
		<Image
		style={{width:100, height:100}}
		source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}></Image>
	  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFEB3B",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 24,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 15,
  },
});
