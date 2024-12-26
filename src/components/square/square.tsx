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


    const [currentPieceRole, setCurrentPieceRole] = useState<string | null>(null)
    const [currentPieceId, setCurrentPieceId] = useState<string | null>(null)

    useEffect(() => {
        const pieceOfTheSquare: ChessPiece | undefined = allPiecesProps.find(element => element.pos === indexProps)
        if(pieceOfTheSquare){
            setCurrentPieceRole(pieceOfTheSquare.role)
            setCurrentPieceId(pieceOfTheSquare.id)
        }
        else {
            setCurrentPieceRole(null)
            setCurrentPieceId(null)
        }
    },[allPiecesProps, indexProps])

    return (
        <>
            <div className={ChessBoardDomain.colorManager(indexProps)}>
                    {currentPieceRole ?
                        <Piece role={currentPieceRole} currentPosProps={indexProps}
                            allPiecesProps={allPiecesProps} setAllPiecesProps={setAllPiecesProps}
                            currentIdProps={currentPieceId} />
                        : null
                    }
            </div>
        </>
    )
}