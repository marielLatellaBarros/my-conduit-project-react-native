Exercise 1-1 - DONE
Create new file in the src/ui directory named CircledImage.tsx
Build a custom component CircledImage that uses the built-in Image element and accepts a size and an optional image link and style
Add a TypeScript type or interface for your component props
Use https://static.productionready.io/images/smiley-cyrus.jpg as fallback image in case non is provided
optional: Barrel your exports in an index.ts file under the src/ui directory

Exercise 1-2
under the src/ui/article directory, create a new file ArticlePreview.tsx
create a new component ArticlePreview that accepts an article through props (check assets/articles.js for the type signature)
create an interface or type that describes an article. (Tip: Build a separate interface/type for the author)
Combine Flexbox, CircledImage and Text elements to build a reusable ArticlePreview component
Focus on building the layout; Favourite-button, tags and text will be styled later

Exercise 1-3
Split up into reusable and/or logical components.
Under src/ui/author create AuthorMeta.tsx, this component contains the image, username of the author as well as the creation time of the article
Under src/ui/article create ArticlePreviewBody.tsx, this component contains the title, description, call to action (Read more...) and tags
As always create the correct type/interfaces for each reusable component
Rebuild ArticlePreview using your refactored components
Use stylesheets to remove all in-line styling from the components, you can leave the stylesheets in the same file as the component or create an external style (e.g. AuthorMeta.styles.ts)

Exercise 1-4
Use FlatList and your custom ArticlePreview item to render a list of articles (assets/articles.js)

Exercise 1-5
Under src/pages add ArticlesList.tsx and refactor your code by moving all ArticlesList logic to your new component
Install React Native's Navigation packages: npm i react-navigation react-navigation-stack
use react-navigation's createStackNavigator function to build our navigation stack (1 route: Home)
use react-navigation's createAppContainer function to create our new app container using the previously created Stack
Render AppContainer inside App's container View
In ArticlesList.tsx, set your Navigation Bar's title to 'Conduit' using NavigationScreenOptions

Exercise 1-6
ArticlesList.tsx
Use the useNavigation hook to add navigation to the ArticlesList component
TODO: Write a function navigateArticle that navigates to the Article route, passing slug as a param {slug: slug}
TODO: Under src/pages create a new component ArticleDetail.tsx; for now let it display the slug you passed to it through the navigator
TODO: You can get route params through the navigation object of your component
App.tsx
Add a new route Article that routes to the ArticleDetail component
ArticlePreview.tsx
Add a new prop: navigateDetail to the Article type, optionally rename the type to ArticlePreview or ArticlePreviewProps
Build a Touchable of your choice around ArticlePreviewBody and bind onPress to the navigateDetail function

Exercise 1-7
Finish building the detail component and add styling throughout the application

