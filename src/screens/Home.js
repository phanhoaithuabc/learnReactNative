import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, FlatList, TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../utils/CustomButton';
import GlobalStyle from '../utils/GlobalStyle';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, increaseAge, getUsers } from '../redux/actions';
import PushNotification from "react-native-push-notification";


//------------------------------------------------------------------------------------ //


// // Offline Login with Async Storage example
// // export default function Home({ navigation, route }) {
// export default function Home({ navigation }) {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
    
//     useEffect(() => { getData(); }, []);

//     const getData = () => {
//         try {
//             AsyncStorage.getItem('UserData')
//                 .then(value => {
//                     if (value != null) {
//                         let user = JSON.parse(value);
//                         setName(user.Name); setAge(user.Age);
//                     }
//                 })
//         } catch (error) { console.log(error); }
//     }

//     const updateData = async () => {
//         if (name.length == 0) Alert.alert('Warning!', 'Please write your data.')
//         else
//             try {
//                 var user = { Name: name }
//                 await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
//                 Alert.alert('Success!', 'Your data has been updated.');
//             } catch (error) { console.log(error); }
//     }

//     const removeData = async () => {
//         try {
//             await AsyncStorage.clear();
//             navigation.navigate('Login');
//         } catch (error) { console.log(error); }
//     }
//     return (
//         <View style={styles.body}>
//             <Text style={[GlobalStyle.CustomFont, styles.text]}>Welcome {name} !</Text>
//             <Text style={[GlobalStyle.CustomFont, styles.text]}>Your age is {age}</Text>
//             <TextInput style={styles.input} placeholder='Enter your name'
//                 value={name} onChangeText={(value) => setName(value)} />
//             <CustomButton title='Update' color='#ff7f00'
//                 onPressFunction={updateData} />
//             <CustomButton title='Remove' color='#f40100'
//                 onPressFunction={removeData} />
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
//     () => { }, // logic successful
//     error => { console.log(error) }
// );

// export default function Home({ navigation, route }) {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             let user = JSON.parse(value);
//             //             setName(user.Name);
//             //             setAge(user.Age);
//             //         }
//             //     })
//             db.transaction((tx) => {
//                 tx.executeSql("SELECT Name, Age FROM Users", [], (tx, results) => {
//                     var len = results.rows.length;
//                     if (len > 0) {
//                         var userName = results.rows.item(0).Name;
//                         var userAge = results.rows.item(0).Age;
//                         setName(userName); setAge(userAge);
//                     }
//                 })
//             })
//         } catch (error) { console.log(error); }
//     }

//     const updateData = async () => {
//         if (name.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 // var user = {
//                 //     Name: name
//                 // }
//                 // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
//                 db.transaction((tx) => { tx.executeSql("UPDATE Users SET Name=?", [name],
//                     () => { Alert.alert('Success!', 'Your data has been updated.') },
//                     error => { console.log(error) })
//                 })
//             } catch (error) { console.log(error); }
//         }
//     }

//     const removeData = async () => {
//         try {
//             // await AsyncStorage.clear();
//             db.transaction((tx) => { tx.executeSql("DELETE FROM Users", [], 
//                 () => { navigation.navigate('Login') },
//                 error => { console.log(error) })
//             })
//         } catch (error) { console.log(error); }
//     }

//     return (
//         <View style={styles.body}>
//             <Text style={[GlobalStyle.CustomFont, styles.text]}>Welcome {name} !</Text>
//             <Text style={[GlobalStyle.CustomFont, styles.text]}>Your age is {age}</Text>
//             <TextInput style={styles.input} placeholder='Enter your name'
//                 value={name} onChangeText={(value) => setName(value)} />
//             <CustomButton title='Update' color='#ff7f00' onPressFunction={updateData} />
//             <CustomButton title='Remove' color='#f40100' onPressFunction={removeData} />
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
//     () => { },
//     error => { console.log(error) }
// );

// export default function Home({ navigation, route }) {

//     const { name, age } = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();

