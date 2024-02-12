const initialState = {
    notes: [],
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return { 
                ...state, 
                notes: [...state.notes, action.payload] 
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter((note, index) => index !== action.payload)
            };
        case 'EDIT_NOTE':
            return {
                ...state,
                notes: state.notes.map((note, index) =>
                    index === action.payload.index ? action.payload.newText : note
                )
            };
        default:
            return state;
    }
};

export default notesReducer;
