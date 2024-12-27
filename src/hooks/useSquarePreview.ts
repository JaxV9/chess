import { ChessPiece } from "@/data/chess"
import { PawnDomain } from "@/domain/pieces/pawn"
import { useMemo, useState } from "react"
import { PieceRole } from "@/constants/constants"
import { KnightDomain } from "@/domain/pieces/knight"

const useSquarePreview = () => {
    
    const pawnDomain = useMemo(() => new PawnDomain(), []);
    const knightDomain = new KnightDomain

    const [previewedSquare, setPreviewedSquare] = useState<number[] | null>(null)

    const getAllPreviewedSquares = async (index: number, chessPiece: ChessPiece) => {
        
        switch(chessPiece.role){
            case PieceRole.pawn_black:
            case PieceRole.pawn_white:
                return setPreviewedSquare(pawnDomain.preview(index, chessPiece))
            case PieceRole.knight_black:
            case PieceRole.knight_white:
                return setPreviewedSquare(knightDomain.preview(index, chessPiece))
        }
        
    }
    const clearPreview = () => {
        setPreviewedSquare(null)
    }

    return {
        previewedSquare,
        getAllPreviewedSquares,
        clearPreview,
    };
}

export default useSquarePreview