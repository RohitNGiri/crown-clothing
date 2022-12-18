import { combineReducers } from "redux";
import { presistReducer } from 'redux-persist';
import directoryReducer from "./directory/directory.reducer";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer);