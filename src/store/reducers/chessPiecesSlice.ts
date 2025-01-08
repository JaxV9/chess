import { data } from '@/data/chess';
import { ChessPiece } from '@/models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChessState {
  pieces: ChessPiece[];
}

const initialState: ChessState = {
  pieces: data,
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
    resetPiecesStore: (state) => {
      state.pieces = [...data];
    },
  },
});

export const { moveStore, resetPiecesStore } = chessPiecesSlice.actions;

export default chessPiecesSlice.reducer;
