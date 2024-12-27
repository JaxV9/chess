import { ChessPiece } from "@/data/chess";

export class KnightDomain {
    constructor() {}

    public preview(index: number, chessPiece: ChessPiece){
        if(chessPiece.color === "black" || chessPiece.color === "white"){
            return [index +16-1, index +16+1, index-16-1, index-16+1];
        } else {
            return null
        }

    }
}
