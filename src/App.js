import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RNCamera, FaceDetector } from 'react-native-camera';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import Home from './screens/Home';
import Login from './screens/Login';
import Maps from './screens/Maps';
import Camera from './screens/Camera';
import ToDo from './screens/ToDo';
import Done from './screens/Done';
import Task from './screens/Task';
import Splash from './screens/Splash';

// ----------------------------------------------------------------------------------- //

// // stack navigator example
// const Stack = createStackNavigator();

// function ScreenA({ navigation }) {
//   const onPressHandler = () => { navigation.navigate('Screen_B'); }
//   return (
//     <View style={styles.body}>
//       <Text style={styles.text}>Screen A</Text>
//       <Pressable
//         onPress={onPressHandler}
//         style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
//         <Text style={styles.text}>Go to Screen B</Text>
//       </Pressable>
//     </View>
//   )
// }

// function ScreenB({ navigation }) {
//   const onPressHandler = () => {
//     // navigation.navigate('Screen_A');
//     navigation.goBack();
//   }
//   return (
//     <View style={styles.body}>
//       <Text style={styles.text}>Screen B</Text>
//       <Pressable
//         onPress={onPressHandler}
//         style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
//         <Text style={styles.text}>Go Back to Screen A</Text>
//       </Pressable>
//     </View>
//   )
// }

// const App = () => {
  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         // // remove all screen header
//         // screenOptions={{
//         //   header: () => null
//         // }}
//       >
//         <Stack.Screen name="Screen_A" component={ScreenA}
//           // // remove all screen header
//           // options={{
//           //   header: () => null
//           // }}
//         />
//         <Stack.Screen name="Screen_B" component={ScreenB}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     margin: 10,
//   }
// });


//------------------------------------------------------------------------------------ //


// // Tab navigator - Material tab example
// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
// // const Tab = createMaterialTopTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, size, color }) => {
//             let iconName;
//             if (route.name === 'Screen_A') {
//               iconName = 'autoprefixer'; 
//               size = focused ? 25 : 20;
//               // color = focused ? '#f0f' : '#555';
//             } else if (route.name === 'Screen_B') {
//               iconName = 'btc'; 
//               size = focused ? 25 : 20;
//               // color = focused ? '#f0f' : '#555';
//             }
//             return (<FontAwesome5 name={iconName} size={size} color={color} />)
//           }
//         })}
//         tabBarOptions={{
//           activeTintColor: '#f0f',
//           inactiveTintColor: '#555',
//           activeBackgroundColor: '#fff',
//           inactiveBackgroundColor: '#999',
//           showLabel: true, 
//           showIcon: true,
//           labelStyle: { fontSize: 14 },
//         }}
//         activeColor='#f0edf6' 
//         inactiveColor='#3e2465'
//         barStyle={{ backgroundColor: '#694fad' }}>
//         <Tab.Screen name="Screen_A" component={ScreenA} options={{ tabBarBadge: 1 }} />
//         <Tab.Screen name="Screen_B" component={ScreenB} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


//------------------------------------------------------------------------------------ //


// // Drawer Navigation - Side Menu example
// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Screen_A"
//         drawerPosition='left'
//         drawerType="front"
//         edgeWidth={100}
//         hideStatusBar={false}
//         overlayColor='#00000090'
//         drawerStyle={{
//           backgroundColor: '#e6e6e6',
//           width: 250
//         }}
//         screenOptions={{
//           headerShown: true,
//           swipeEnabled: true,
//           gestureEnabled: true,
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: '#0080ff'
//           },
//           headerTintColor: '#ffffff',
//           headerTitleStyle: {
//             fontSize: 25,
//             fontWeight: 'bold'
//           }
//         }}>
//         <Drawer.Screen
//           name="Screen_A" component={ScreenA}
//           options={{
//             title: 'Screen_A Title',
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5 name="autoprefixer" size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'} />)
//           }}>
//         </Drawer.Screen>
//         <Drawer.Screen
//           name="Screen_B" component={ScreenB}
//           options={{
//             title: 'Screen_B Title',
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5 name="btc" size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'} />)
//           }}>
//         </Drawer.Screen>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


//------------------------------------------------------------------------------------ //


// // Drawer Navigation - Side Menu - Passing Data Between Screens example
// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Screen_A"
//         drawerPosition='left'
//         drawerType="front"
//         edgeWidth={100}
//         hideStatusBar={false}
//         overlayColor='#00000090'
//         drawerStyle={{
//           backgroundColor: '#e6e6e6',
//           width: 250
//         }}
//         screenOptions={{
//           headerShown: true,
//           swipeEnabled: true,
//           gestureEnabled: true,
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: '#0080ff'
//           },
//           headerTintColor: '#ffffff',
//           headerTitleStyle: {
//             fontSize: 25,
//             fontWeight: 'bold'
//           }
//         }}>
//         <Drawer.Screen
//           name="Screen_A" component={ScreenA}
//           options={{
//             title: 'Screen_A Title',
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5 name="autoprefixer" size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'} />)
//           }} />
//         <Drawer.Screen
//           name="Screen_B" component={ScreenB}
//           options={{
//             title: 'Screen_B Title',
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5 name="btc" size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'} />)
//           }}
//           initialParams={{ ItemName: 'Item from Drawer', ItemId: 12 }}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


//------------------------------------------------------------------------------------ //


// // Offline Login with Async Storage example
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login}
//           options={{ headerShown: false, }}/>
//         <Stack.Screen name="Home" component={Home}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


//------------------------------------------------------------------------------------ //


// // Offline Login with SQLite example
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login"
//         screenOptions={{
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: '#0080ff'
//           },
//           headerTintColor: '#ffffff',
//           headerTitleStyle: {
//             fontSize: 25,
//             fontWeight: 'bold'
//           }
//         }}>
//         <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


//------------------------------------------------------------------------------------ //


// // Redux - State Management example & Fetch Data from an API Using Redux & 
// // Local & Scheduled Push Notification & NR Camera with Hook
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <Provider store={Store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Login"
//           screenOptions={{
//             headerTitleAlign: 'center',
//             headerStyle: {
//               backgroundColor: '#0080ff'
//             },
//             headerTintColor: '#ffffff',
//             headerTitleStyle: {
//               fontSize: 25,
//               fontWeight: 'bold'
//             }
//           }}>
//           <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }}/>
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Map" component={Map} />
//           <Stack.Screen name="Camera" component={Camera} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }


//------------------------------------------------------------------------------------ //


// Todo app
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'To-Do') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 20;
            } else if (route.name === 'Done') {
              iconName = 'clipboard-check';
              size = focused ? 25 : 20;
            }
            return (
              <FontAwesome5 name={iconName} size={size} color={color} />
            );
          }
        })
      }
      screenOptions={{
        activeTintColor: '#0080ff', inactiveTintColor: '#777777',
        labelStyle: { fontSize: 15, fontWeight: 'bold' }
      }}
    >
      <Tab.Screen name={'To-Do'} component={ToDo} />
      <Tab.Screen name={'Done'} component={Done} />
    </Tab.Navigator>
  );
}

const RootStack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Splash"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <RootStack.Screen name="Splash" component={Splash}
            options={{ headerShown: false, }}
          />
          <RootStack.Screen name="My Tasks" component={HomeTabs} />
          <RootStack.Screen name="Task" component={Task} />
          <RootStack.Screen name="Camera" component={Camera} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


//------------------------------------------------------------------------------------ //




//------------------------------------------------------------------------------------ //
export default App;