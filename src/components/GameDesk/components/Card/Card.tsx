import React from "react";
import { useActions } from "../../../../hooks/useActions";
import { ICard } from "../../../../types/GameDeskTypes";
import * as classes from "./Card.module.scss";
import SVGReact from "./react.svg";
interface IC {
    card: ICard;
}
const Card: React.FC<IC> = (props) => {
    const { CheckChosenCardCreator } = useActions();
    return (
        <div
            onClick={() => CheckChosenCardCreator(props.card)}
            className={classes.card}
            style={{
                visibility: props.card.completed ? "hidden" : "visible",
                backgroundColor: props.card.chosen
                    ? props.card.backColor
                    : props.card.frontColor,
            }}
        >
            <img
                style={{ visibility: props.card.chosen ? "hidden" : "visible" }}
                src={SVGReact}
                alt="react"
            />
        </div>
    );
};
export default Card;
