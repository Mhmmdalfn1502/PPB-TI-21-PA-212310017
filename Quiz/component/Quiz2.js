// import React, { Component } from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// class Quiz2 extends Component {
//     render() {
//         return (
//             <View style={{flex:1, alignItems:"center",
//             justifyContent:"center"}}>
//                 <Text>Sedang melaksanakan Quiz</Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({})

// export default Quiz2;

import React from 'react';
import {View, StyleSheet} from 'react-native';

const Quiz2 = ({navigation}) => {
    return (
        <View style={{flex:1, alignItems:"center",
            justifyContent:"center"}}>
                <Text>Sedang melaksanakan Quiz</Text>
            </View>
    );
}

const styles = StyleSheet.create({})

export default Quiz2;
