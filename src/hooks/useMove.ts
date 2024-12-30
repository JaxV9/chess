import { PieceRole } from "@/constants/constants";
import { ChessPiece } from "@/data/chess";
import { KnightDomain } from "@/domain/pieces/knight";
import { PawnDomain } from "@/domain/pieces/pawn";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";


const useMove = (setAllPieces: Dispatch<SetStateAction<ChessPiece[]>>) => {

    const pawnDomain = useMemo(() => new PawnDomain(), []);
    const knightDomain = useMemo(() => new KnightDomain(), []);
    
    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)
    const [firstSquareTriggered, setFirstSquareTriggered] = useState<number | null>(null)
    const [secondSquareTriggered, setSecondSquareTriggered] = useState<number | null>(null)
    const [nextPos, setNextPos] = useState<number | null>(null)
    const [chessMod, setChessMod] = useState<ChessPiece | null>(null)
    const [moveIsValid, setMoveIsValid] = useState<boolean | null>(null)

    const moveStop = () => {
        setFirstSquareTriggered(null)
        setSecondSquareTriggered(null)
        setNextPos(null)
        setCurrentPiece(null)
        setChessMod(null)
        setMoveIsValid(null)
    }

    const choosePieceToMove = (squareIndex: number, piece: ChessPiece | null) => {
        setCurrentPiece(piece)
        setFirstSquareTriggered(squareIndex)
    }

    //Manage the click to choose the current piece and his next pos
    const move = async (squareIndex: number, piece: ChessPiece | null) => {
        if(piece !== null && currentPiece && piece.id !== currentPiece.id){
            moveStop()
            setCurrentPiece(piece)
            setFirstSquareTriggered(squareIndex)
        }
        if(!firstSquareTriggered && piece){
            return choosePieceToMove(squareIndex, piece)
        }
        if(firstSquareTriggered && !secondSquareTriggered && !piece){
            return setSecondSquareTriggered(squareIndex)
        }
    }

    //Check if the initial pos and the next pos are the same
    useEffect(() => {
        const egal = secondSquareTriggered == firstSquareTriggered
        if(secondSquareTriggered && firstSquareTriggered && egal){
            setFirstSquareTriggered(null)
            setSecondSquareTriggered(null)
            setCurrentPiece(null)
        }
        if(secondSquareTriggered && firstSquareTriggered && !egal){
            setNextPos(secondSquareTriggered)
            setSecondSquareTriggered(null)
        }
    },[secondSquareTriggered, firstSquareTriggered, currentPiece])

    //Check if the player move is valid
    useEffect(() => {
        if(nextPos && currentPiece){
            switch(currentPiece?.role){
                case PieceRole.pawn_black:
                case PieceRole.pawn_white:
                    return setMoveIsValid(pawnDomain.checkMove(nextPos, currentPiece))
                case PieceRole.knight_black:
                case PieceRole.knight_white:
                    return setMoveIsValid(knightDomain.checkMove(nextPos, currentPiece))
            }
        }
    },[nextPos, currentPiece, pawnDomain, knightDomain])


    //Modify the chess position
    useEffect(() => {
        if(nextPos && currentPiece && moveIsValid === true){
            setChessMod({
                id: currentPiece.id,
                role: currentPiece.role,
                color: currentPiece.color,
                pos: nextPos
            })
            setNextPos(null)
            setFirstSquareTriggered(null)
            setCurrentPiece(null)
            setMoveIsValid(null)
        }
        if(nextPos && currentPiece && moveIsValid === false){
            setNextPos(null)
            setSecondSquareTriggered(null)
            setMoveIsValid(null)
        }
    },[nextPos, currentPiece, moveIsValid, firstSquareTriggered])

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
    }, [chessMod, setChessMod, setAllPieces])

    return {
        move,
        nextPos,
        chessMod,
        setChessMod,
        moveIsValid,
        moveStop
    };
}

export default useMove