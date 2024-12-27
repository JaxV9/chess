"use client";
import { Piece } from "../piece/piece";
import { ChessPiece } from "@/data/chess";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PawnDomain } from "@/domain/pieces/pawn";

type SquarePropsType = {
    indexProps: number,
    allPiecesProps: ChessPiece[],
    setAllPiecesProps: Dispatch<SetStateAction<ChessPiece[]>>,
    getAllPreviewedSquaresProps: (index: number, chessPiece: ChessPiece) => void,
    clearPreviewProps: () => void,
    previewedSquareProps: number[] | null,
    colorManagerProps: (index: number, isPreviewed: boolean, isConflictPreview: boolean) => string
}

export const Square = ({ indexProps, allPiecesProps, setAllPiecesProps,
    getAllPreviewedSquaresProps, clearPreviewProps, previewedSquareProps, colorManagerProps }: SquarePropsType) => {

    const pawnDomain = new PawnDomain;

    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)
    const [isPreviewed, setIsPreviewed] = useState<boolean>(false)
    const [isConflictPreview, setIsConflictPreview] = useState<boolean>(false)

    const moveForward = async () => {
        if (!currentPiece) {
            return null
        }
        const nextPos = pawnDomain.forward(currentPiece.pos, currentPiece.color)
        if (!nextPos) {
            return null
        }
        clearPreviewProps()
        setAllPiecesProps(prev =>
            prev.map(piece =>
                piece.id === currentPiece.id ?
                    { ...piece, pos: nextPos }
                    : piece
            )
        )
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
            <div onMouseEnter={preview} onMouseLeave={clearPreviewProps}
            onClick={moveForward} className={colorManagerProps(indexProps, isPreviewed, isConflictPreview)}>
                {currentPiece ?
                    <Piece currentPieceProps={currentPiece} />
                    : null
                }
            </div>
        </>
    )
}