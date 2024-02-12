
export const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        payload: note,
    };
};

export const deleteNote = (note) => {
    return {
        type: 'DELETE_NOTE',
        payload: note,
    };
};

export const startEdit = (note) => {
    return {
        type: 'START_EDIT',
        payload: note,
    };
};

export const saveEdit = (note, newText) => {
    return {
        type: 'SAVE_EDIT',
        payload: { note, newText },
    };
};

export const editNote = (note, newText) => {
    return {
        type: 'EDIT_NOTE',
        payload: { note, newText },
    };
};
