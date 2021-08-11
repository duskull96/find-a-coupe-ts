import { select, takeEvery, put , delay} from "@redux-saga/core/effects";
import { GameActionsType, ICard, IGameAction } from "../../types/GameDeskTypes";
import {
    ChooseCardCreator,
    ChosenCardRightCreator,
    ChosenCardWrongCreator,
} from "../action-creators/game";
import { RootState } from "../index";

const gameDeskState = (state: RootState) => state.game.gameDesk;

// function compareCards(firstCard, secondCard) {}

function* GameDeskWorker(action: IGameAction): any {
    const gameDesk = yield select(gameDeskState);
    console.log(gameDesk, action.payload);
    let chosenCards: ICard[] = [];
    gameDesk.forEach((card: ICard) => {
        if (action.payload.id === card.id) {
            card.chosen = true;
        }
        if (card.chosen && !card.completed) {
            chosenCards.push(card);
        }
    });
    console.log(chosenCards);
    yield put(ChooseCardCreator(gameDesk));
    yield delay(500)
    if (chosenCards.length === 2) {
        if (chosenCards[0].backColor === chosenCards[1].backColor) {
            yield gameDesk.forEach((card: ICard) => {
                if (
                    card.id === chosenCards[0].id ||
                    card.id === chosenCards[1].id
                ) {
                    card.completed = true;
                }
            });
            chosenCards = [];
            yield put(ChosenCardRightCreator(gameDesk));
        } else {
            yield gameDesk.forEach((card: ICard) => {
                if (
                    card.id === chosenCards[0].id ||
                    card.id === chosenCards[1].id
                ) {
                    card.chosen = false;
                }
            });
            yield chosenCards = [];
            yield put(ChosenCardWrongCreator(gameDesk));
        }
    }
}

export function* GameDeskWatcher() {
    yield takeEvery(GameActionsType.CHECK_CHOSEN_CARD, GameDeskWorker);
}
