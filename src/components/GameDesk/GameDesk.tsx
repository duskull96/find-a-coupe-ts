import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Card from "./components/Card/Card";
import Menu from "./components/Menu/Menu";
import * as classes from "./GameDesk.module.scss";

const GameDesk: React.FC = () => {
    const { gameDesk } = useTypedSelector((state) => state.game);
    return (
        <div className={classes.container}>
            <div className={classes.desk}>
                {gameDesk.length ? (
                    gameDesk.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })
                ) : (
                    <Menu />
                )}
            </div>
        </div>
    );
};

export default GameDesk;
