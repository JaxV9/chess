"use client";
import { Piece } from "../piece/piece";
import { ChessPiece } from "@/data/chess";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PawnDomain } from "@/domain/pieces/pawn";

type SquarePropsType = {
    indexProps: number,
    allPiecesProps: ChessPiece[],
    setAllPiecesProps: Dispatch<SetStateAction<ChessPiece[]>>,
    getPreviewedSquareProps: (index: number, color: string) => void,
    clearPreviewProps: () => void,
    previewedSquareProps: number[] | null,
    colorManagerProps: (index: number, isPreviewed: boolean, isConflictPreview: boolean) => string
}

export const Square = ({ indexProps, allPiecesProps, setAllPiecesProps,
    getPreviewedSquareProps, clearPreviewProps, previewedSquareProps, colorManagerProps }: SquarePropsType) => {

    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)
    const [isPreviewed, setIsPreviewed] = useState<boolean>(false)
    const [isConflictPreview, setIsConflictPreview] = useState<boolean>(false)

    const moveForward = async () => {
        if (!currentPiece) {
            return null
        }
        const nextPos = PawnDomain.forward(currentPiece.pos, currentPiece.color)
        if (!nextPos) {
            return null
        }

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
            getPreviewedSquareProps(indexProps, currentPiece.color);
        }
    }
    const clearPreview = () => {
        clearPreviewProps()
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
        previewedSquareProps?.map(element => {
            if(element === indexProps && !currentPiece?.role){
                setIsPreviewed(true)
                setIsConflictPreview(false)
            } else if(element === indexProps && currentPiece?.role){
                setIsPreviewed(true)
                setIsConflictPreview(true)
            } else if(element !== indexProps){
                setIsPreviewed(false)
            }
        })
        if(previewedSquareProps === null){
            setIsPreviewed(false)
        }
    },[previewedSquareProps, indexProps, currentPiece])

    return (
        <>
            <div onMouseEnter={preview} onMouseLeave={clearPreview}
            onClick={moveForward} className={colorManagerProps(indexProps, isPreviewed, isConflictPreview)}>
                {currentPiece ?
                    <Piece currentPieceProps={currentPiece} />
                    : null
                }
            </div>
        </>
    )
}