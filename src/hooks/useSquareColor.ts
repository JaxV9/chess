import { ChessBoardDomain } from "@/domain/chessboard/chessboard";
import { useMemo } from "react";


const useSquareColor = () => {

    const chessBoardDomain = useMemo(() => new ChessBoardDomain(), []);

    //manage if the color is white or black
    const colorManager = (index: number) => {
        return chessBoardDomain.colorManager(index)
    }
    const previewManager = (index: number, isPreviewed: boolean, isConflictPreview: boolean) => {
        return chessBoardDomain.previewManager(index, isPreviewed, isConflictPreview)
    }

    return {
        colorManager,
        previewManager
    };
}

export default useSquareColor