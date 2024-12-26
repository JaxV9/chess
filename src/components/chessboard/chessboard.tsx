"use client";
import { data, ChessPiece } from "@/data/chess";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";
import { useState } from "react";
import { PawnDomain } from "@/domain/pieces/pawn";


export const Chessboard = () => {

    const square = Array.from({ length: 64 }, (_, i) => i + 1);
    const [allPieces, setAllPieces] = useState<ChessPiece[]>(data);
    const [previewedSquare, setPreviewedSquare] = useState<number[] | null>(null)

    const getAllPreviewedSquares = async (index: number, color: string) => {
        setPreviewedSquare(PawnDomain.preview(index, color))
    }
    const clearPreview = () => {
        setPreviewedSquare(null)
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