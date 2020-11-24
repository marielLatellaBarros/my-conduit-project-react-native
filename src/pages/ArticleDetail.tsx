import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '../hooks/navigation';

export const ArticleDetail = () => {
    const navigation = useNavigation();
    const {slug} = navigation.state.params; //object destructuring
    // const slug2 = navigation.state.params.slug; //std manier om data te krijgen
    return (
        <View>
            <Text>{ slug }</Text>
        </View>
    );
}