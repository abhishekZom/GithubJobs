import * as C from '../constants/types';

const GENERIC_STATE = {
    data: {},
    error: null,
    fetching: false,
    fetched: false,
    success: false,
};

export default function selectedJob(state = GENERIC_STATE, action) {
    switch (action.type) {
        case C.FETCH_JOB_DETAILS_INITIATED:
            return { ...state, fetching: true, fetched: false };
        case C.FETCH_JOB_DETAILS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                success: true,
                fetching: false,
                fetched: true,
                error: null,
            };
        }
        case C.FETCH_JOB_DETAILS_FAILURE:
            return {
                ...state,
                success: false,
                fetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
