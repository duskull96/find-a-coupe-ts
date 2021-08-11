export interface IGameState {
    status: string;
    gameDesk: any[];
}

export interface IGameAction {
    type: string;
    payload: any;
}

export enum GameActionsType {
    NEW_GAME = "NEW_GAME",
    CHOOSE_CARD = "CHOOSE_CARD",
    CHECK_CHOSEN_CARD = "CHECK_CHOSEN_CARD",
    CHOSEN_CARD_WRONG = "CHOSEN_CARD_WRONG",
    CHOSEN_CARD_RIGHT = "CHOSEN_CARD_RIGHT",
    END_GAME = "END_GAME",
}

export interface INewGameAction {
    type: GameActionsType.NEW_GAME;
    payload: any[];
}

export interface IChooseCardAction {
    type: GameActionsType.CHOOSE_CARD;
    payload: ICard[];
}

export interface ICheckChosenCardAction {
    type: GameActionsType.CHECK_CHOSEN_CARD;
    payload: ICard;
}

export interface IChosenCardRightAction {
    type: GameActionsType.CHOSEN_CARD_RIGHT;
    payload: ICard[];
}

export interface IChosenCardWrongAction {
    type: GameActionsType.CHOSEN_CARD_WRONG;
    payload: ICard[];
}

export interface IEndGameAction {
    type: GameActionsType.END_GAME;
    payload: any[];
}

export interface ICard {
    id: number;
    frontColor: string;
    backColor: string;
    chosen: boolean;
    completed: boolean;
}
