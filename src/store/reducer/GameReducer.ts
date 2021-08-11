import {
    GameActionsType,
    ICard,
    IGameAction,
    IGameState,
} from "../../types/GameDeskTypes";

const initialState: IGameState = {
    status: "",
    gameDesk: [],
};

export const GameReducer = (
    state = initialState,
    action: IGameAction
): IGameState => {
    switch (action.type) {
        case GameActionsType.NEW_GAME:
            console.log(action.payload);
            const colors = [
                "#0400e0",
                "#e000d1",
                "#e00000",
                "#0096e0",
                "#00e0d1",
                "#00e043",
                "#e0e000",
                "#e08700",
                "#005c03",
                "#4b005c",
                "#610000",
                "#613400",
            ];
            if (action.payload.height >= 900) {
                let gameDesk: any[] = [];
                for (let k = 0; k < 6; k++) {
                    for (let i = 0; i < 12; i++) {
                        gameDesk[Math.floor(Math.random() * 10e6)] = {
                            frontColor: "#0A1D37",
                            backColor: colors[i],
                            chosen: false,
                            completed: false,
                        };
                    }
                }
                let formatedGameDesk: any[] = [];
                let id = 0;
                gameDesk.forEach((card: ICard) => {
                    card.id = id++;
                    formatedGameDesk.push(card);
                });

                return { status: "GAME_STARTED", gameDesk: formatedGameDesk };
            } else {
                return { status: "GAME_STARTED", gameDesk: [] };
            }
        case GameActionsType.CHOOSE_CARD:
            return { status: "CHOOSE_CARD", gameDesk: action.payload };
        case GameActionsType.CHOSEN_CARD_RIGHT:
            return { status: "CHOSEN_CARD_RIGHT", gameDesk: action.payload };
        case GameActionsType.CHOSEN_CARD_WRONG:
            return { status: "CHOSEN_CARD_WRONG", gameDesk: action.payload };
        case GameActionsType.END_GAME:
            return { status: "GAME_ENDED", gameDesk: [action.payload] };
        default:
            return state;
    }
};
