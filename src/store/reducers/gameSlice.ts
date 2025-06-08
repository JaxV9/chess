import { Game } from '@/models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GameState = {
  game: Game | null,
  tokenGameSession: string | null,
}

const initialState: GameState = {
    game: null,
    tokenGameSession: null
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<{newGame: Game}>) => {
      const { newGame } = action.payload
      state.game = newGame;
    },
    putTokenGameSession: (state, action: PayloadAction<{token: string}>) => {
      const { token } = action.payload;
      state.tokenGameSession = token;
    }
  },
});

export const { startGame, putTokenGameSession } = gameSlice.actions;

export const gameEngineReducer = gameSlice.reducer;