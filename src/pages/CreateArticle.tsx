import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';
import { Colors } from '../styles/_colors';
import { styles } from './CreateArticle.styles';
import { ArticleForCreate } from '../data';
import { createArticle } from '../reducks/article';
import { connect } from 'react-redux';

type Props = {
  postArticle: any;
};

  // Create a state variable and setter for each input using React.useState()
  // Bind state variable and setter to the input value and change event respectively
  // Write a submit function that creates an ArticleForCreate, use the `string.split()` function to create a space separated taglist
const CreateArticle: React.FunctionComponent<Props> & { navigationOptions?: NavigationStackOptions } = (props): JSX.Element => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [body, setBody] = React.useState('');
  const [taglist, setTaglist] = React.useState('');

  const createArticle = () => {
    const article: ArticleForCreate = {
      title: title,
      description: description,
      body: body,
      tagList: taglist.split(' ')
    }
    props.postArticle(article);
  }

  return (
    <View style={{padding: 8}}>
      <TextInput key="title" style={styles.input} placeholder="An interesting title" value={title} onChangeText={text => setTitle(text)}/>
      <TextInput key="description" style={styles.input} multiline numberOfLines={2} placeholder="A small description" value={description} onChangeText={text => setDescription(text)}/>
      <TextInput key="body" style={styles.input} multiline numberOfLines={10} placeholder="Your text post" value={body} onChangeText={text => setBody(text)}/>
      <TextInput key="taglist" style={styles.lastInput} placeholder="Space separated tags (optional)" value={taglist} onChangeText={text => setTaglist(text)}/>
      <Button title="Submit" color={Colors.primaryDark} onPress={() => createArticle()}></Button>
    </View>
  );
};

CreateArticle.navigationOptions = {
    title: 'Create Article',
    headerStyle: {
      backgroundColor: '#333'
    },
    headerTitleStyle: {
      color: '#FFF'
    },
    headerBackTitleStyle: {
      color: '#FFF'
    }
  };

// Wire up the component to Redux by defining mapDispatchToProps and linking it to a postArticle action creator
// Define CreateArticlePage and use react-redux's connect function to link the component to the Redux store

const mapDispatchToProps = dispatch => ({postArticle: (article: ArticleForCreate) => dispatch(createArticle(article))})
const CreateArticlePage = connect(null, mapDispatchToProps)(CreateArticle);
export default CreateArticlePage;