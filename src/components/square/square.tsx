"use client";
import { useEffect, useState } from "react";
import { Piece } from "../piece/piece";
import { ChessPiece } from "@/data/chess";

type SquarePropsType = {
    indexProps: number,
    allPiecesProps: ChessPiece[],
    getAllPreviewedSquaresProps: (index: number, chessPiece: ChessPiece) => void,
    clearPreviewProps: () => void,
    previewedSquareProps: number[] | null,
    colorManagerProps: (index: number, isPreviewed: boolean, isConflictPreview: boolean) => string,
    chessMoveProps: (squareIndex: number, currentPiece: ChessPiece | null) => void,
}

export const Square = ({ indexProps, allPiecesProps,
    getAllPreviewedSquaresProps, clearPreviewProps, previewedSquareProps, colorManagerProps,
    chessMoveProps }: SquarePropsType) => {

    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)
    const [isPreviewed, setIsPreviewed] = useState<boolean>(false)
    const [isConflictPreview, setIsConflictPreview] = useState<boolean>(false)

    const chessMove = async () => {
        if(currentPiece){
            chessMoveProps(indexProps, currentPiece)
        }else {
            chessMoveProps(indexProps, null)
        }
    }

    const preview = () => {
        if(currentPiece){
            getAllPreviewedSquaresProps(indexProps, currentPiece);
        }
    }

    useEffect(() => {
        const pieceOfTheSquare: ChessPiece | undefined = allPiecesProps.find(element => element.pos === indexProps)
        if (pieceOfTheSquare) {
            setCurrentPiece(pieceOfTheSquare)
        }
        else {
            setCurrentPiece(null)
        }
    }, [allPiecesProps, indexProps])

    useEffect(() => {
        const previews = previewedSquareProps?.find(element => element === indexProps)
            if(previews && !currentPiece?.role){
                setIsPreviewed(true)
                setIsConflictPreview(false)
            } else if(previews && currentPiece?.role){
                setIsPreviewed(true)
                setIsConflictPreview(true)
            } else if(!previews){
                setIsPreviewed(false)
            }
        if(previewedSquareProps === null){
            setIsPreviewed(false)
        }
    },[previewedSquareProps, indexProps, currentPiece])

    return (
        <>
            <div onMouseEnter={preview} onMouseLeave={clearPreviewProps} onClick={chessMove}
                className={colorManagerProps(indexProps, isPreviewed, isConflictPreview)}>
                {currentPiece ?
                    <Piece currentPieceProps={currentPiece} />
                    : null
                }
            </div>
        </>
    )
}