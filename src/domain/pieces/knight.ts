import { ChessPiece } from "@/data/chess";

export class KnightDomain {
    constructor() { }

    public checkMove(nextPos: number, chessPiece: ChessPiece) {
        switch (nextPos) {
            case chessPiece.pos + 16 - 1:
                if(nextPos %8 === 0){
                    console.log("invalid")
                    return false
                }
                return true
            case chessPiece.pos + 16 + 1:
                if(chessPiece.pos %8 === 0){
                    console.log("invalid")
                    return false
                }
                return true
            case chessPiece.pos - 16 - 1:
                if(nextPos %8 === 0){
                    console.log("invalid")
                    return false
                }
                return true
            case chessPiece.pos - 16 + 1:
                if(chessPiece.pos %8 === 0){
                    console.log("invalid")
                    return false
                }
                return true
            case chessPiece.pos + 2 - 8:
                if(chessPiece.pos %8 === 0 || chessPiece.pos %8 === 7){
                    console.log("invalid")
                    return false
                }
                return true
            case chessPiece.pos + 2 + 8:
                if(chessPiece.pos %8 === 0  || chessPiece.pos %8 === 7){
                    console.log("invalid")
                    return false
                }
                return true
            case chessPiece.pos - 2 + 8:
                if(nextPos %8 === 0  || nextPos%8 === 7){
                    console.log("invalid")
                    return false
                }
                return true
            case chessPiece.pos - 2 - 8:
                if(nextPos %8 === 0 || nextPos%8 === 7){
                    console.log("invalid")
                    return false
                }
                return true
            default:
                console.log("invalid")
                return false
        }
    }

    public preview(index: number, chessPiece: ChessPiece) {
        if (chessPiece.color === "black" || chessPiece.color === "white") {

            const previews = []

            if(index %8 !== 1 && index %8 !== 2){
                previews.push(
                    index - 2 - 8,
                    index - 2 + 8,
                )
            }
            if(index %8 !== 1){
                previews.push(
                    index + 16 - 1,
                    index - 16 - 1,
                )
            }

            if(index %8 !== 0 && index %8 !== 7){
                previews.push(
                    index + 2 - 8,
                    index + 2 + 8
                )
            }

            if(index %8 !== 0){
                previews.push(
                    index + 16 + 1,
                    index - 16 + 1
                )
            }
            return previews;
        } else {
            return null
        }

    }
}
