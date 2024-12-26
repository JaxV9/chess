"use client";
import pawnBlack from "../../assets/pieces/pawn-black.svg";
import pawnWhite from "../../assets/pieces/pawn-white.svg";
import bishopBlack from "../../assets/pieces/bishop-black.svg"
import bishopWhite from "../../assets/pieces/bishop-white.svg";
import kingBlack from "../../assets/pieces/king-black.svg";
import kingWhite from "../../assets/pieces/king-white.svg";
import queenBlack from "../../assets/pieces/queen-black.svg";
import queenWhite from "../../assets/pieces/queen-white.svg";
import knightBlack from "../../assets/pieces/knight-black.svg";
import knightWhite from "../../assets/pieces/knight-white.svg";
import rookBlack from "../../assets/pieces/rook-black.svg";
import rookWhite from "../../assets/pieces/rook-white.svg"
import { Dispatch, SetStateAction } from "react";
import { ChessPiece } from "@/data/chess";
import { PawnBlackDomain } from "@/domain/pieces/pawn";

type PiecePropsType = {
    role: string | null,
    currentPosProps: number,
    allPiecesProps: ChessPiece[],
    currentIdProps: string | null,
    setAllPiecesProps: Dispatch<SetStateAction<ChessPiece[]>>,
}

export const Piece = ({ role, setAllPiecesProps, currentIdProps, currentPosProps }: PiecePropsType) => {

    const roles: Record<string, string> = {
        "pawn_black": pawnBlack.src,
        "pawn_white": pawnWhite.src,
        "bishop_black": bishopBlack.src,
        "bishop_white": bishopWhite.src,
        "king_black": kingBlack.src,
        "king_white": kingWhite.src,
        "queen_black": queenBlack.src,
        "queen_white": queenWhite.src,
        "knight_black": knightBlack.src,
        "knight_white": knightWhite.src,
        "rook_black": rookBlack.src,
        "rook_white": rookWhite.src
    }

    const getCurrentRole = () => {
        if (role === null) {
            return null
        }
        const imageSrc = roles[role];

        if (!imageSrc) {
            return null;
        }
        return imageSrc
    }

    const moveForward = async () => {

        setAllPiecesProps(prev =>
            prev.map(piece =>
                piece.id === currentIdProps ? { ...piece, pos: PawnBlackDomain.forwardBlack(currentPosProps) } : piece
            )
        )
    }


    return (
        <>
            {
                getCurrentRole() !== null ?
                    <div onClick={moveForward} className="piece" style={{ backgroundImage: `url(${getCurrentRole()})` }}></div>
                    :
                    null
            }
        </>
    )
}