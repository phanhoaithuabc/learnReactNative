import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {useDispatch, useSelector} from 'react-redux'

export default function ToDo({ navigation}){
    const { tasks } = useState(state => state.taskReduces)
    const dispatch = useDispatch();

    useEffect(() => { 
        getTasks();
    }, [])

    const getTasks = () => {
        
    }

    return(
        <View style={styles.body}>
            <TouchableOpacity style={styles.button}
                onPress={() => {
                    dispatch(setTaskID(tasks.length + 1));
                    navigation.navigate('Task');
                }}
            >
                <FontAwesome5 name={'plus'}
                    size={20} color={'#ffffff'}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#0080ff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 5,
    },
})