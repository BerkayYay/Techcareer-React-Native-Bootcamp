import React, { useState, useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import Permissions from 'react-native-permissions';

export default function PermissionStatusText() {
 _openSettings = () =>{
   Permissions.openSettings();
 }

 const {permission, text} = this.props;

  return (
    <View>
      {
        permission !== 'authorized'
        ?
        <Button
        onPress={this._openSettings}
        title={`${text} erişimini etkinleştir.`}
        style={[styles.text, styles.activeText]}
        />
        :
        <Text style={[styles.text, styles.activeText]}>
         ✓ {text} erişimi etkin.
        </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
	text: {
		color: '#fff',
		padding: 10,
		fontWeight: '600'
	},
	activeText: {
		color: 'green'
	},
	button: {
		color: '#1283de'
	}
});



