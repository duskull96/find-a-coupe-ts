import { all } from "@redux-saga/core/effects";
import { GameDeskWatcher } from "./GameDeskSaga";

export function* rootWatcher() {
    yield all([GameDeskWatcher()]);
}
