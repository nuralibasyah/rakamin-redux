import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import notesReducer from './src/reducers/notesReducer';
import NoteForm from './src/components/NoteForm';
import NoteList from './src/components/NoteList';
import {View} from 'react-native';

const store = createStore(notesReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.Container}>
        <NoteForm style={styles.Form}/>
        <NoteList style={styles.list}/>
      </View>
    </Provider>
  );
};

export default App;