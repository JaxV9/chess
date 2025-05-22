import { ChessBoardDomain } from "@/useCases/domain/chessboard/chessboard";
import { useRef } from "react";


const useSquareColor = () => {

    const chessBoardDomain = useRef(new ChessBoardDomain());

    //manage if the color is white or black
    const colorManager = (index: number) => {
        return chessBoardDomain.current.colorManager(index)
    }
    const previewManager = (index: number, isPreviewed: boolean, isConflictPreview: boolean) => {
        return chessBoardDomain.current.previewManager(index, isPreviewed, isConflictPreview)
    }

    return {
        colorManager,
        previewManager
    };
}

export default useSquareColor