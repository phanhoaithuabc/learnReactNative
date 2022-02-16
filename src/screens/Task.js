import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '../utils/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Task({ navigation }) {

    const { tasks, taskID } = useSelector(state => state.taskReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        getTask();
    }, [])

    const getTask = () => {
        const Task = tasks.find(task => task.ID === taskID)
        if (Task) {
            setTitle(Task.Title);
            setDesc(Task.Desc);
        }
    }
    
    return (
        <View style={styles.body}>
            <TextInput value={title}
                style={styles.input}
                placeholder='Title'
                onChangeText={(value) => setTitle(value)}
            />
            <TextInput value={desc}
                style={styles.input}
                placeholder='Description'
                multiline
                onChangeText={(value) => setDesc(value)}
            />
            <CustomButton title='Save Task'
                color='#1eb900'
                style={{ width: '100%' }}
                onPressFunction={setTask}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'left',
        fontSize: 20,
        margin: 10,
        paddingHorizontal: 10,
    }
})