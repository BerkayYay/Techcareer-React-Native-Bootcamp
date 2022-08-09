import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Screen1 from './src/screens/informationScreen';
import Screen2 from './src/screens/settingsScreen';
import Screen3 from './src/screens/addScreen';
import info from './src/assets/ios-information-circ-9.png';
import infoPressed from './src/assets/ios-info-pressed.png';
import iosSettings from './src/assets/ios-list.png';
import iosSettingsPressed from './src/assets/ios-list-pressed.png';
import plusIcon from './src/assets/plus-icon.png';
import plusIconPressed from './src/assets/plus-icon-focused.png';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Information') {
              iconName = focused ? infoPressed : info;
            } else if (route.name === 'Settings') {
              iconName = focused ? iosSettingsPressed : iosSettings;
            }
            return (
              <Image
                source={iconName}
                style={{
                  width: size,
                  height: size,
                }}
              />
            );
          },
        })}
        tabBarActiveTintColor={'#00aaff'}
        tabBarInactiveTintColor={'#aaaaaa'}>
        <Tab.Screen
          name="Information"
          component={Screen1}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              iconName = focused ? plusIconPressed : plusIcon;
              return (
                <Image
                  source={iconName}
                  style={{
                    width: size * 2,
                    height: size * 2,
                    marginBottom: 30,
                  }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Screen2}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
