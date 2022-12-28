import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HeaderImage, HeaderView} from '../../public/style/styleComponents';
import MatchesScreen from '../screens/MatchesScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import {MAIN_COLOR, TITLE_COLOR_PRIMARY} from 'react-native-dotenv';

const BottomTab = createBottomTabNavigator();

const Root = () => {
  const defaultOptions = {
    tabBarShowLabel: false,
    tabBarInactiveBackgroundColor: MAIN_COLOR,
    tabBarActiveBackgroundColor: MAIN_COLOR,
    tabBarInactiveTintColor: TITLE_COLOR_PRIMARY,
    headerTintColor: TITLE_COLOR_PRIMARY,
    headerStyle: {backgroundColor: MAIN_COLOR},
  };
  const homeOptions = {
    ...defaultOptions,
    tabBarIcon: ({color}) => (
      <MaterialCommunityIcons name="home" color={color} size={30} />
    ),

    header: () => (
      <HeaderView>
        <HeaderImage
          source={require('../../public/images/tindex_logo_small.png')}
        />
      </HeaderView>
    ),
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
    <BottomTab.Navigator activeColor={TITLE_COLOR_PRIMARY}>
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
