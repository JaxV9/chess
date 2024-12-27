import { PieceRole } from "@/constants/constants";
import { ChessPiece } from "@/data/chess";
import { KnightDomain } from "@/domain/pieces/knight";
import { PawnDomain } from "@/domain/pieces/pawn";
import { useEffect, useMemo, useState } from "react";


const useMove = () => {

    const pawnDomain = useMemo(() => new PawnDomain(), []);
    const knightDomain = useMemo(() => new KnightDomain(), []);
    
    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)
    const [firstSquareTriggered, setFirstSquareTriggered] = useState<number | null>(null)
    const [secondSquareTriggered, setSecondSquareTriggered] = useState<number | null>(null)
    const [nextPos, setNextPos] = useState<number | null>(null)
    const [chessMod, setChessMod] = useState<ChessPiece | null>(null)
    const [moveIsValid, setMoveIsValid] = useState<boolean | null>(null)

    //Manage the click to choose the currentpiece and his next pos
    const move = (squareIndex: number, piece: ChessPiece | null) => {

        if(!firstSquareTriggered && piece){
            setCurrentPiece(piece)
            return setFirstSquareTriggered(squareIndex)
        }
        if(firstSquareTriggered == secondSquareTriggered && !piece){
            setSecondSquareTriggered(null)
            return setSecondSquareTriggered(null)
        }
        if(firstSquareTriggered && !secondSquareTriggered && !piece){
            return setSecondSquareTriggered(squareIndex)
        }
    }

    //Check if the initial pos and the next pos are clicked
    useEffect(() => {
        const egal = secondSquareTriggered == firstSquareTriggered
        if(secondSquareTriggered && firstSquareTriggered && egal){
            setFirstSquareTriggered(null)
            setSecondSquareTriggered(null)
            setCurrentPiece(null)
        }
        if(secondSquareTriggered && firstSquareTriggered && !egal){
            setNextPos(secondSquareTriggered)
            setFirstSquareTriggered(null)
            setSecondSquareTriggered(null)
        }
    },[secondSquareTriggered, firstSquareTriggered])

    //Check if the player move is valid
    useEffect(() => {
        if(nextPos && currentPiece){
            switch(currentPiece?.role){
                case PieceRole.pawn_black:
                case PieceRole.pawn_white:
                    setMoveIsValid(pawnDomain.checkMove(nextPos, currentPiece))
                case PieceRole.knight_black:
                case PieceRole.knight_white:
                    setMoveIsValid(knightDomain.checkMove(nextPos, currentPiece))
            }
            // console.log(nextPos)
        }
    },[nextPos, currentPiece, pawnDomain, knightDomain])


    //Mod the chess position
    useEffect(() => {
        if(nextPos && currentPiece && moveIsValid === true){
            setChessMod({
                id: currentPiece.id,
                role: currentPiece.role,
                color: currentPiece.color,
                pos: nextPos
            })
            setNextPos(null)
            setCurrentPiece(null)
            setMoveIsValid(null)
        }
    },[nextPos, currentPiece, moveIsValid])

    return {
        move,
        nextPos,
        chessMod,
        setChessMod
    };
}

export default useMove