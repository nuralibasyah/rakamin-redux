import React, {useState} from 'react';
import { UseDispatch, useDispatch } from 'react-redux';
import {addNote} from '../actions/notesActions';
import {View, TextInput, Button} from 'react-native';

const NoteForm = () =>{
    const [noteText, setNoteText] = useState('');
    const dispatch = useDispatch;

    const handleAddNote = () =>{
        if(noteText.trim()!==''){
            dispatch(addNote(noteText));
            setNoteText('');
        }
    };

    return(
        <View>
            <TextInput
            placeholde="Type your note here"
            value = {noteText}
            onChangeText={(text)=> setNoteText(text)}/>
            <Button title="Add Note" onPress={handleAddNote}/>
        </View>
    );
};

export default NoteForm;