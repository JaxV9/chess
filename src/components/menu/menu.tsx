"use client";

import useGame from "@/hooks/useGame";
import { Game } from "@/models/models";


export const Menu = () => {

    const test = {
        id: "nrfoi",
        mode: "solo"
    } as Game

    const { newGame, gameInfo } = useGame();

    return (
        <>
            {
                gameInfo === null ?
                    <section className="menu-section">
                        <div className="menu-container">
                            <div>
                                <h2>New game</h2>
                                <button onClick={() => newGame(test)} className="menu-start-game-btn">Start</button>
                            </div>
                        </div>
                    </section>
                    : null
            }
        </>
    )
}