import React from "react";
import { StyleSheet, Image, ImageSourcePropType } from "react-native"
import { ImageViewerProps } from "@/types/types";

export default function ImageViewer({placeholder, selectedImage}: ImageViewerProps) {
  const imageSource: ImageSourcePropType = selectedImage ? { uri: selectedImage } : placeholder
  return (
    <Image source={imageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});