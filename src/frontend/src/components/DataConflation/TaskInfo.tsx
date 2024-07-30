import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@/components/common/Button';
import AssetModules from '@/shared/AssetModules';

const taskInfoConstants = [
  { name: 'Total Feature', count: 9 },
  { name: 'Number of geometry conflicts', count: 3 },
  { name: 'Number of tag conflicts', count: 4 },
  { name: 'No conflicts', count: 2 },
];

const TaskInfo = () => {
  const navigate = useNavigate();
  const { taskId, projectId } = useParams();

  return (
    <div>
      <div
        onClick={() => navigate(`/project/${projectId}`)}
        className="fmtm-flex fmtm-items-center fmtm-mb-5 fmtm-cursor-pointer hover:fmtm-text-primaryRed fmtm-duration-300"
      >
        <AssetModules.ArrowBackIosIcon style={{ fontSize: '1.125rem' }} />
        <p className="fmtm-text-sm fmtm-font-[500]">BACK</p>
      </div>
      <div className="fmtm-w-[15rem] fmtm-py-2 fmtm-px-3 fmtm-bg-white fmtm-h-[calc(100%-2.5rem)]">
        <div>
          <p className="fmtm-text-primaryRed">Task #{taskId}</p>
        </div>

        <div className="fmtm-mt-5 fmtm-mb-10">
          <table>
            {taskInfoConstants?.map((info) => (
              <tr className="">
                <td className="fmtm-text-xs fmtm-text-[#484848] fmtm-pb-1">{info?.name}</td>
                <td className="fmtm-text-xs fmtm-text-[#484848] fmtm-px-2 fmtm-pb-1">:</td>
                <td className="fmtm-text-xs fmtm-text-[#484848] fmtm-pb-1">{info?.count}</td>
              </tr>
            ))}
          </table>
        </div>

        <div className="fmtm-flex fmtm-flex-col fmtm-gap-3">
          <Button
            btnText="Submit Task"
            type="button"
            btnType="primary"
            onClick={() => {}}
            className="fmtm-text-sm !fmtm-rounded fmtm-w-full fmtm-justify-center"
          />
          <Button
            btnText="Request Additional Mapping"
            type="button"
            btnType="other"
            onClick={() => {}}
            className="fmtm-text-sm !fmtm-rounded fmtm-w-full fmtm-justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
