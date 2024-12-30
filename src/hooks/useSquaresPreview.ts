import { ChessPiece } from "@/data/chess"
import { PawnDomain } from "@/domain/pieces/pawn"
import { useMemo, useState } from "react"
import { PieceRole } from "@/constants/constants"
import { KnightDomain } from "@/domain/pieces/knight"
import { RookDomain } from "@/domain/pieces/rook"

const useSquaresPreview = () => {
    
    const pawnDomain = useMemo(() => new PawnDomain(), []);
    const knightDomain = useMemo(() => new KnightDomain, []);
    const rookDomain = useMemo(() => new RookDomain, []);

    const [previewedSquare, setPreviewedSquare] = useState<number[] | null>(null)

    //list all previewed square (in green)
    const getAllPreviewedSquares = async (index: number, chessPiece: ChessPiece) => {
        switch(chessPiece.role){
            case PieceRole.pawn_black:
            case PieceRole.pawn_white:
                return setPreviewedSquare(pawnDomain.preview(index, chessPiece));
            case PieceRole.knight_black:
            case PieceRole.knight_white:
                return setPreviewedSquare(knightDomain.preview(index, chessPiece));
            case PieceRole.rook_black:
            case PieceRole.rook_white:
                return setPreviewedSquare(rookDomain.preview(index));
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

export default useSquaresPreview