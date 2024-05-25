import React from "react";
import { StyleSheet, Image } from "react-native"
import { ImageSourcePropType } from "react-native";

interface ImageViewerProps{
  placeholder: ImageSourcePropType
}

export default function ImageViewer({placeholder}: ImageViewerProps) {
  return (
    <Image source={placeholder} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});