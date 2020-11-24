# React Native Course

## Exercise 1-1 - DONE

1. Create new file in the src/ui directory named CircledImage.tsx
2. Build a custom component `CircledImage` that uses the built-in [Image](https://facebook.github.io/react-native/docs/image) element and accepts a size and an optional image link and style
3. Add a TypeScript type or interface for your component props
4. Use `https://static.productionready.io/images/smiley-cyrus.jpg` as fallback image in case non is provided
5. **optional**: Barrel your exports in an index.ts file under the src/ui directory

## Exercise 1-2 - DONE

1. under the src/ui/article directory, create a new file `ArticlePreview.tsx`
2. create a new component `ArticlePreview` that accepts an article through props (check assets/articles.js for the type signature)
3. create an interface or type that describes an article. (Tip: Build a separate interface/type for the author)
4. Combine Flexbox, CircledImage and Text elements to build a reusable ArticlePreview component
5. Focus on building the layout; Favourite-button, tags and text will be styled later

## Exercise 1-3 - DONE

1. Split up into reusable and/or logical components.
2. Under src/ui/author create AuthorMeta.tsx, this component contains the image, username of the author as well as the creation time of the article
3. Under src/ui/article create ArticlePreviewBody.tsx, this component contains the title, description, call to action (Read more...) and tags
4. As always create the correct type/interfaces for each reusable component
5. Rebuild ArticlePreview using your refactored components
6. Use stylesheets to remove all in-line styling from the components, you can leave the stylesheets in the same file as the component or create an external style (e.g. AuthorMeta.styles.ts)

## Exercise 1-4 - DONE

1. Use FlatList and your custom ArticlePreview item to render a list of articles (assets/articles.js)

## Exercise 1-5 - DONE

1. Under src/pages add ArticlesList.tsx and refactor your code by moving all ArticlesList logic to your new component
2. Install React Native's Navigation packages: npm i react-navigation react-navigation-stack
3. use react-navigation's createStackNavigator function to build our navigation stack (1 route: Home)
4. use react-navigation's createAppContainer function to create our new app container using the previously created Stack
5. Render AppContainer inside App's container View
6. In ArticlesList.tsx, set your Navigation Bar's title to 'Conduit' using NavigationScreenOptions

## Exercise 1-6 - DONE

### ArticlesList.tsx

1. Use the useNavigation hook to add navigation to the ArticlesList component
2. TODO: Write a function `navigateArticle` that navigates to the Article route, passing slug as a param {slug: slug}
3. TODO: Under src/pages create a new component ArticleDetail.tsx; for now let it display the slug you passed to it through the navigator
4. TODO: You can get route params through the navigation object of your component

### App.tsx

1. Add a new route `Article` that routes to the ArticleDetail component

### ArticlePreview.tsx

1. Add a new prop: navigateDetail to the Article type, optionally rename the type to ArticlePreview or ArticlePreviewProps
2. Build a Touchable of your choice around ArticlePreviewBody and bind onPress to the navigateDetail function

## Exercise 1-7 - DONE (refactor)

Finish building the detail component and add styling throughout the application

## Exercise-2-1 - DONE

### App.tsx

1. Install the redux and react-redux dependencies: `npm i redux react-redux`
2. Under the src/reducks directory take a look at article.ts and index.ts and see if you understand the code; article.ts shows a basic reducer without any associated actions (yet), index.ts is another barrel file that will import our reducers and combine them into a single rootReducer (exported as default) to be used by our store
3. Create a Redux store by using redux's `createStore` function and passing our reducer from src/reducks as argument
4. Replace the `<View>` wrapper with react-redux's `<Provider>` wrapper, passing the store as single prop

### ArticlesList.tsx

1. Create new props for ArticlesList (1 prop: articles)
2. Remove static articles
3. Create a `mapStateToProps` function that takes a `state` as param and returns a Props object
4. use react-redux's `connect()` function to bind the Redux store to our component. **TIP**: use export default connect()

## Exercise-2-2

### article.ts

1. Create action type for *getting* an article detail. Remember Redux Ducks naming: <app-name>/<reducer-name>/<ACTION_TYPE>
2. Add reducer case for handling the article detail getter
3. Define an Action Creator for the article detail action type (`getArticle`). Remember: an action creator is a regular function that accepts an optional payload and returns an Action = { type: string, payload: Object }
4. (optional) if you have extra time, take a look at https://redux.js.org/recipes/usage-with-typescript and add strong typing to your ActionTypes, Reducers and State

### ArticleDetail.tsx

1. Create new props for ArticleDetail (2 props: article, getArticle)
2. Remove (or move to reducer) the article detail getter logic
3. use useEffect hook to load an article detail, make sure useEffect only fires when slug is changed
4. Use a conditional statement to render a `<Text>` element when article is undefined, and the actual detail component when the article is loaded
5. create a `mapStateToProps` function that takes a `state` as param and returns a Props object
6. create a `mapDispatchToProps` function that takes `dispatch` as param and returns a Props object. **EXAMPLE**: dispatch => ({ doSomething: (var?) => dispatch(doSomething(var))})
7. use react-redux's `connect()` function to bind the Redux store to our component. TIP: use export default connect()

## Exercise-2-3

### App.tsx

1. run `npm i redux-thunk` to install the Redux Thunk middleware
2. TODO: use redux's `addMiddleware(...middleware[])` function to add the thunk middleware

### article.ts

1. Add 5 more action types: LOAD_ARTICLE_LIST, LOAD_ARTICLE_LIST_SUCCESS, LOAD_ARTICLE_LIST_FAIL, LOAD_ARTICLE_DETAIL_SUCCESS, LOAD_ARTICLE_DETAIL_FAIL
2. add loading state for both list and detail (TIP: isLoadingList, isLoadingDetail) and make sure to set their initial state to true (in reducer constructor)
3. Define reducers for all 5 actions
4. Define action creators for the SUCCESS & FAIL actions and thunks for the LOAD actions
5. (optional) create typescript types for each action

### ArticleDetail.tsx

1. Add loading prop to Props type and mapStatetoProps
2. Use loading prop to show Loading message or Detail Component

### ArticlesList.tsx

1. Add loading prop to Props type and mapStatetoProps
2. Add list getter to props
3. use useEffect hook to load data
4. use conditional with loading prop to display a loading message or articles list
5. Add mapDispatchToProps to bind the articles getter

## Exercise-2-4

### App.tsx

1. fill in your account credentials, username and email can both be your school email address = recommended, don't choose too difficult of a password

### CreateArticle.tsx

1. create a state variable and setter for each input using React.useState()
2. bind state variable and setter to the input value and change event respectively
3. write a submit function that creates an ArticleForCreate, use the `string.split()` function to create a space separated taglist

### article.ts

1. Create new action types and action creators (CREATE_ARTICLE, CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_FAIL) and their corresponding reducer handlers to CREATE an ARTICLE and handle success or failure
2. When creating the action creator (thunk), use the (dispatch, getState) signature so you can access to logged in user's token and add it to the request headers. **TIP**: 'Authorization': 'Token ' + token

## Exercise-2-5

1. Run `expo install expo-location` and `expo install expo-permissions` to install the necessary dependencies
2. Create a function to get the location; use Permissions API to request LOCATION permission (see docs: https://docs.expo.io/versions/v35.0.0/sdk/location/)
3. Use the `getCurrentPositionAsync()` function to get your device's position and `reverseGeocodeAsync(position)` function to translate the position to a location
4. Use the `useEffect` hook to fire the function onLoad, make sure that it only fire onLoad (geolocation functions are expensive to run)
5. Create a local state variable to hold the location, if permission is granted, optionally show a Toast (https://facebook.github.io/react-native/docs/toastandroid) with a descriptive error message if permission was denied
6. Add a Text element to the form that shows from which Location the user is sending the article, or 'Location unknown' in case no permission was granted
