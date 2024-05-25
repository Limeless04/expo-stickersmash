import { ImageSourcePropType } from "react-native";

export interface ImageViewerProps {
    placeholder: ImageSourcePropType,
    selectedImage?: string | null
}