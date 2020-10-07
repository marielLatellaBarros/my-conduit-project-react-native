import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
    logo : {
        width : 50,
        height : 50, 
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    }
})

export const CircledImage = () => {
    return (
        <View>
            <Image 
            source = {{uri : 'https://static.productionready.io/images/smiley-cyrus.jpg'}}
            style = {styles.logo}/>
        </View>
    )
}