import { IChooseCardAction } from "./../../types/GameDeskTypes";
import {
    GameActionsType,
    ICard,
    ICheckChosenCardAction,
    IChosenCardRightAction,
    IChosenCardWrongAction,
    INewGameAction,
} from "../../types/GameDeskTypes";

export const newGameCreator = (payload: any): INewGameAction => {
    return {
        type: GameActionsType.NEW_GAME,
        payload,
    };
};
export const CheckChosenCardCreator = (
    payload: ICard
): ICheckChosenCardAction => {
    return {
        type: GameActionsType.CHECK_CHOSEN_CARD,
        payload,
    };
};
export const ChosenCardRightCreator = (
    payload: ICard[]
): IChosenCardRightAction => {
    return {
        type: GameActionsType.CHOSEN_CARD_RIGHT,
        payload,
    };
};
export const ChosenCardWrongCreator = (
    payload: ICard[]
): IChosenCardWrongAction => {
    return {
        type: GameActionsType.CHOSEN_CARD_WRONG,
        payload,
    };
};
export const ChooseCardCreator = (payload: ICard[]): IChooseCardAction => {
    return {
        type: GameActionsType.CHOOSE_CARD,
        payload,
    };
};
