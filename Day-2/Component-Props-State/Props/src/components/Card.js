import React, { Component } from "react";

import PropTypes from 'prop-types';


export default class Card extends Component {
  render() {
    const { text, backgroundColor } = this.props;
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>Merhaba!</Text>
        <View style={[styles.cardContainer, { backgroundColor }]}>
          <Text style={styles.cardText}>{text}</Text>
        </View>
      </View>
    );
  }
}

Card.PropTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string
}


const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
  cardText: {
    fontSize: 18,
  },
});
