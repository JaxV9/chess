import { ChessPiece } from "@/data/service";
import { useEffect, useState } from "react";


const useSquarePreviewState = (
    index: number,
    currentPiece: ChessPiece | null,
    previewedSquare: number[] | null,
    getAllPreviewedSquares: (index: number, chessPiece: ChessPiece) => void,

) => {

    const [piecePreviewed, setPiecePreviewed] = useState<ChessPiece | null>(null)
    const [samePiece, setSamePiece] = useState<boolean>(false)
    const [isPreviewed, setIsPreviewed] = useState<boolean>(false)
    const [isConflictPreview, setIsConflictPreview] = useState<boolean>(false);

    const preview = async () => {
        if(currentPiece === piecePreviewed){
            setSamePiece(true)
        }
        if (currentPiece) {
            setPiecePreviewed(currentPiece)
            getAllPreviewedSquares(index, currentPiece);
        }
    }

    const clearStates = async () => {
        setSamePiece(false)
        setPiecePreviewed(null)
        setIsPreviewed(false)
        setIsConflictPreview(false)
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
        preview,
        samePiece,
        clearStates
    };
}

export default useSquarePreviewState