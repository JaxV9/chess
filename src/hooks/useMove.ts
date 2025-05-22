import { ChessPiece } from "@/models/models";
import useUseCase from "./useUseCase";
import { useEffect, useState } from "react";

const useMove = () => {

    const { gatewayUseCase } = useUseCase();
    
    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)
    const [firstSquareTriggered, setFirstSquareTriggered] = useState<number | null>(null)
    const [secondSquareTriggered, setSecondSquareTriggered] = useState<number | null>(null)
    const [nextPos, setNextPos] = useState<number | null>(null)
    const [chessMod, setChessMod] = useState<ChessPiece | null>(null)
    const [moveIsValid, setMoveIsValid] = useState<boolean | undefined>(undefined)

    const moveStop = () => {
        setFirstSquareTriggered(null)
        setSecondSquareTriggered(null)
        setNextPos(null)
        setCurrentPiece(null)
        setChessMod(null)
        setMoveIsValid(undefined)
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
            return setMoveIsValid(gatewayUseCase.gameEngineUseCases.checkIfMoveIsValide(currentPiece, nextPos))
        }
    },[nextPos, currentPiece])


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
            setMoveIsValid(undefined)
        }
        if(nextPos && currentPiece && moveIsValid === false){
            setNextPos(null)
            setSecondSquareTriggered(null)
            setMoveIsValid(undefined)
        }
    },[nextPos, currentPiece, moveIsValid, firstSquareTriggered])

    useEffect(() => {
        if (chessMod) {
            gatewayUseCase.playerUseCases.updateChessPosition(chessMod);
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