import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';
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
        console.log(editIndex);
        console.log(editText);
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
                    <View style={styles.listItem}>
                        {editIndex === index ? (
                            <View style={styles.editContainer}>
                                <TextInput
                                    style={styles.editText}
                                    value={editText}
                                    onChangeText={(text) => setEditText(text)}
                                    autoFocus
                                />
                                <Button title="Save Edit" onPress={()=>saveEdit()}/>
                            </View>
                        ) : (
                            <Text style={styles.listText}>{item}</Text>
                        )}
                        <View style={styles.buttonContainer}>
                            <Button title="Delete" onPress={() => del(index)} color="red" />
                            <View style={styles.buttonSpacer}></View> {/* Untuk menambah jarak */}
                            <Button title="Edit" onPress={() => startEdit(index, item)} color="blue" />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    listText: {
        flex: 1, // Membuat teks mengisi sisa ruang yang tersedia
    },
    editContainer: {
        flex: 1, // Membuat EditText mengisi sisa ruang yang tersedia
    },
    editText: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonSpacer: {
        marginLeft: 10, // Memberikan jarak antara tombol
    },
});

export default NoteList;