//     // const [name, setName] = useState('');
//     // const [age, setAge] = useState('');

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             let user = JSON.parse(value);
//             //             setName(user.Name);
//             //             setAge(user.Age);
//             //         }
//             //     })
//             db.transaction((tx) => {
//                 tx.executeSql("SELECT Name, Age FROM Users", [],
//                     (tx, results) => {
//                         var len = results.rows.length;
//                         if (len > 0) {
//                             var userName = results.rows.item(0).Name;
//                             var userAge = results.rows.item(0).Age;
//                             dispatch(setName(userName));
//                             dispatch(setAge(userAge));
//                         }
//                     }
//                 )
//             })
//         } catch (error) { console.log(error); }
//     }

//     const updateData = async () => {
//         if (name.length == 0) {
//             Alert.alert('Warning!', 'Please write your data.')
//         } else {
//             try {
//                 // var user = {
//                 //     Name: name
//                 // }
//                 // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
//                 db.transaction((tx) => {
//                     tx.executeSql("UPDATE Users SET Name=?", [name],
//                         () => { Alert.alert('Success!', 'Your data has been updated.') },
//                         error => { console.log(error) }
//                     )
//                 })
//             } catch (error) { console.log(error); }
//         }
//     }

//     const removeData = async () => {
//         try {
//             // await AsyncStorage.clear();
//             db.transaction((tx) => {
//                 tx.executeSql("DELETE FROM Users",[],
//                     () => { navigation.navigate('Login') },
//                     error => { console.log(error) }
//                 )
//             })
//         } catch (error) { console.log(error); }
//     }

//     return (
//         <View style={styles.body}>
//             <Text style={[GlobalStyle.CustomFont, styles.text]}>Welcome {name} !</Text>
//             <Text style={[GlobalStyle.CustomFont,styles.text]}>Your age is {age}</Text>
//             <TextInput style={styles.input} placeholder='Enter your name' value={name}
//                 onChangeText={(value) => dispatch(setName(value))}/>
//             <CustomButton title='Update' color='#ff7f00' onPressFunction={updateData} />
//             <CustomButton title='Remove' color='#f40100' onPressFunction={removeData} />
//             <CustomButton title='Increase Age' color='#0080ff'
//                 onPressFunction={()=>{dispatch(increaseAge())}} />
//         </View>
//     )
// }


//------------------------------------------------------------------------------------ //


// Fetch Data from an API Using Redux & Local & Scheduled Push Notification &
// Google Maps & NR Camera with Hook
const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

export default function Home({ navigation }) {

    const { name, age, users } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
        dispatch(getUsers());
    }, []);

    const getData = () => {
        try {
            db.transaction((tx) => {tx.executeSql("SELECT Name, Age FROM Users", [], 
                (tx, results) => { 
                    var len = results.rows.length;
                    if (len > 0) {
                        var userName = results.rows.item(0).Name;
                        var userAge = results.rows.item(0).Age;
                        dispatch(setName(userName));
                        dispatch(setAge(userAge));
                    }
                }
            )})
        } catch (error) { console.log(error);}
    }

    const handleNotification = (item, index) => {
        PushNotification.cancelAllLocalNotifications();

        PushNotification.localNotification({
            channelId: "test-channel", title: "You clicked on " + item.name,
            message: item.name,
            bigText: item.name + " has " + item.website,
            color: "red", id: index
        });

        PushNotification.localNotificationSchedule({
            channelId: "test-channel", title: "Alarm",
            message: "You clicked on " + item.completed + " 20 seconds ago",
            date: new Date(Date.now() + 20 * 1000),
            allowWhileIdle: true,
        });
    }

    return (
        <View style={styles.body}>
            <Text style={[GlobalStyle.CustomFont, styles.text]}>Welcome {name} !</Text>
                <CustomButton title="Open Camera" color='#0080ff'
                    onPressFunction={() => { navigation.navigate('Camera') }} />
                <TouchableOpacity onPress={() => { 
                    navigation.navigate('Map', {
                        city: 'Quy Nhon',
                        lat: 0,
                        lng: 0,
                    });
                }}>
                    <View style={styles.item}>
                        <Text style={styles.title}>Binh Dinh</Text>
                        <Text style={styles.subtitle}>Quy Nhon</Text>
                    </View>
                </TouchableOpacity>
            <FlatList data={users}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => { handleNotification(item, index) }}>
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.subtitle}>{item.website}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    )
}


//------------------------------------------------------------------------------------ //

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 35,
        margin: 10,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        margin: 5,
    },
    subtitle: {
        fontSize: 16,
        margin: 5,
        color: '#999999',
    }
})