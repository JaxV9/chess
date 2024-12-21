"use client";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";


export const Chessboard = () => {

    const square = Array.from({ length: 64 }, (_, i) => i + 1);

    return (
        <>
            <section className="chessboard-container">
                <div className="chessboard-body">
                    <div className="chessboard-content">
                        {
                            square.map((element, index) => (
                                <Square key={index} indexProps={element}/>
                            ))
                        }
                    </div>
                    <ChessboardInfos />
                </div>
            </section>
        </>
    )
}