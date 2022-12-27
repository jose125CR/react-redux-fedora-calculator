import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { calculatorReducer, initialCalculatorState } from './reducers/reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(
    createStore
);

const configureStore = (initialState: any) => {
    return createStoreWithMiddleware(calculatorReducer, initialState);
};

export default configureStore(initialCalculatorState);