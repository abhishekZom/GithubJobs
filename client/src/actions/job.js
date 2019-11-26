import * as C from '../constants/types';
import API_ENDPOINTS from '../services/apiConfig';
import axios from 'axios';

const fetchJobDetails = async (dispatch, jobId) => {
    dispatch({ type: C.FETCH_JOB_DETAILS_INITIATED });
    try {
    const response = await axios.get(API_ENDPOINTS.JOB_DETAILS(jobId));
    dispatch({
        payload: response.data,
        type: C.FETCH_JOB_DETAILS_SUCCESS
    });
    } catch (err) {
    const body = await err.response;
    dispatch({
        payload: body,
        type: C.FETCH_JOB_DETAILS_FAILURE
    });
    }
}

export default fetchJobDetails;