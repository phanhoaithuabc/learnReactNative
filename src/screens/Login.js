import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Alert,
} from 'react-native';
import CustomButton from '../utils/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, increaseAge, getTodos } from '../redux/actions';
import PushNotification from "react-native-push-notification";


//------------------------------------------------------------------------------------ //


// // Offline Login with Async Storage example
// export default function Login({ navigation }) {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     useEffect(() => { getData(); }, []);

//     const getData = () => {
//         try {
//             AsyncStorage.getItem('UserData')
//                 .then(value => {
//                     if (value != null) { navigation.navigate('Home'); }
//                 })
//         } catch (error) { console.log(error); }
//     }

//     const setData = async () => {
//         if (name.length == 0 || age.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 var user = { Name: name, Age: age }
//                 await AsyncStorage.setItem('UserData', JSON.stringify(user));
//                 navigation.navigate('Home');
//             } catch (error) { console.log(error); }
//         }
//     }

//     return (
//         <View style={styles.body} >
//             <Image style={styles.logo} source={require('../../assets/sqlite_logo.png')}/>
//             <Text style={styles.text}>Async Storage</Text>
//             <TextInput style={styles.input} placeholder='Enter your name'
//                 onChangeText={(value) => setName(value)} />
//             <TextInput style={styles.input} placeholder='Enter your age'
//                 onChangeText={(value) => setAge(value)} />
//             <CustomButton title='Login' color='#1eb900' onPressFunction={setData} />
//         </View>
//     )
// }


//------------------------------------------------------------------------------------ //


// // Offline Login with SQLite example
// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error) }
// );

// export default function Login({ navigation }) {
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     useEffect(() => {
//         createTable();
//         getData();
//     }, []);

//     const createTable = () => {
//         db.transaction((tx) => { tx.executeSql("CREATE TABLE IF NOT EXISTS " + "Users "
//             + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);") })
//     }
//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             navigation.navigate('Home');
//             //         }
//             //     })
//             db.transaction((tx) => { tx.executeSql(
//                 "SELECT Name, Age FROM Users", [], (tx, results) => {
//                     var len = results.rows.length;
//                     if (len > 0) {
//                         navigation.navigate('Home');
//                     }
//                 }
//             )})
//         } catch (error) { console.log(error); }
//     }

//     const setData = async () => {
//         if (name.length == 0 || age.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 // var user = {
//                 //     Name: name,
//                 //     Age: age
//                 // }
//                 // await AsyncStorage.setItem('UserData', JSON.stringify(user));
//                 await db.transaction(async (tx) => {
//                     // await tx.executeSql(
//                     //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
//                     // );
//                     await tx.executeSql("INSERT INTO Users (Name, Age) VALUES (?,?)", [name, age]);
//                 })
//                 navigation.navigate('Home');
//             } catch (error) { console.log(error); }
//         }
//     }
//     return (
//         <View style={styles.body} >
//             <Image style={styles.logo} source={require('../../assets/sqlite_logo.png')}/>
//             <Text style={styles.text}></Text>
//             <TextInput style={styles.input} placeholder='Enter your name'
//                 onChangeText={(value) => setName(value)} />
//             <TextInput style={styles.input} placeholder='Enter your age'
//                 onChangeText={(value) => setAge(value)} />
//             <CustomButton title='Login' color='#1eb900' onPressFunction={setData} />
//         </View>
//     )
// }


//------------------------------------------------------------------------------------ //


// // Redux - State Management example 
// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { }, error => { console.log(error) }
// );

// export default function Login({ navigation }) {

//     const { name, age } = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         createTable();
//         getData();
//     }, []);

//     const createTable = () => { db.transaction((tx) => { tx.executeSql( 
//         "CREATE TABLE IF NOT EXISTS " + "Users "
//             + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);")
//         })
//     }

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             navigation.navigate('Home');
//             //         }
//             //     })
//             db.transaction((tx) => { tx.executeSql(
//                 "SELECT Name, Age FROM Users", [], (tx, results) => { 
//                     var len = results.rows.length;
//                     if (len > 0) {
//                         navigation.navigate('Home');
//                     }
//                 })
//             })
//         } catch (error) { console.log(error); }
//     }

//     const setData = async () => {
//         if (name.length == 0 || age.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 dispatch(setName(name));
//                 dispatch(setAge(age));
//                 // var user = {
//                 //     Name: name,
//                 //     Age: age
//                 // }
//                 // await AsyncStorage.setItem('UserData', JSON.stringify(user));
//                 await db.transaction(async (tx) => {
//                     // await tx.executeSql(
//                     //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
//                     // );
//                     await tx.executeSql("INSERT INTO Users (Name, Age) VALUES (?,?)", [name, age]);
//                 })
//                 navigation.navigate('Home');
//             } catch (error) { console.log(error); }
//         }
//     }

//     return (
//         <View style={styles.body} >
//             <Image style={styles.logo} source={require('../../assets/redux.png')} />
//             <Text style={styles.text}>Redux</Text>
//             <TextInput style={styles.input} placeholder='Enter your name'
//                 onChangeText={(value) => dispatch(setName(value))} />
//             <TextInput style={styles.input} placeholder='Enter your age'
//                 onChangeText={(value) => dispatch(setAge(value))} />
//             <CustomButton title='Login' color='#1eb900' onPressFunction={setData} />
//         </View>
//     )
// }


//------------------------------------------------------------------------------------ //


// Fetch Data from an API Using Redux & Local & Scheduled Push Notification
const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

export default function Login({ navigation }) {

    const { name, age } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        createTable();
        getData();
        createChannels();
    }, []);

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql( "CREATE TABLE IF NOT EXISTS " + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"
            )
        })
    }

    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "test-channel",
                channelName: "Test Channel"
            }
        )
    }

    const getData = () => {
        try {
            db.transaction((tx) => {
                tx.executeSql("SELECT Name, Age FROM Users", [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            navigation.navigate('Home');
                        }
                    }
                )
            })
        } catch (error) { console.log(error); }
    }

    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                dispatch(setName(name));
                dispatch(setAge(age));
                await db.transaction(async (tx) => {
                    await tx.executeSql("INSERT INTO Users (Name, Age) VALUES (?,?)", [name, age]);
                })
                navigation.navigate('Home');
            } catch (error) { console.log(error); }
        }
    }

    return (
        <View style={styles.body} >
            <Text style={styles.text}></Text>
            <TextInput style={styles.input} placeholder='Enter your name'
                onChangeText={(value) => dispatch(setName(value))} />
            <TextInput style={styles.input} placeholder='Enter your age'
                onChangeText={(value) => dispatch(setAge(value))} />
            <CustomButton title='Login' color='#1eb900' onPressFunction={setData} />
        </View>
    )
}



//------------------------------------------------------------------------------------ //


// Local & Scheduled Push Notification


//------------------------------------------------------------------------------------ //


// Push Notification with Firebase - Remote Notification


//------------------------------------------------------------------------------------ //


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 200,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
})