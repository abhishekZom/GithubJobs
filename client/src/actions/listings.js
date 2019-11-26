import * as C from '../constants/types';
import API_ENDPOINTS from '../services/apiConfig';
import axios from 'axios';

const fetchJobsList = async (dispatch, language, onSuccess) => {
    dispatch({ type: C.FETCH_LISTINGS_INITIATED });
    try {
    const response = await axios.get(API_ENDPOINTS.LISTINGS(language));
        if(response) {
            dispatch({
                payload: response.data,
                type: C.FETCH_LISTINGS_SUCCESS
            });
            onSuccess();
        }
    } catch (err) {
        const body = await err.response;
        dispatch({
            payload: body,
            type: C.FETCH_LISTINGS_FAILURE
        });
    }
}

export default fetchJobsList;