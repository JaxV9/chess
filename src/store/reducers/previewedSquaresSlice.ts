import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreviewsState {
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
      console.log(body)
      state.previewedSquares = body
    },
  },
});

export const { updatePreviewedSquares } = previewedSquaresSlice.actions;

export default previewedSquaresSlice.reducer;
