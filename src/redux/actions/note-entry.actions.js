import axios from "axios";
import { URI_GET_ALL_NOTES, ACTION_ALL_NOTES_ERROR, ACTION_ALL_NOTES_RESPONSE, ACTION_ALL_NOTES_START } from '../../helper/constants';

export const getAllNotes = () => {

    return dispatch => {
        new Promise((resolve, reject) => {
            dispatch({
                type: ACTION_ALL_NOTES_START,
                payloaad: {}
            });

            axios.get(URI_GET_ALL_NOTES).then(response => {
                dispatch({
                    type: ACTION_ALL_NOTES_RESPONSE,
                    payload: response.data
                })
                resolve();
            }).catch(error => {
                dispatch({
                    type: ACTION_ALL_NOTES_ERROR,
                    payload: error
                });
                reject();
            })
        });
    }
}
