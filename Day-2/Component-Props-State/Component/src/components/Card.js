import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <View styles={styles.cardContainer}>
                <Text styles={styles.cardText}>Merhaba!</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        borderWidth:2,
        borderColor: '#000'
    },
    cardText:{
        fontSize: 18
    }
})