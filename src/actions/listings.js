import * as C from '../constants/types';
import API_ENDPOINTS from '../services/apiConfig';
import axios from 'axios';

const fetchJobsList = async (dispatch) => {
    dispatch({ type: C.FETCH_LISTINGS_INITIATED });
    try {
        debugger;
    const response = await axios.get(API_ENDPOINTS.LISTINGS('java'), {
        headers: {
            origin: 'https://www.example.com'
        }
    });
    dispatch({
        payload: response.data,
        type: C.FETCH_LISTINGS_SUCCESS
    });
    } catch (err) {
    const body = await err.response;
    dispatch({
        payload: body,
        type: C.FETCH_LISTINGS_FAILURE
    });
    }
}

export default fetchJobsList;