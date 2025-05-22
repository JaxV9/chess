import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PreviewsState = {
  previewedSquares: number[] | null;
}

const initialState: PreviewsState = {
    previewedSquares: null,
};

const previewedSquaresSlice = createSlice({
  name: 'previewedSquares',
  initialState,
  reducers: {
    updatePreviewedSquares: (state, action: PayloadAction<number[] | null>) => {
      const body = action.payload;
      state.previewedSquares = body
    },
  },
});

export const { updatePreviewedSquares } = previewedSquaresSlice.actions;

export const previewedSquaresReducer =  previewedSquaresSlice.reducer;
