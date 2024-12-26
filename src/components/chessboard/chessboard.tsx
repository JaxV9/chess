"use client";
import { data, ChessPiece } from "@/data/chess";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";
import { useState } from "react";
import { PawnDomain } from "@/domain/pieces/pawn";
import { ChessBoardDomain } from "@/domain/chessboard/chessboard";


export const Chessboard = () => {

    const square = Array.from({ length: 64 }, (_, i) => i + 1);
    const [allPieces, setAllPieces] = useState<ChessPiece[]>(data);
    const [previewedSquare, setPreviewedSquare] = useState<number[] | null>(null)

    const getAllPreviewedSquares = async (index: number, chessColor: string) => {
        setPreviewedSquare(PawnDomain.preview(index, chessColor))
    }
    const clearPreview = () => {
        setPreviewedSquare(null)
    }

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
                                <Square key={index} indexProps={element} getPreviewedSquareProps={getAllPreviewedSquares}
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