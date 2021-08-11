import React from "react";
import { useActions } from "../../../../hooks/useActions";
import * as classes from "./Menu.module.scss";

const Menu: React.FC = () => {
    const { newGameCreator } = useActions();
    return (
        <>
            <div className={classes.container}>
                <div className={classes.header}>
                    <button
                        className={classes.button}
                        onClick={() =>
                            newGameCreator({
                                height: window.screen.height,
                                width: window.screen.width,
                            })
                        }
                    >
                        NEW GAME
                    </button>
                </div>
            </div>
        </>
    );
};

export default Menu;
