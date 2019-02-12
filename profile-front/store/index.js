import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import index from '../reducers/index';
const CreateStore = applyMiddleware(thunk)(createStore);
export default CreateStore(index);
