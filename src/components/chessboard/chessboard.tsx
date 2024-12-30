"use client";
import { data, ChessPiece } from "@/data/chess";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";
import { useState } from "react";
import useSquaresPreview from "@/hooks/useSquaresPreview";
import useMove from "@/hooks/useMove";
import useSquareColor from "@/hooks/useSquareColor";


export const Chessboard = () => {

    const { previewedSquare, getAllPreviewedSquares, clearPreview } = useSquaresPreview();

    const square = Array.from({ length: 64 }, (_, i) => i + 1);
    const [allPieces, setAllPieces] = useState<ChessPiece[]>(data);

    const { move, moveStop, moveIsValid } = useMove(setAllPieces);
    const { colorManager } = useSquareColor();

    return (
        <>
            <section className="chessboard-container">
                <div className="chessboard-body">
                    <div className="chessboard-content">
                        {
                            square.map((element, index) => (
                                <Square
                                    key={index} indexProps={element}
                                    getAllPreviewedSquaresProps={getAllPreviewedSquares}
                                    previewedSquareProps={previewedSquare}
                                    clearPreviewProps={clearPreview}
                                    colorManagerProps={colorManager}
                                    moveProps={move}
                                    moveStopProps={moveStop}
                                    moveIsValidProps={moveIsValid}
                                    allPiecesProps={allPieces} />
                            ))
                        }
                    </div>
                    <ChessboardInfos />
                </div>
            </section>
        </>
    )
}