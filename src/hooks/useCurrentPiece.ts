import { ChessPiece } from "@/data/chess";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";


const useCurrentPiece = (index: number) => {

    const pieces = useAppSelector((state) => state.chessPieces.pieces);

    const [currentPiece, setCurrentPiece] = useState<ChessPiece | null>(null)

    useEffect(() => {
        const pieceOfTheSquare: ChessPiece | undefined = pieces.find(element => element.pos === index)
        if (pieceOfTheSquare) {
            setCurrentPiece(pieceOfTheSquare)
        }
        else {
            setCurrentPiece(null)
        }
    }, [index, pieces])

    return {
        currentPiece
    };
}

export default useCurrentPiece