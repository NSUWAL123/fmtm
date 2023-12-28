import CoreModules from '../shared/CoreModules';
import { ProjectActions } from '../store/slices/ProjectSlice';
import { SubmissionActions } from '../store/slices/SubmissionSlice';
// import { HomeProjectCardModel } from '../models/home/homeModel';

export const ProjectSubmissionService: Function = (url: string) => {
  return async (dispatch) => {
    dispatch(ProjectActions.GetProjectSubmissionLoading(true));

    const fetchProjectSubmission = async (url: string) => {
      try {
        const fetchSubmissionData = await CoreModules.axios.get(url);
        const resp: any = fetchSubmissionData.data;
        dispatch(ProjectActions.SetProjectSubmission(resp));
        dispatch(ProjectActions.GetProjectSubmissionLoading(false));
      } catch (error) {
        dispatch(ProjectActions.GetProjectSubmissionLoading(false));
      }
    };

    await fetchProjectSubmission(url);
  };
};
export const ProjectBuildingGeojsonService: Function = (url: string) => {
  return async (dispatch) => {
    dispatch(ProjectActions.GetProjectBuildingGeojsonLoading(true));

    const fetchProjectBuildingGeojson = async (url: string) => {
      try {
        const fetchBuildingGeojsonData = await CoreModules.axios.get(url);
        const resp: any = fetchBuildingGeojsonData.data;
        dispatch(ProjectActions.SetProjectBuildingGeojson(resp));
        dispatch(ProjectActions.GetProjectBuildingGeojsonLoading(false));
      } catch (error) {
        dispatch(ProjectActions.GetProjectBuildingGeojsonLoading(false));
      }
    };

    await fetchProjectBuildingGeojson(url);
  };
};

export const ProjectSubmissionInfographicsService: Function = (url: string) => {
  return async (dispatch) => {
    const fetchProjectSubmission = async (url: string) => {
      try {
        const fetchSubmissionData = await CoreModules.axios.get(url);
        const resp: any = fetchSubmissionData.data;
        dispatch(SubmissionActions.SetSubmissionInfographics(resp));
      } catch (error) {}
    };

    await fetchProjectSubmission(url);
  };
};

export const ProjectContributorsService: Function = (url: string) => {
  return async (dispatch) => {
    const fetchProjectContributor = async (url: string) => {
      try {
        dispatch(SubmissionActions.SetSubmissionContributorsLoading(true));
        const fetchContributorsData = await CoreModules.axios.get(url);
        const resp: any = fetchContributorsData.data;
        dispatch(SubmissionActions.SetSubmissionContributors(resp));
        dispatch(SubmissionActions.SetSubmissionContributorsLoading(false));
      } catch (error) {}
    };

    await fetchProjectContributor(url);
  };
};
