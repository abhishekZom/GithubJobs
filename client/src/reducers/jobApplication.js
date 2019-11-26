import * as C from '../constants/types';

const GENERIC_STATE = {
    data: [],
    file: { name: '', size: null, type: ''},
    sumitted: false
};

export default function applicationFormData(state = GENERIC_STATE, action) {
    switch (action.type) {
        case C.JOB_APPLICATION_SUBMITTED:
            return { ...state, data: action.payload, sumitted: true };
        case C.JOB_APPLICATION_FILE_UPLOAD:
            return { ...state, file: { name: action.payload.name, size: action.payload.size, type: action.payload.type} }
        default:
            return state;
    }
}
