export type ChessPiece = {
    id: string;
    pos: number;
};

type ChessPieceName =
    | "pawn"
    | "bishop"
    | "knight"
    | "rook"
    | "queen"
    | "king";

type ChessColor = "black" | "white";


export type DataChessType = {
    [Piece in ChessPieceName as `${Piece}_${ChessColor}`]: ChessPiece[];
};

export const data: DataChessType = {
    pawn_black: [
        { id: "pawn_b1", pos: 9 },
        { id: "pawn_b2", pos: 10 },
        { id: "pawn_b3", pos: 11 },
        { id: "pawn_b4", pos: 12 },
        { id: "pawn_b5", pos: 13 },
        { id: "pawn_b6", pos: 14 },
        { id: "pawn_b7", pos: 15 },
        { id: "pawn_b8", pos: 16 },
    ],
    pawn_white: [
        { id: "pawn_w1", pos: 49 },
        { id: "pawn_w2", pos: 50 },
        { id: "pawn_w3", pos: 51 },
        { id: "pawn_w4", pos: 52 },
        { id: "pawn_w5", pos: 53 },
        { id: "pawn_w6", pos: 54 },
        { id: "pawn_w7", pos: 55 },
        { id: "pawn_w8", pos: 56 },
    ],
    bishop_black: [
        { id: "bishop_b1", pos: 3 },
        { id: "bishop_b2", pos: 6 },
    ],
    bishop_white: [
        { id: "bishop_b1", pos: 59 },
        { id: "bishop_b2", pos: 62 },
    ],
    king_black: [{ id: "king_b", pos: 5 }],
    king_white: [{ id: "king_w", pos: 61 }],
    queen_black: [{ id: "queen_b", pos: 4 }],
    queen_white: [{ id: "queen_w", pos: 60 }],
    knight_black: [
        { id: "knight_b1", pos: 2 },
        { id: "knight_b2", pos: 7 },
    ],
    knight_white: [
        { id: "knight_w1", pos: 58 },
        { id: "knight_w2", pos: 63 },
    ],
    rook_black: [
        { id: "rook_b1", pos: 1 },
        { id: "rook_b2", pos: 8 },
    ],
    rook_white: [
        { id: "rook_w1", pos: 57 },
        { id: "rook_w2", pos: 64 },
    ],
};  