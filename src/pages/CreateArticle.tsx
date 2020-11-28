import React, { useEffect } from "react";
import { View, TextInput, Button, ToastAndroid, Text } from 'react-native';
import { Colors } from "../styles/_colors";
import { styles } from "./CreateArticle.styles";
import { ArticleForCreate } from "../data";
import { createArticle } from "../reducks/article";
import { connect } from "react-redux";
import { FunctionNavigationOptions } from '../hooks';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

type Props = {
  postArticle: any;
  isLoading: boolean;
};

// Create a state variable and setter for each input using React.useState()
// Bind state variable and setter to the input value and change event respectively
// Write a submit function that creates an ArticleForCreate, use the `string.split()` function to create a space separated taglist
const CreateArticle: React.FunctionComponent<Props> & FunctionNavigationOptions = (props): JSX.Element => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [body, setBody] = React.useState("");
  const [taglist, setTaglist] = React.useState("");
  const [location, setLocation] = React.useState(null);

  const createArticle = () => {
    const article: ArticleForCreate = {
      title: title,
      description: description,
      body: body,
      tagList: taglist.split(" "),
    };
    props.postArticle(article);
  };

  // TODO: Run `expo install expo-location` and `expo install expo-permissions` to install the necessary dependencies
  // TODO: In the useEffect hook, use Permissions API to request LOCATION permission (see docs: https://docs.expo.io/versions/v35.0.0/sdk/location/)
  // TODO: Create a local state variable to hold the location, if permission is granted, otherwise show a Toast (https://facebook.github.io/react-native/docs/toastandroid) with a descriptive error message
  // TODO: Add a Text element to the form that shows from which Location the user is sending the article, or 'Location disabled' in case no permission was granted
  useEffect(() => {
    _getLocationAsync();
  }, []);

  const _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== Permissions.PermissionStatus.GRANTED) {
      ToastAndroid.show('Location Permission Denied', ToastAndroid.SHORT);
      setLocation('Location unknown');
    } else {
      const position = await Location.getCurrentPositionAsync();
      const [location] = await Location.reverseGeocodeAsync(position.coords);
      setLocation(location);
    }
  }

  return (
    <View style={{ padding: 8 }}>
      <TextInput
        key="title"
        style={styles.input}
        placeholder="An interesting title"
        value={title}
        onChangeText={text => setTitle(text)}
        editable={!props.isLoading}
      />
      <TextInput
        key="description"
        style={styles.input}
        multiline
        numberOfLines={2}
        placeholder="A small description"
        value={description}
        onChangeText={text => setDescription(text)}
        editable={!props.isLoading}
      />
      <TextInput
        key="body"
        style={styles.input}
        multiline
        numberOfLines={10}
        placeholder="Your text post"
        value={body}
        onChangeText={text => setBody(text)}
        editable={!props.isLoading}
      />
      <TextInput
        key="taglist"
        style={styles.lastInput}
        placeholder="Space separated tags (optional)"
        value={taglist}
        onChangeText={text => setTaglist(text)}
        editable={!props.isLoading}
      />
      <Button title="Submit" color={Colors.primaryDark} onPress={() => createArticle()}></Button>
      <Text>{location ? location.city : location}</Text>
    </View>
  );
};

CreateArticle.navigationOptions = {
  title: "Create Article",
  headerStyle: {
    backgroundColor: "#333",
  },
  headerTitleStyle: {
    color: "#FFF",
  },
  headerBackTitleStyle: {
    color: "#FFF",
  },
};

// Wire up the component to Redux by defining mapDispatchToProps and linking it to a postArticle action creator
// Define CreateArticlePage and use react-redux's connect function to link the component to the Redux store

const mapDispatchToProps = (dispatch) => ({
  postArticle: (article: ArticleForCreate) => dispatch(createArticle(article)),
});
const CreateArticlePage = connect(null, mapDispatchToProps)(CreateArticle);
export default CreateArticlePage;
