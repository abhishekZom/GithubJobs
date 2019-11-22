import * as C from '../constants/types';

const GENERIC_STATE = {
    data: {},
    error: null,
    fetching: false,
    success: false,
};

export default function jobs(state = GENERIC_STATE, action) {
    switch (action.type) {
        case C.FETCH_LISTINGS_INITIATED:
            return { ...state, fetching: true, fetched: false };
        case C.FETCH_LISTINGS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                success: true,
                fetching: false,
                error: null,
            };
        }
        case C.FETCH_LISTINGS_FAILURE:
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
