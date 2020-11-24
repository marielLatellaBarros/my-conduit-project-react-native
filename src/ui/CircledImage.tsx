import React from 'react';
import { Image, ImageStyle } from 'react-native';

// Define the properties the object of type CircledImage should have
interface CircledImage {
    size: number;
    style?: ImageStyle;
    uri?: string;
}


type Props = {
    size: number;
    style?: ImageStyle;
    uri?: string;
  }


// export const CircledImage =  ( image :CircledImage) => { // : JSX.Element this const returns a jsx element'
export const CircledImage: React.FunctionComponent<Props> = (image): JSX.Element => {
const imageStyle = {
    // width : image.size,
    // height : image.size,
    // //borderRadius : image.size / 2 // ??? doesn't recognize borderRadius
    // borderTopLeftRadius: image.size / 2,
    // borderTopRightRadius: image.size / 2,
    // borderBottomLeftRadius: image.size / 2,
    // borderBottomRightRadius: image.size / 2,
    width: image.size,
    height: image.size,
    borderRadius: image.size / 2
}

return (
    <Image
          style={[imageStyle, image.style]}
          source={{
            uri: image.uri || "https://static.productionready.io/images/smiley-cyrus.jpg"
          }}
        />
  );
}
