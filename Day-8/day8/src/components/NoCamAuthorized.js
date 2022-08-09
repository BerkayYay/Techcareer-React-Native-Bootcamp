import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreView, View, TouchableOpacity } from 'react-native';

import PermissionStatusText from './PermissionStatusText';

export default function NoCamAuthorized() {
 const  {camera, microphone} = this.props.permissions;
  return (
    <SafeAreView style={styles.container}>
      <PermissionStatusText 
      text={"Kamera"}
      permission={camera}
      />

      <PermissionStatusText 
      text={"Mikrofon"}
      permission={microphone}
      />
    </SafeAreView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
