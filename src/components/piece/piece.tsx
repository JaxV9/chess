"use client";
import { ChessPiece } from "@/data/chess";
import useCurrentImagePiece from "@/hooks/useCurrentImagePiece";

type PiecePropsType = {
    currentPieceProps: ChessPiece,
}

export const Piece = ({ currentPieceProps }: PiecePropsType) => {

    const { getCurrentRole } = useCurrentImagePiece(currentPieceProps)

    return (
        <>
            {
                getCurrentRole() !== null ?
                    <div className="piece" style={{ backgroundImage: `url(${getCurrentRole()})` }}></div>
                    :
                    null
            }
        </>
    )
}