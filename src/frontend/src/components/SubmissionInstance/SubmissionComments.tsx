import { useAppSelector } from '@/types/reduxTypes';
import React from 'react';
import { useParams } from 'react-router-dom';
import AssetModules from '@/shared/AssetModules';
import CoreModules from '@/shared/CoreModules';

const SubmissionComments = () => {
  const params = useParams();
  const submissionInstanceId = params.instanceId;

  const taskCommentsList = useAppSelector((state) => state?.project?.projectCommentsList);
  const filteredTaskCommentsList = taskCommentsList
    ?.filter((comment) => comment?.action_text.includes('-SUBMISSION_INST-'))
    .filter((comment) => comment.action_text.split('-SUBMISSION_INST-')[0] === submissionInstanceId);
  const taskGetCommentsLoading = useAppSelector((state) => state?.project?.projectGetCommentsLoading);

  return (
    <div className="fmtm-bg-white fmtm-rounded-xl fmtm-p-6">
      <h4 className="fmtm-font-bold fmtm-text-[#555] fmtm-text-xl fmtm-mb-[0.625rem]">Comments</h4>
      {taskGetCommentsLoading ? (
        <div>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="fmtm-flex fmtm-flex-col fmtm-gap-1 fmtm-py-[0.875rem] fmtm-border-b fmtm-border-[#D4D4D4]"
            >
              <div className="fmtm-flex fmtm-justify-between">
                <CoreModules.Skeleton className="!fmtm-w-[6rem] fmtm-h-6" />
                <CoreModules.Skeleton className="!fmtm-w-[6rem] fmtm-h-4" />
              </div>
              <CoreModules.Skeleton className="!fmtm-w-full fmtm-h-5" />
            </div>
          ))}
        </div>
      ) : (
        filteredTaskCommentsList?.map((comment) => (
          <div className="fmtm-py-[0.875rem] fmtm-border-b fmtm-border-[#D4D4D4] fmtm-flex fmtm-flex-col fmtm-gap-2">
            <div className="fmtm-flex fmtm-justify-between fmtm-items-center">
              <p className="fmtm-text-base fmtm-font-bold fmtm-text-[#555]">{comment?.username}</p>
              <div className="fmtm-flex fmtm-items-center fmtm-gap-1">
                <AssetModules.CalendarTodayOutlinedIcon style={{ fontSize: '12px' }} className="fmtm-text-[#D73F37]" />
                <p className="fmtm-text-xs fmtm-text-[#555]">{comment?.action_date?.split('T')[0]}</p>
              </div>
            </div>
            <p className="fmtm-text-[#555] fmtm-text-sm">{comment?.action_text?.split('-SUBMISSION_INST-')[1]}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SubmissionComments;
