import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import jobs from './listings';
import selectedJob from './job';

export default history => combineReducers({
    router: connectRouter(history),
    form,
    jobs,
    selectedJob
});
