import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setTasks } from '../redux/actions';

export default function Camera({ navigation, route }) {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    // todo app
    const { tasks } = useSelector(state => state.taskReducer);
    const dispatch = useDispatch();

    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;

            // learning
            // const newFilePath = RNFS.ExternalDirectoryPath + '/MyTest.jpg';
            // RNFS.moveFile(filePath, newFilePath)
            //     .then(() => {
            //         console.log('IMAGE MOVED', filePath, '-- to --', newFilePath);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })

            // todo app
            updateTask(route.params.id, filePath);
        } catch (error) { console.log(error); }
    }

    // todo app
    const updateTask = (id, path) => {
        const index = tasks.findIndex(task => task.ID === id);
        if (index > -1) {
            let newTasks = [...tasks];
            newTasks[index].Image = path;
            AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
                .then(() => {
                    dispatch(setTasks(newTasks));
                    Alert.alert('Success!', 'Task image is saved.');
                    navigation.goBack();
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <View style={styles.body}>
            <RNCamera ref={cameraRef} style={styles.preview}
                type={RNCamera.Constants.Type.back}>
                <CustomButton title="Capture"
                    color='#1eb900'
                    onPressFunction={() => captureHandle()} />
            </RNCamera>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});