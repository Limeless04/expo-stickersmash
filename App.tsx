import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import IMAGEPLACEHOLDER from "./assets/images/background-image.png";
import ImageViewer from '@components/ImageViewer';
import Button from '@components/Button';
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null >(null)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({  
      allowsEditing: true,
      quality: 1
    })

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    }else{
      alert("You did not select an image!")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholder={IMAGEPLACEHOLDER} selectedImage={selectedImage}/>
      </View>
      {
        showAppOptions ? (
          <View />
        ): (
          <View style={styles.footerContainer}>
            <Button label="Choose a photo" theme='primary' onPress={pickImage}/>
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
          </View>
        )
      }
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
