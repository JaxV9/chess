import { configureStore } from '@reduxjs/toolkit'
import { chessPiecesReducer } from './reducers/chessPiecesSlice';
import { gameEngineReducer } from './reducers/gameSlice';
import { previewedSquaresReducer } from './reducers/previewedSquaresSlice';
import { playerReducer } from './reducers/playerSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      chessPieces: chessPiecesReducer,
      previewedSquares: previewedSquaresReducer,
      gameEngine: gameEngineReducer,
      player: playerReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']