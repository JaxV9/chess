import { ChessPiece } from '@/models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ChessState = {
  pieces: ChessPiece[];
}

const initialState: ChessState = {
  pieces: [],
};

const chessPiecesSlice = createSlice({
  name: 'chessPieces',
  initialState,
  reducers: {
    moveStore: (state, action: PayloadAction<{ id: string; pos: number }>) => {
      const { id, pos } = action.payload;
      const piece = state.pieces.find((p) => p.id === id);
      if (piece) {
        piece.pos = pos;
      }
    },
    loadChessPosition: (state, action: PayloadAction<{ chessPieces: ChessPiece[]}>) => {
      const { chessPieces } = action.payload;
      state.pieces = chessPieces;
    },
  },
});

export const { moveStore, loadChessPosition } = chessPiecesSlice.actions;

export const chessPiecesReducer = chessPiecesSlice.reducer