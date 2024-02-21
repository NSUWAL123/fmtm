export type SubmissionStateTypes = {
  submissionDetailsLoading: boolean;
  submissionDetails: [];
  submissionInfographics: [];
  submissionInfographicsLoading: boolean;
  submissionContributors: [];
  submissionContributorsLoading: boolean;
  submissionFormFields: [];
  submissionTableData: [];
  submissionFormFieldsLoading: boolean;
  submissionTableDataLoading: boolean;
  submissionTableRefreshing: boolean;
  validatedVsMappedInfographics: [];
  validatedVsMappedLoading: boolean;
  updateReviewStatusModal: updateReviewStatusModal;
};

type updateReviewStatusModal = {
  toggleModalStatus: boolean;
  submissionId: string | null;
};
