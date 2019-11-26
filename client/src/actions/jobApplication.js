import * as C from '../constants/types';

const submitApplicationForm = (dispatch, values) => {
    dispatch({
        payload: values,
        type: C.JOB_APPLICATION_SUBMITTED
    });
}

export const saveFileDetails = (dispatch, fileData) => {
    dispatch({
        payload: fileData,
        type: C.JOB_APPLICATION_FILE_UPLOAD
    })
}

export default submitApplicationForm;