"use client";
import { Square } from "../square/square";
import { ChessboardInfos } from "../chessboardInfos/chessboardInfos";


export const Chessboard = () => {

    const square = Array.from({ length: 64 }, (_, i) => i + 1);

    const posPiecesInit: object = {
        pawn_black : [9,10,11,12,13,14,15,16],
        pawn_white : [49,50,51,52,53,54,55,56],
        bishop_black : [3,6],
        bishop_white : [59,62],
        king_black : [5],
        king_white : [61],
        queen_black : [4],
        queen_white : [60],
        knight_black : [2,7],
        knight_white : [58,63],
        rook_black : [1,8],
        rook_white : [57,64]
    }

    const findKey = (numberToFind: number) => 
        Object.entries(posPiecesInit).find(([,positions]) => positions.includes(numberToFind))?.[0] || null;

    return (
        <>
            <section className="chessboard-container">
                <div className="chessboard-body">
                    <div className="chessboard-content">
                        {
                            square.map((element, index) => (
                                <Square key={index} elementProps={element} piece={findKey(element)}/>
                            ))
                        }
                    </div>
                    <ChessboardInfos />
                </div>
            </section>
        </>
    )
}