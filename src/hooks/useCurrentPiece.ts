import { ChessPiece } from "@/data/chess";
import { useEffect, useState } from "react";


const useCurrentPiece = (allPieces: ChessPiece[], index: number) => {

    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)

    useEffect(() => {
        const pieceOfTheSquare: ChessPiece | undefined = allPieces.find(element => element.pos === index)
        if (pieceOfTheSquare) {
            setCurrentPiece(pieceOfTheSquare)
        }
        else {
            setCurrentPiece(null)
        }
    }, [allPieces, index])

    return {
        currentPiece,
        setCurrentPiece
    };
}

export default useCurrentPiece