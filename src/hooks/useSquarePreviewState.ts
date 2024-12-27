import { ChessPiece } from "@/data/chess";
import { useEffect, useState } from "react";


const useSquarePreviewState = (
    index: number,
    currentPiece: ChessPiece | null,
    previewedSquare: number[] | null,
    getAllPreviewedSquares: (index: number, chessPiece: ChessPiece) => void

) => {

    const [isPreviewed, setIsPreviewed] = useState<boolean>(false)
    const [isConflictPreview, setIsConflictPreview] = useState<boolean>(false);

    const preview = () => {
        if (currentPiece) {
            getAllPreviewedSquares(index, currentPiece);
        }
    }

    useEffect(() => {
        const previews = previewedSquare?.find(element => element === index)
        if (previews && !currentPiece?.role) {
            setIsPreviewed(true)
            setIsConflictPreview(false)
        } else if (previews && currentPiece?.role) {
            setIsPreviewed(true)
            setIsConflictPreview(true)
        } else if (!previews) {
            setIsPreviewed(false)
        }
        if (previewedSquare === null) {
            setIsPreviewed(false)
        }
    }, [previewedSquare, index, currentPiece])

    return {
        isPreviewed,
        isConflictPreview,
        preview
    };
}

export default useSquarePreviewState