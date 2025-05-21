import { useAppSelector } from "@/store/hooks"
import { ChessPiece } from "@/models/models"
import { playerUseCases } from "@/useCases/gateway.useCases"

const useSquaresPreview = () => {

    //Store values
    const previewedSquares = useAppSelector((state) => state.previewedSquares.previewedSquares);

    //list all previewed square (in green)
    const getAllPreviewedSquares = async (index: number, chessPiece: ChessPiece) => {
        playerUseCases.previewedSquares(index, chessPiece);
    }

    const clearPreview = () => {
        playerUseCases.updateTheChessboardPreview(null)
    }

    return {
        previewedSquares,
        getAllPreviewedSquares,
        clearPreview,
    };
}

export default useSquaresPreview