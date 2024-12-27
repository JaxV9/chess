"use client";
import { data, ChessPiece } from "@/data/chess";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";
import { useEffect, useState } from "react";
import { ChessBoardDomain } from "@/domain/chessboard/chessboard";
import useSquarePreview from "@/hooks/useSquarePreview";
import useMove from "@/hooks/useMove";


export const Chessboard = () => {

    const { previewedSquare, getAllPreviewedSquares, clearPreview } = useSquarePreview();
    const { move, chessMod, setChessMod } = useMove();

    const square = Array.from({ length: 64 }, (_, i) => i + 1);
    const [allPieces, setAllPieces] = useState<ChessPiece[]>(data);

    const colorManager = (index: number, isPreviewed: boolean, isConflictPreview: boolean) => {
        return ChessBoardDomain.colorManager(index, isPreviewed, isConflictPreview)
    }

    const chessMove = (squareIndex: number, currentPiece: ChessPiece | null) => {
        move(squareIndex, currentPiece)
    }

    useEffect(() => {
        if (chessMod) {
            setAllPieces(prev =>
                prev.map(piece =>
                    piece.id === chessMod.id ?
                        { ...piece, pos: chessMod.pos }
                        : piece
                )
            )
            setChessMod(null)
        }
    }, [chessMod, setChessMod])

    return (
        <>
            <section className="chessboard-container">
                <div className="chessboard-body">
                    <div className="chessboard-content">
                        {
                            square.map((element, index) => (
                                <Square key={index} indexProps={element} getAllPreviewedSquaresProps={getAllPreviewedSquares}
                                    previewedSquareProps={previewedSquare} clearPreviewProps={clearPreview}
                                    colorManagerProps={colorManager} chessMoveProps={chessMove}
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