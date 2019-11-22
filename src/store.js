import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';

export const history = createBrowserHistory();

const middleware = applyMiddleware(routerMiddleware(history));

const enhancers = compose(
    middleware,
    process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
); // using redux chrome extentions in dev mode

/* eslint-disable no-underscore-dangle */
function createReduxStore(preloadedState) {
    const store = createStore(
        // preloadedState to pass intitial state in reducers
        rootReducer(history),
        preloadedState,
        enhancers,
    );
    return store;
}

  /* eslint-enable */
const store = createReduxStore();
export default store;
