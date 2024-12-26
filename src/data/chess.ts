export type ChessPiece = {
    id: string;
    role: string
    pos: number;
};

export const data: ChessPiece[] =
    [
        { id: "pawn_b1", role: "pawn_black", pos: 9 },
        { id: "pawn_b2", role: "pawn_black", pos: 10 },
        { id: "pawn_b3", role: "pawn_black", pos: 11 },
        { id: "pawn_b4", role: "pawn_black", pos: 12 },
        { id: "pawn_b5", role: "pawn_black", pos: 13 },
        { id: "pawn_b6", role: "pawn_black", pos: 14 },
        { id: "pawn_b7", role: "pawn_black", pos: 15 },
        { id: "pawn_b8", role: "pawn_black", pos: 16 },
        { id: "pawn_w1", role: "pawn_white", pos: 49 },
        { id: "pawn_w2", role: "pawn_white", pos: 50 },
        { id: "pawn_w3", role: "pawn_white", pos: 51 },
        { id: "pawn_w4", role: "pawn_white", pos: 52 },
        { id: "pawn_w5", role: "pawn_white", pos: 53 },
        { id: "pawn_w6", role: "pawn_white", pos: 54 },
        { id: "pawn_w7", role: "pawn_white", pos: 55 },
        { id: "pawn_w8", role: "pawn_white", pos: 56 },
        { id: "bishop_b1", role: "bishop_black", pos: 3 },
        { id: "bishop_b2", role: "bishop_black", pos: 6 },
        { id: "bishop_w1", role: "bishop_white", pos: 59 },
        { id: "bishop_w2", role: "bishop_white", pos: 62 },
        { id: "king_b", role: "king_black", pos: 5 },
        { id: "king_w", role: "king_white", pos: 61 },
        { id: "queen_b", role: "queen_black", pos: 4 },
        { id: "queen_w", role: "queen_white", pos: 60 },
        { id: "knight_b1", role: "knight_black", pos: 2 },
        { id: "knight_b2", role: "knight_black", pos: 7 },
        { id: "knight_w1", role: "knight_white", pos: 58 },
        { id: "knight_w2", role: "knight_white", pos: 63 },
        { id: "rook_b1", role: "rook_black", pos: 1 },
        { id: "rook_b2", role: "rook_black", pos: 8 },
        { id: "rook_w1", role: "rook_white", pos: 57 },
        { id: "rook_w2", role: "rook_white", pos: 64 }
    ];