import { compose,applyMiddleware } from "redux";
import logger from "redux-logger";
import { createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const sagaMiddleware=createSagaMiddleware()
const persistConfig={
    key:'root',
    storage,
   
}
let middleware;
if(process.env.NODE_ENV==='development') middleware=[logger,sagaMiddleware]
else middleware=[sagaMiddleware]

const comoposeEnhacers=compose(applyMiddleware(...middleware))
const persistRootReducer=persistReducer(persistConfig,rootReducer)

export const store=createStore(persistRootReducer,undefined,comoposeEnhacers)
sagaMiddleware.run(rootSaga)
export const persistor=persistStore(store)