"use client";
import { Piece } from "../piece/piece";
import { ChessPiece } from "@/data/chess";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ChessBoardDomain } from "@/domain/chessboard/chessboard";

type SquarePropsType = {
    indexProps: number,
    allPiecesProps: ChessPiece[],
    setAllPiecesProps: Dispatch<SetStateAction<ChessPiece[]>>
}

export const Square = ({ indexProps, allPiecesProps, setAllPiecesProps }: SquarePropsType) => {

    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)

    useEffect(() => {
        const pieceOfTheSquare: ChessPiece | undefined = allPiecesProps.find(element => element.pos === indexProps)
        if(pieceOfTheSquare){
            setCurrentPiece(pieceOfTheSquare)
        }
        else {
            setCurrentPiece(null)
        }
    },[allPiecesProps, indexProps])

    return (
        <>
            <div className={ChessBoardDomain.colorManager(indexProps)}>
                    {currentPiece ?
                        <Piece currentPieceProps={currentPiece} setAllPiecesProps={setAllPiecesProps} />
                        : null
                    }
            </div>
        </>
    )
}