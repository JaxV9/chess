"use client";
import { data, ChessPiece } from "@/data/chess";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";
import { useState } from "react";


export const Chessboard = () => {

    const square = Array.from({ length: 64 }, (_, i) => i + 1);
    const [allPieces, setAllPieces] = useState<ChessPiece[]>(data);

    return (
        <>
            <section className="chessboard-container">
                <div className="chessboard-body">
                    <div className="chessboard-content">
                        {
                            square.map((element, index) => (
                                <Square key={index} indexProps={element}
                                    allPiecesProps={allPieces} setAllPiecesProps={setAllPieces} />
                            ))
                        }
                    </div>
                    <ChessboardInfos />
                </div>
            </section>
        </>
    )
}