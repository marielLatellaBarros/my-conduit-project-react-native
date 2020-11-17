import React from 'react';
import { Image, ImageStyle } from 'react-native';

// Define the properties the object of type CircledImage should have
interface CircledImage {
    size: number;
    style?: ImageStyle;
    uri?: string;
}

export const CircledImage =  ( image :CircledImage) => { // : JSX.Element this const returns a jsx element'
const style = {
    width : image.size,
    height : image.size,
    //borderRadius : image.size / 2 // ??? doesn't recognize borderRadius
    borderTopLeftRadius: image.size / 2,
    borderTopRightRadius: image.size / 2,
    borderBottomLeftRadius: image.size / 2,
    borderBottomRightRadius: image.size / 2,
}

    return (
            <Image 
            source = {{ uri : image.uri || 'https://static.productionready.io/images/smiley-cyrus.jpg'}}
             //style = {style, image.style}/> // ? left side of the comma is not used???
            style = {style}/>
    )
}
