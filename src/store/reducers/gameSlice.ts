import { Game } from '@/models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  game: Game | null
}

const initialState: GameState = {
    game: null
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<{newGame: Game}>) => {
      const { newGame } = action.payload
      state.game = newGame;
    },
  },
});

export const { startGame } = gameSlice.actions;

export const gameEngineReducer = gameSlice.reducer;