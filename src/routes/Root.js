import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatchesScreen from '../screens/MatchesScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import HeaderLogo from '../components/headerLogo';
import {useTheme} from 'styled-components';

const BottomTab = createBottomTabNavigator();

const Root = () => {
  const theme = useTheme();

  const defaultOptions = {
    tabBarShowLabel: false,
    tabBarInactiveBackgroundColor: theme.primary,
    tabBarActiveBackgroundColor: theme.primary,
    tabBarInactiveTintColor: theme.secondary,
    headerTintColor: theme.secondary,
    headerStyle: {backgroundColor: theme.primary},
  };

  const homeOptions = {
    ...defaultOptions,
    tabBarIcon: ({color}) => (
      <MaterialCommunityIcons name="home" color={color} size={30} />
    ),
    header: () => <HeaderLogo />,
  };

  const MatchesOptions = {
    ...defaultOptions,
    unmountOnBlur: true,
    tabBarIcon: ({color}) => (
      <MaterialCommunityIcons name="heart" color={color} size={30} />
    ),
  };

  const MyProfileOptions = {
    ...defaultOptions,
    tabBarIcon: ({color}) => (
      <MaterialCommunityIcons name="nature-people" color={color} size={30} />
    ),
  };

  return (
    <BottomTab.Navigator activeColor={theme.secondary}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={homeOptions}
      />
      <BottomTab.Screen
        name="Matches"
        component={MatchesScreen}
        options={MatchesOptions}
      />
      <BottomTab.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={MyProfileOptions}
      />
    </BottomTab.Navigator>
  );
};

export default Root;
