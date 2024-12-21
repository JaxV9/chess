"use client";
import { Piece } from "../piece/piece";
import { ChessPiece, data, DataChessType } from "@/data/chess";
import { PieceRole } from "@/constants/constants";
import { useEffect, useState } from "react";


type SquarePropsType = {
    indexProps: number,
}

export const Square = ({ indexProps }: SquarePropsType) => {

    const allPieces: DataChessType = data;
    const [currentPiece, setCurrentPiece] = useState<string | null>(null)

    const colorManager = (element: number) => {
        let theme: string = '';
        const currentLine: number = Number.isInteger(element / 8) ? element / 8 - 1 : Math.floor(element / 8);
        const pairLine: boolean = currentLine % 2 == 0

        if (pairLine && element % 2 !== 0) {
            theme = "clear"
        }
        if (pairLine && element % 2 == 0) {
            theme = "dark"
        }
        if (!pairLine && element % 2 !== 0) {
            theme = "dark"
        }
        if (!pairLine && element % 2 == 0) {
            theme = "clear"
        }
        return 'square ' + theme;
    }

    useEffect(() => {
        Object.values(PieceRole).map((piece) => {
            const currentPiece = allPieces[piece];
            currentPiece.map((element: ChessPiece) => {
                if(element.pos === indexProps) {
                    setCurrentPiece(piece)
                }
            });
        })
    },[allPieces, indexProps])

    useEffect(() => {
        console.log(currentPiece)
    },[currentPiece])

    return (
        <>
            <div className={colorManager(indexProps)}>
                {currentPiece ?
                    <Piece role={currentPiece} />
                    : null
                }
            </div>
        </>
    )
}