import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Search from '../pages/Search';
import Result from '../pages/Result';
import Remedy from '../pages/Remedy';
import Message from '../pages/Message';

import colors from '../style/colors';

const App = createStackNavigator();
const Tab = createBottomTabNavigator();

function Menu() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: `${colors.color_three}`,
                inactiveTintColor: `${colors.color_three}`,
                showLabel: false,
                style: {
                    backgroundColor: `${colors.color_four}`,
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 55,
                },
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';

                    if (route.name === 'Main') {
                        iconName = focused ? 'home' : 'home-outline';

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    }
                    if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
            })}
        >
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    );
}

const Routes: React.FC = () => (
    <NavigationContainer>
        <App.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <App.Screen name="Home" component={Home} />
            <App.Screen name="Login" component={Login} />
            <App.Screen name="Menu" component={Menu} />
            <App.Screen name="Result" component={Result} />
            <App.Screen name="Remedy" component={Remedy} />
            <App.Screen name="Message" component={Message} />
        </App.Navigator>
    </NavigationContainer>
);

export default Routes;
