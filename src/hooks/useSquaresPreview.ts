import { PawnDomain } from "@/domain/pieces/pawn"
import { useRef } from "react"
import { PieceRole } from "@/constants/constants"
import { KnightDomain } from "@/domain/pieces/knight"
import { RookDomain } from "@/domain/pieces/rook"
import { BishopDomain } from "@/domain/pieces/bishop"
import { QueenDomain } from "@/domain/pieces/queen"
import { KingDomain } from "@/domain/pieces/king"
import { useAppSelector } from "@/store/hooks"
import { ChessPiece } from "@/models/models"
import { playerUseCases } from "@/useCases/gateway.useCases"

const useSquaresPreview = () => {

    //Domain
    const pawnDomain = useRef(new PawnDomain());
    const knightDomain = useRef(new KnightDomain);
    const rookDomain = useRef(new RookDomain);
    const bishopDomain = useRef(new BishopDomain);
    const queenDomain = useRef(new QueenDomain);
    const kingDomain = useRef(new KingDomain);

    //Store values
    const previewedSquares = useAppSelector((state) => state.previewedSquares.previewedSquares);

    //list all previewed square (in green)
    const getAllPreviewedSquares = async (index: number, chessPiece: ChessPiece) => {
        switch (chessPiece.role) {
            case PieceRole.pawn_black:
            case PieceRole.pawn_white:
                return playerUseCases.displayTheChessboardPreview(pawnDomain.current.preview(index, chessPiece))
            case PieceRole.knight_black:
            case PieceRole.knight_white:
                return playerUseCases.displayTheChessboardPreview(knightDomain.current.preview(index, chessPiece));
            case PieceRole.rook_black:
            case PieceRole.rook_white:
                return playerUseCases.displayTheChessboardPreview(rookDomain.current.preview(index));
            case PieceRole.bishop_black:
            case PieceRole.bishop_white:
                return playerUseCases.displayTheChessboardPreview(bishopDomain.current.preview(index));
            case PieceRole.queen_black:
            case PieceRole.queen_white:
                return playerUseCases.displayTheChessboardPreview(queenDomain.current.preview(index));
            case PieceRole.king_black:
            case PieceRole.king_white:
                return playerUseCases.displayTheChessboardPreview(kingDomain.current.preview(index));
        }

    }

    const clearPreview = () => {
        playerUseCases.displayTheChessboardPreview(null)
    }

    return {
        previewedSquares,
        getAllPreviewedSquares,
        clearPreview,
    };
}

export default useSquaresPreview