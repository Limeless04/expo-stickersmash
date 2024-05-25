import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import IMAGEPLACEHOLDER from "./assets/images/background-image.png";
import ImageViewer from '@components/ImageViewer';
import Button from '@components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholder={IMAGEPLACEHOLDER}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme='primary' />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center'
  }
});
