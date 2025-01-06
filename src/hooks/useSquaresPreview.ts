import { ChessPiece } from "@/data/chess"
import { PawnDomain } from "@/domain/pieces/pawn"
import { useMemo, useState } from "react"
import { PieceRole } from "@/constants/constants"
import { KnightDomain } from "@/domain/pieces/knight"
import { RookDomain } from "@/domain/pieces/rook"
import { BishopDomain } from "@/domain/pieces/bishop"
import { QueenDomain } from "@/domain/pieces/queen"

const useSquaresPreview = () => {
    
    const pawnDomain = useMemo(() => new PawnDomain(), []);
    const knightDomain = useMemo(() => new KnightDomain, []);
    const rookDomain = useMemo(() => new RookDomain, []);
    const bishopDomain = useMemo(() => new BishopDomain, []);
    const queenDomain = useMemo(() => new QueenDomain, []);

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
            case PieceRole.bishop_black:
            case PieceRole.bishop_white:
                return setPreviewedSquare(bishopDomain.preview(index));
            case PieceRole.queen_black:
            case PieceRole.queen_white:
                return setPreviewedSquare(queenDomain.preview(index))
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