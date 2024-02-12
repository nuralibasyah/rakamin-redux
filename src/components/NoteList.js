import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, FlatList} from 'react-native';

const NoteList = () => {
    const notes = useSelector ((state)=>state.notes);

    return (
        <view>
            <Text>Notes:</Text>
            <FlatList
            data={notes}
            keyExtractor={(item, index)=>index.toString()}
            renderItem = {({item})=><Text>{item}</Text>}
            />
        </view>
    );

};

export default NoteList;