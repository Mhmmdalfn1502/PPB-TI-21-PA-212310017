import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import { SectionList } from 'react-native-web';

const SectionListNo5 = () => {
    const Users = [
        {id: 1, name:'Alfan', fullname:'Muhammad Alfan', gender:'M'},
        {id: 2, name:'Nandes', fullname:'Nagasa Anandes', gender:'M'},
        {id: 3, name:'Mahesa', fullname:'Mahesa Alghifari', gender:'M'},
        {id: 6, name:'engkep', fullname:'Cindy Kevina', gender:'F'},
        {id: 11, name:'Dyas', fullname:'Dyas Tri', gender:'M'},
        {id: 12, name:'Dila', fullname:'Fadila husna', gender:'F'},
        {id: 9, name:'Erdiana', fullname:'Erdiana Ragil', gender:'F'},
        {id: 8, name:'Fawaz', fullname:'Mohamad Fawaz', gender:'M'},
        {id: 10, name:'Hera', fullname:'Hera Dwi Pradita', gender:'F'},
        {id: 7, name:'Rayyan', fullname:'Raden Rayyan', gender:'M'},
        {id: 5, name:'Adrian', fullname:'Adrian Adhari', gender:'M'},
        {id: 4, name:'Frila', fullname:'Frila Cahya', gender:'F'},
    ];

    return (
        <View>
            <SectionList sections={data} />
        </View>
    )
}

const AmbilData = ({ data }) => {
    return (
        <View>
                <View style={{marginBottom: 30, borderWidth: 1, padding: 20, backgroundColor: 'orange'}}>
                    <Text>{name}</Text>
                </View>
        </View>
    )
}

export default SectionListNo5;
