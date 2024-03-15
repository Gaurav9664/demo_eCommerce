import persistReducer from "redux-persist/es/persistReducer"
import { rootReducer } from "./reducer"
import { thunk } from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import { applyMiddleware, createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleweres = [thunk]

const configureStors = () => {
    let store = createStore(persistedReducer, applyMiddleware(...middleweres))

    return store;
}

export let store = configureStors()
export let persistor = persistStore(store)