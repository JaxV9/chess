import { ChessPiece } from "@/data/chess";
import { useEffect, useState } from "react";


const useMove = () => {
    
    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)
    const [firstSquareTriggered, setFirstSquareTriggered] = useState<number | null>(null)
    const [secondSquareTriggered, setSecondSquareTriggered] = useState<number | null>(null)
    const [nextPos, setNextPos] = useState<number | null>(null)
    const [chessMod, setChessMod] = useState<ChessPiece | null>(null)

    const move = (squareIndex: number, currentPiece: ChessPiece | null) => {
        if(currentPiece){
            setCurrentPiece(currentPiece)
        }
        if(!firstSquareTriggered){
            return setFirstSquareTriggered(squareIndex)
        }
        if(firstSquareTriggered && !secondSquareTriggered){
            return setSecondSquareTriggered(squareIndex)
        }
    }

    useEffect(() => {
        if(secondSquareTriggered){
            setNextPos(secondSquareTriggered)
            setFirstSquareTriggered(null)
            setSecondSquareTriggered(null)
        }
    },[secondSquareTriggered])

    useEffect(() => {
        if(nextPos && currentPiece){
            setChessMod({
                id: currentPiece.id,
                role: currentPiece.role,
                color: currentPiece.color,
                pos: nextPos
            })
            setNextPos(null)
            setCurrentPiece(null)
        }
    },[nextPos, currentPiece])

    return {
        move,
        nextPos,
        chessMod,
        setChessMod
    };
}

export default useMove