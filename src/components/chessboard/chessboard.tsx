"use client";
import { data, ChessPiece } from "@/data/chess";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";
import { useState } from "react";
import { ChessBoardDomain } from "@/domain/chessboard/chessboard";
import useSquarePreview from "@/hooks/useSquarePreview";


export const Chessboard = () => {

    const { previewedSquare,  getAllPreviewedSquares, clearPreview } = useSquarePreview();

    const square = Array.from({ length: 64 }, (_, i) => i + 1);
    const [allPieces, setAllPieces] = useState<ChessPiece[]>(data);


    const colorManager = (index: number, isPreviewed: boolean, isConflictPreview: boolean) => {
        return ChessBoardDomain.colorManager(index, isPreviewed, isConflictPreview)
    }

    return (
        <>
            <section className="chessboard-container">
                <div className="chessboard-body">
                    <div className="chessboard-content">
                        {
                            square.map((element, index) => (
                                <Square key={index} indexProps={element} getAllPreviewedSquaresProps={getAllPreviewedSquares}
                                    previewedSquareProps={previewedSquare} clearPreviewProps={clearPreview}
                                    colorManagerProps={colorManager}
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