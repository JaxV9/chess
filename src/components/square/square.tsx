"use client";
import { Piece } from "../piece/piece";
import { ChessPiece } from "@/models/models";
import useCurrentPiece from "@/hooks/pieces/useCurrentPiece";
import useSquareColor from "@/hooks/squares/useSquareColor";
import useSquarePreviewState from "@/hooks/squares/useSquarePreviewState";
import { useEffect } from "react";
import "./style.css";

type SquarePropsType = {
    indexProps: number,
    getAllPreviewedSquaresProps: (index: number, chessPiece: ChessPiece) => void,
    clearPreviewProps: () => void,
    previewedSquareProps: number[] | null,
    moveProps: (squareIndex: number, currentPiece: ChessPiece | null) => void,
    moveIsValidProps: boolean | undefined,
    moveStopProps: () => void
}

export const Square = ({ indexProps,
    getAllPreviewedSquaresProps, clearPreviewProps, previewedSquareProps,
    moveProps, moveIsValidProps, moveStopProps }: SquarePropsType) => {

    const { currentPiece } = useCurrentPiece(indexProps)
    const { colorManager, previewManager } = useSquareColor();

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
        if (samePiece === true) {
            clearStates()
            clearPreviewProps()
            moveStopProps()
        }
    }, [samePiece, clearPreviewProps, clearStates, moveStopProps])

    return (
        <>
            <div onClick={chessMove} className={colorManager(indexProps)}>
                {currentPiece ?
                    <div className="chess-piece-container">
                        <Piece currentPieceProps={currentPiece} />
                    </div>
                    : null
                }
                <div className={previewManager(indexProps, isPreviewed, isConflictPreview)}>
                </div>
            </div>
        </>
    )
}