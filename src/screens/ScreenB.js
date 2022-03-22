import React from 'react';
import { StyleSheet, View, Text, Pressable, 
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';


//------------------------------------------------------------------------------------ //


// export default function ScreenB({ navigation }) {
//     const onPressHandler = () => {
//         // navigation.navigate('Screen_A');
//         navigation.goBack();
//     }
//     return (
//         <View style={styles.body}>
//             <Text style={styles.text}>Screen B</Text>
//             <Pressable
//                 onPress={onPressHandler}
//                 style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
//                 <Text style={styles.text}>Go Back to Screen A</Text>
//             </Pressable>
//         </View>
//     )
// }


//------------------------------------------------------------------------------------ //


// Drawer Navigation - Side Menu - Passing Data Between Screens example
export default function ScreenB({ navigation, route }) {
    const { ItemName, ItemId } = route.params;
    const onPressHandler = () => {
        navigation.navigate('Screen_A', { Message: 'message from B' });
        // navigation.goBack();
    }
    return (
        <View style={styles.body}>
            <Text style={[GlobalStyle.CustomFont, styles.text]}>Screen A</Text>
            <Pressable onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
                <Text style={styles.text}>Go Back to Screen A</Text>
            </Pressable>
            <Text style={styles.text}>{ItemName}</Text>
            <Text style={styles.text}>ID: {ItemId}</Text>
        </View>
    )
}


//------------------------------------------------------------------------------------ //



const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})