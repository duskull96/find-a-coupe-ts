import { GameReducer } from "./reducer/GameReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    game: GameReducer,
});
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof rootReducer>;

declare global {
    interface Window {
        store: any;
    }
}

window.store = store || {};
