import { useAppSelector } from "@/store/hooks"
import { ChessPiece } from "@/models/models"
import useUseCase from "./useUseCase";

const useSquaresPreview = () => {

    const { gatewayUseCase } = useUseCase();

    //Store values
    const previewedSquares = useAppSelector((state) => state.previewedSquares.previewedSquares);

    //list all previewed square (in green)
    const getAllPreviewedSquares = async (index: number, chessPiece: ChessPiece) => {
        gatewayUseCase.playerUseCases.previewedSquares(index, chessPiece);
    }

    const clearPreview = () => {
        gatewayUseCase.playerUseCases.updateTheChessboardPreview(null)
    }

    return {
        previewedSquares,
        getAllPreviewedSquares,
        clearPreview,
    };
}

export default useSquaresPreview