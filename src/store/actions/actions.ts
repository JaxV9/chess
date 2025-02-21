import { fetchChess } from "@/service/service";
import { useAppDispatch } from "../hooks";
import { loadChessPosition } from "../reducers/chessPiecesSlice";


export class Actions {

    dispatch = useAppDispatch();

    public getChess() {
        fetchChess()
            .then(chessPieces => {
                console.log(chessPieces)
                this.dispatch(loadChessPosition({ chessPieces }))
            })
            .catch(error => {
                console.error("Error fetching chess pieces:", error);
            });
    }
}