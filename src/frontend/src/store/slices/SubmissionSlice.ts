import { createSlice } from '@reduxjs/toolkit';

const SubmissionSlice = createSlice({
  name: 'submission',
  initialState: {
    submissionDetailsLoading: true,
    submissionDetails: [],
    submissionInfographics: [],
    submissionContributors: [],
    submissionContributorsLoading: true,
  },
  reducers: {
    SetSubmissionDetailsLoading(state, action) {
      state.submissionDetailsLoading = action.payload;
    },
    SetSubmissionDetails(state, action) {
      state.submissionDetails = action.payload;
    },
    SetSubmissionInfographics(state, action) {
      state.submissionInfographics = action.payload;
    },
    SetSubmissionContributors(state, action) {
      state.submissionContributors = action.payload;
    },
    SetSubmissionContributorsLoading(state, action) {
      state.submissionContributorsLoading = action.payload;
    },
  },
});

export const SubmissionActions = SubmissionSlice.actions;
export default SubmissionSlice;
