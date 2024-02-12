import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import notesReducer from './src/reducers/notesReducer';
import NoteForm from './src/components/NoteForm';
import NoteList from './src/components/NoteList';
import { View, StyleSheet } from 'react-native';

const store = createStore(notesReducer);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.centered}>
          <NoteForm style={styles.form} />
          <NoteList style={styles.list} />
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  centered: {
    width: '80%', // Adjust width as needed
    alignItems: 'center',
  },
  form: {
    marginBottom: 20, // Adjust spacing between components
  },
  list: {
    flex: 1, // Allow the list to expand and fill available space
    width: '100%', // Ensure the list takes full width within the centered view
  },
});

export default App;
