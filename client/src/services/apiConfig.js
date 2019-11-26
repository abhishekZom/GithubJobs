const API_ENDPOINTS = {
    LISTINGS: (language) => `/api/listings?description=${language}`,
    JOB_DETAILS: (id) => `/api/listings/details?id=${id}`
}

export default API_ENDPOINTS;