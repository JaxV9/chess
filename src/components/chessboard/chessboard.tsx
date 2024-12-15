"use client";
import { useState } from "react";
import { Square } from "../square/square";
import { ChessboardInfos } from "../chessboardInfos/chessboardInfos";


export const Chessboard = () => {

    const [square, setSquare] = useState<number[]>(
        Array.from({ length: 64 }, (_, i) => i + 1)
    );

    return (
        <>
            <section className="chessboard-container">
                <div className="chessboard-body">
                    <div className="chessboard-content">
                        {
                            square.map((element, index) => (
                                <Square key={index} elementProps={element}/>
                            ))
                        }
                    </div>
                    <ChessboardInfos />
                </div>
            </section>
        </>
    )
}