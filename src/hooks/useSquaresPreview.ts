import { PawnDomain } from "@/domain/pieces/pawn"
import { useMemo } from "react"
import { PieceRole } from "@/constants/constants"
import { KnightDomain } from "@/domain/pieces/knight"
import { RookDomain } from "@/domain/pieces/rook"
import { BishopDomain } from "@/domain/pieces/bishop"
import { QueenDomain } from "@/domain/pieces/queen"
import { KingDomain } from "@/domain/pieces/king"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { updatePreviewedSquares } from "@/store/reducers/previewedSquaresSlice"
import { ChessPiece } from "@/models/models"

const useSquaresPreview = () => {
    
    const pawnDomain = useMemo(() => new PawnDomain(), []);
    const knightDomain = useMemo(() => new KnightDomain, []);
    const rookDomain = useMemo(() => new RookDomain, []);
    const bishopDomain = useMemo(() => new BishopDomain, []);
    const queenDomain = useMemo(() => new QueenDomain, []);
    const kingDomain = useMemo(() => new KingDomain, []);

    const previewedSquares = useAppSelector((state) => state.previewedSquares.previewedSquares);
    const dispatch = useAppDispatch();

    //list all previewed square (in green)
    const getAllPreviewedSquares = async (index: number, chessPiece: ChessPiece) => {
        switch(chessPiece.role){
            case PieceRole.pawn_black:
            case PieceRole.pawn_white:
                return dispatch(updatePreviewedSquares(pawnDomain.preview(index, chessPiece)));
            case PieceRole.knight_black:
            case PieceRole.knight_white:
                return dispatch(updatePreviewedSquares(knightDomain.preview(index, chessPiece)));
            case PieceRole.rook_black:
            case PieceRole.rook_white:
                return dispatch(updatePreviewedSquares(rookDomain.preview(index)));
            case PieceRole.bishop_black:
            case PieceRole.bishop_white:
                return dispatch(updatePreviewedSquares(bishopDomain.preview(index)));
            case PieceRole.queen_black:
            case PieceRole.queen_white:
                return dispatch(updatePreviewedSquares(queenDomain.preview(index)));
            case PieceRole.king_black:
            case PieceRole.king_white:
                return dispatch(updatePreviewedSquares(kingDomain.preview(index)));
        }
        
    }

    const clearPreview = () => {
        dispatch(updatePreviewedSquares(null))
    }

    return {
        previewedSquares,
        getAllPreviewedSquares,
        clearPreview,
    };
}

export default useSquaresPreview