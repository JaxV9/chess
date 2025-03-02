import { ChessPiece } from '@/models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChessState {
  pieces: ChessPiece[];
}

const initialState: ChessState = {
  pieces: [],
};

const chessPiecesSlice = createSlice({
  name: 'chessPieces',
  initialState,
  reducers: {
    loadChessPosition: (state, action: PayloadAction<{ chessPieces: ChessPiece[]}>) => {
      const { chessPieces } = action.payload;
      state.pieces = chessPieces;
    },
  },
});

export const { loadChessPosition } = chessPiecesSlice.actions;

export const chessPiecesReducer = chessPiecesSlice.reducer