import React, { useEffect, useRef, useState } from 'react';
import AssetModules from '../../shared/AssetModules.js';
import ProjectIcon from '../../assets/images/project_icon.png';
import CoreModules from '../../shared/CoreModules';

const ProjectInfo = () => {
  const paraRef = useRef(null);
  const [seeMore, setSeeMore] = useState(false);
  const [descLines, setDescLines] = useState(1);
  const projectInfo = CoreModules.useAppSelector((state) => state?.project?.projectInfo);
  const projectDetailsLoading = CoreModules.useAppSelector((state) => state?.project?.projectDetailsLoading);

  useEffect(() => {
    if (paraRef.current) {
      const lineHeight = parseFloat(getComputedStyle(paraRef.current).lineHeight);
      const lines = Math.floor(paraRef.current.clientHeight / lineHeight);
      setDescLines(lines);
    }
  }, [projectInfo, paraRef.current]);

  return (
    <div className="fmtm-flex fmtm-flex-col fmtm-gap-5 fmtm-mt-3 fmtm-h-[56vh] fmtm-overflow-y-scroll scrollbar fmtm-pr-1">
      <div>
        <p className="fmtm-font-bold">Description</p>
        {projectDetailsLoading ? (
          <div>
            {Array.from({ length: 10 }).map((i) => (
              <CoreModules.Skeleton key={i} />
            ))}
            <CoreModules.Skeleton className="!fmtm-w-[80px]" />
          </div>
        ) : (
          <div>
            <p className={`${!seeMore ? 'fmtm-line-clamp-[10]' : ''} fmtm-text-[#706E6E]`} ref={paraRef}>
              {projectInfo?.description}
            </p>
            {descLines >= 10 && (
              <p
                className="fmtm-text-primaryRed hover:fmtm-text-red-700 hover:fmtm-cursor-pointer"
                onClick={() => setSeeMore(!seeMore)}
              >
                ... {!seeMore ? 'See More' : 'See Less'}
              </p>
            )}
          </div>
        )}
      </div>
      <div className="fmtm-flex fmtm-items-center fmtm-gap-2">
        <AssetModules.FmdGoodIcon className="fmtm-text-primaryRed" />
        {projectDetailsLoading ? <CoreModules.Skeleton className="!fmtm-w-[160px]" /> : <p>Cameroon, Africa</p>}
      </div>
      <div className="fmtm-flex fmtm-justify-between fmtm-w-full">
        <div>
          <p className="fmtm-font-bold">Contributors</p>
          {projectDetailsLoading ? (
            <CoreModules.Skeleton className="!fmtm-w-[60px] fmtm-ml-[15%]" />
          ) : (
            <p className="fmtm-text-center fmtm-text-[#706E6E]">210</p>
          )}
        </div>
        <div>
          <p className="fmtm-font-bold">Last Contribution</p>
          {projectDetailsLoading ? (
            <CoreModules.Skeleton className="!fmtm-w-[70px] fmtm-ml-[20%]" />
          ) : (
            <p className="fmtm-text-center fmtm-text-[#706E6E]">3 hours ago</p>
          )}
        </div>
      </div>
      <div>
        <p className="fmtm-font-bold fmtm-mb-1">Organized By:</p>
        {projectDetailsLoading ? (
          <div className="fmtm-flex fmtm-items-center fmtm-gap-5">
            <CoreModules.Skeleton className="!fmtm-w-[2.81rem] fmtm-h-[2.81rem] !fmtm-rounded-full fmtm-overflow-hidden" />
            <CoreModules.Skeleton className="!fmtm-w-[180px]" />
          </div>
        ) : (
          <div className="fmtm-flex fmtm-items-center fmtm-gap-4">
            <div className="fmtm-w-10 fmtm-h-10 fmtm-overflow-hidden">
              <img src={ProjectIcon} alt="Organizer Photo" />
            </div>
            <p className="fmtm-text-center fmtm-text-[#706E6E]">OpenStreet Map</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;
