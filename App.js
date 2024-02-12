import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from 'redux';
import notesReducer from './src/reducers/notesReducer';
import NoteForm from './src/components/NoteForm';
import NoteList from './src/components/NoteList';
import {View} from 'react-native';

const store = configureStore(notesReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <NoteForm/>
        <NoteList/>
      </View>
    </Provider>
  );
};

export default App;