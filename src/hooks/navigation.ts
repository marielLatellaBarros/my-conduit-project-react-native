import { NavigationContext, NavigationRoute, NavigationParams, NavigationScreenProp } from "react-navigation";
import { useContext } from "react";
import { NavigationStackOptions } from "react-navigation-stack";

export type FunctionNavigationOptions = {
  navigationOptions?: NavigationStackOptions | (({ navigation }) => NavigationStackOptions);
}

export const useNavigation = (): NavigationScreenProp<NavigationRoute, NavigationParams> => {
  return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>;
}