import APP_CONSTANTS from '../constants/appConstants';

const API_ENDPOINTS = {
    LISTINGS: (language) => `${APP_CONSTANTS.BASE_URL}/positions.json?description=${language}`,
    JOB_DETAILS: (id) => `${APP_CONSTANTS.BASE_URL}/positions/${id}.json`
}

export default API_ENDPOINTS;