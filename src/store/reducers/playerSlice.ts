import { Player } from '@/models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlayerState = {
    player: Player | null
}

const initialState: PlayerState = {
    player: null
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    putPlayer: (state, action: PayloadAction<{player: Player}>) => {
        const { player } = action.payload;
        state.player = player;
        console.log(state.player)
    },
  },
});

export const { putPlayer } = playerSlice.actions;

export const playerReducer = playerSlice.reducer;