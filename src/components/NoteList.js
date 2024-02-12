import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList} from 'react-native';

const NoteList = () => {
    const notes = useSelector ((state)=>state.notes);

    return (
        <View>
            <Text>Notes:</Text>
            <FlatList
            data={notes}
            keyExtractor={(item, index)=>index.toString()}
            renderItem = {({item})=><Text>{item}</Text>}
            />
        </View>
    );
};

export default NoteList;