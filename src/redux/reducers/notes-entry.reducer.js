import { ACTION_ALL_NOTES_START, ACTION_ALL_NOTES_RESPONSE, ACTION_ALL_NOTES_ERROR } from '../../helper/constants'

let INITIAL_STATE = {
    entries: [],
    errorMessage: '',
    success: true,
    loading: false
};

const NoteReducer = (state = INITIAL_STATE, action) => {
    let { type } = action;
    switch (type) {
        case ACTION_ALL_NOTES_START: {
            return Object.assign({}, INITIAL_STATE, { loading: true });
        }
        case ACTION_ALL_NOTES_RESPONSE: {
            let { payload } = action;
            return Object.assign({}, INITIAL_STATE, { entries: payload });
        }
        case ACTION_ALL_NOTES_ERROR: {
            let { payload } = action;
            return Object.assign({}, INITIAL_STATE, { errorMessage: payload.message, success: false });
        }
    }
    return state;
}

export default NoteReducer;