"use client";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";
import useSquaresPreview from "@/hooks/squares/useSquaresPreview";
import useMove from "@/hooks/player/useMove";


export const Chessboard = () => {

    //hooks
    const { previewedSquares, getAllPreviewedSquares, clearPreview } = useSquaresPreview();
    const { move, moveStop, moveIsValid } = useMove();
    const square = Array.from({ length: 64 }, (_, i) => i + 1);

    return (
        <>
            <section className="chessboard-container">
                <div className="chessboard-body">
                    <div className="chessboard-content">
                        {
                            square.map((element, index) => (
                                <Square
                                    key={index} indexProps={element}
                                    getAllPreviewedSquaresProps={getAllPreviewedSquares}
                                    previewedSquareProps={previewedSquares}
                                    clearPreviewProps={clearPreview}
                                    moveProps={move}
                                    moveStopProps={moveStop}
                                    moveIsValidProps={moveIsValid} />
                            ))
                        }
                    </div>
                    <ChessboardInfos />
                </div>
            </section>
        </>
    )
}