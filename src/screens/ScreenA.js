import React from 'react';
import { StyleSheet, View, Text, Pressable,
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';


//------------------------------------------------------------------------------------ //


// export default function ScreenA({ navigation }) {
//     const onPressHandler = () => { navigation.navigate('Screen_B'); }
//     return (
//         <View style={styles.body}>
//             <Text style={styles.text}>Screen A</Text>
//             <Pressable onPress={onPressHandler}
//                 style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
//                 <Text style={styles.text}>Go to Screen B</Text>
//             </Pressable>
//         </View>
//     )
// }


//------------------------------------------------------------------------------------ //


// Drawer Navigation - Side Menu - Passing Data Between Screens example
export default function ScreenA({ navigation, route }) {
    const onPressHandler = () => {
        navigation.navigate('Screen_B');
        // navigation.toggleDrawer();
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>font Shizuru-Regular</Text>
            <Text style={[GlobalStyle.CustomFont,styles.text]}>Screen A</Text>
            <Pressable onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
                <Text style={GlobalStyle.ButtonText}>Go to Screen B</Text>
            </Pressable>
            <Text>{route.params?.Message}</Text>
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
        // fontWeight: 'bold',
        margin: 10,
    }
})