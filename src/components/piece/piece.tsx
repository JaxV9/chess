"use client";
import useCurrentImagePiece from "@/hooks/useCurrentImagePiece";
import { ChessPiece } from "@/models/models";

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