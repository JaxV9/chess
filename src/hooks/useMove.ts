import { PieceRole } from "@/constants/constants";
import { BishopDomain } from "@/domain/pieces/bishop";
import { KingDomain } from "@/domain/pieces/king";
import { KnightDomain } from "@/domain/pieces/knight";
import { PawnDomain } from "@/domain/pieces/pawn";
import { QueenDomain } from "@/domain/pieces/queen";
import { RookDomain } from "@/domain/pieces/rook";
import { useEffect, useRef, useState } from "react";
import { ChessPiece } from "@/models/models";
import { playerUseCases } from "@/useCases/gateway.useCases";


const useMove = () => {

    //domain
    const pawnDomain = useRef(new PawnDomain());
    const knightDomain = useRef(new KnightDomain());
    const rookDomain = useRef(new RookDomain());
    const bishopDomain = useRef(new BishopDomain());
    const queenDomain = useRef(new QueenDomain());
    const kingDomain = useRef(new KingDomain());
    
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
                    return setMoveIsValid(pawnDomain.current.checkMove(nextPos, currentPiece))
                case PieceRole.knight_black:
                case PieceRole.knight_white:
                    return setMoveIsValid(knightDomain.current.checkMove(nextPos, currentPiece))
                case PieceRole.rook_black:
                case PieceRole.rook_white:
                    return setMoveIsValid(rookDomain.current.checkMove(nextPos, currentPiece))
                case PieceRole.bishop_black:
                case PieceRole.bishop_white:
                    return setMoveIsValid(bishopDomain.current.checkMove(nextPos, currentPiece))
                case PieceRole.queen_black:
                case PieceRole.queen_white:
                    return setMoveIsValid(queenDomain.current.checkMove(nextPos, currentPiece))
                case PieceRole.king_black:
                case PieceRole.king_white:
                    return setMoveIsValid(kingDomain.current.checkMove(nextPos, currentPiece))
            }
        }
    },[
        nextPos, currentPiece,
        pawnDomain, knightDomain,
        rookDomain, bishopDomain,
        queenDomain, kingDomain
    ])


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
            playerUseCases.updateChessPosition(chessMod);
            setChessMod(null)
        }
    }, [chessMod, setChessMod])

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