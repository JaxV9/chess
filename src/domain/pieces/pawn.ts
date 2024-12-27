import { ChessPiece } from "@/data/chess";

export class PawnDomain {
    constructor() {}

    public forward(index: number, color: string) {
        if(color === "black"){
            return index +8;
        }
        if(color === "white"){
            return index -8;
        }
    }

    public preview(index: number, chessPiece: ChessPiece){
        if(chessPiece.color === "black"){
            return [index +8];
        }else if(chessPiece.color === "white"){
            return [index -8];
        } else {
            return null
        }

    }
}
