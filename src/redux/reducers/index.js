import { combineReducers } from 'redux';
import NoteReducer from './notes-entry.reducer';


const rootReducer = combineReducers({
    noteEntry: NoteReducer
});

export default rootReducer;