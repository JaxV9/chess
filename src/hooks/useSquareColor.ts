import { ChessBoardDomain } from "@/domain/chessboard/chessboard";
import { useMemo } from "react";


const useSquareColor = () => {

    const chessBoardDomain = useMemo(() => new ChessBoardDomain(), []);

    //manage if the color is white or black
    const colorManager = (index: number, isPreviewed: boolean, isConflictPreview: boolean) => {
        return chessBoardDomain.colorManager(index, isPreviewed, isConflictPreview)
    }

    return {
        colorManager
    };
}

export default useSquareColor