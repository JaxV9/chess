import { game } from '@/data/service';
import { Game } from '@/models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  game: Game | null
}

const initialState: GameState = {
    game: game
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    newGame: (state, action: PayloadAction<{newGame: Game}>) => {
      const { newGame } = action.payload
      state.game = newGame;
    },
  },
});

export const gameEngine = gameSlice.actions;

export const gameEngineReducer = gameSlice.reducer;