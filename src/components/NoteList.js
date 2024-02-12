import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, Button, TextInput } from 'react-native';
import { deleteNote, editNote } from '../actions/notesActions'; // Import your action creators

const NoteList = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const del = (index) => {
        dispatch(deleteNote(index));
    };

    const startEdit = (index, text) => {
        setEditIndex(index);
        setEditText(text);
    };

    const saveEdit = () => {
        dispatch(editNote(editIndex, editText));
        setEditIndex(null);
        setEditText('');
    };

    return (
        <View>
            <Text>Notes:</Text>
            <FlatList
                data={notes}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        {editIndex === index ? (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput
                                    value={editText}
                                    onChangeText={setEditText}
                                    autoFocus
                                />
                                <Button title="Save Edit" onPress={saveEdit}/>
                            </View>
                        ) : (
                            <Text>{item}</Text>
                        )}
                        <View style={{ flexDirection: 'row' }}>
                            <Button title="Delete" onPress={() => del(index)} />
                            <Button title="Edit" onPress={() => startEdit(index, item)} />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default NoteList;
