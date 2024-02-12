import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, deleteAll, deleteNote } from '../actions/notesActions';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NoteForm = () => {
    const [noteText, setNoteText] = useState('');
    const dispatch = useDispatch();

    const handleAddNote = () => {
        if (noteText.trim() !== '') {
            dispatch(addNote(noteText));
            setNoteText('');
        }
    };

    const handleDeleteAll = () => {
        dispatch(deleteAll());
    }

    return (
        <View>
            <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type your note here"
                value={noteText}
                onChangeText={(text) => setNoteText(text)}
            />
            <Button title="Add Note" onPress={handleAddNote} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Delete All jing" onPress={handleDeleteAll} />
             </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});

export default NoteForm;
