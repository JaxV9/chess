"use client";
import { Square } from "../square/square";
import { ChessboardInfos } from "../ui/chessboardInfos/chessboardInfos";
import useSquaresPreview from "@/hooks/useSquaresPreview";
import useMove from "@/hooks/useMove";
import { useEffect, useRef } from "react";
import { Actions } from "@/store/actions/actions";


export const Chessboard = () => {

    //Store actions
    const actionsRef = useRef(new Actions());

    //hooks
    const { previewedSquares, getAllPreviewedSquares, clearPreview } = useSquaresPreview();
    const { move, moveStop, moveIsValid } = useMove();
    const square = Array.from({ length: 64 }, (_, i) => i + 1);

    useEffect(() => {
        actionsRef.current.getChess()
    }, [actionsRef])

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