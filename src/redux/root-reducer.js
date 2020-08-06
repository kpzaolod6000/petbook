import {combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';

//si quiero localStorage
import storage from 'redux-persist/lib/storage'
//si quiero sessionStorage revisar documentacion

import userReducer from './user/user.reducer';

//key es desde donde queremos guardar el state
//storage es lo que importamos
//whitelist es un array que contiene el nombre de los reducer que queremos guardar
//solo guardamos cart, porque de user se encargar firebase
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}

const rootReducer = combineReducers({
    user: userReducer
});

//persisteReducer le agrega la funcion de persistencia a nuestro rootReducer normal
export default persistReducer(persistConfig, rootReducer);