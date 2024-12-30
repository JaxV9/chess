"use client";
import { Piece } from "../piece/piece";
import { ChessPiece } from "@/data/chess";
import useCurrentPiece from "@/hooks/useCurrentPiece";
import useSquarePreviewState from "@/hooks/useSquarePreviewState";
import { useEffect } from "react";

type SquarePropsType = {
    indexProps: number,
    allPiecesProps: ChessPiece[],
    getAllPreviewedSquaresProps: (index: number, chessPiece: ChessPiece) => void,
    clearPreviewProps: () => void,
    previewedSquareProps: number[] | null,
    colorManagerProps: (index: number, isPreviewed: boolean, isConflictPreview: boolean) => string,
    moveProps: (squareIndex: number, currentPiece: ChessPiece | null) => void,
    moveIsValidProps: boolean | null,
    moveStopProps: () => void
}

export const Square = ({ indexProps, allPiecesProps,
    getAllPreviewedSquaresProps, clearPreviewProps, previewedSquareProps, colorManagerProps,
    moveProps, moveIsValidProps, moveStopProps }: SquarePropsType) => {

    const { currentPiece } = useCurrentPiece(allPiecesProps, indexProps)

    const { isPreviewed, isConflictPreview, preview, samePiece, clearStates } = useSquarePreviewState(
        indexProps,
        currentPiece,
        previewedSquareProps,
        getAllPreviewedSquaresProps,
    )

    const chessMove = async () => {
        if (currentPiece) {
            moveProps(indexProps, currentPiece)
            preview()
        } else {
            moveProps(indexProps, currentPiece)
        }
    }

    useEffect(() => {
        if (moveIsValidProps === true) {
            clearPreviewProps()
        }
    }, [moveIsValidProps, clearPreviewProps])

    useEffect(() => {
        if(samePiece === true){
            clearStates()
            clearPreviewProps()
            moveStopProps()
        }
    },[samePiece, clearPreviewProps, clearStates, moveStopProps])

    return (
        <>
            <div onClick={chessMove}
                className={colorManagerProps(indexProps, isPreviewed, isConflictPreview)}>
                {currentPiece ?
                    <div className="chess-piece-container">
                        <Piece currentPieceProps={currentPiece} />
                    </div>
                    : null
                }
            </div>
        </>
    )
}