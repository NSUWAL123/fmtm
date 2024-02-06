import React from 'react';
import CoreModules from '@/shared/CoreModules';
import environment from '@/environment';
import CreateEditOrganizationHeader from '@/components/CreateEditOrganization/CreateEditOrganizationHeader';
import ConsentDetailsForm from '@/components/CreateEditOrganization/ConsentDetailsForm';
import CreateEditOrganizationForm from '@/components/CreateEditOrganization/CreateEditOrganizationForm';

const CreateEditOrganization = () => {
  const params = CoreModules.useParams();
  const encodedId = params.id;
  const decodedId = encodedId ? environment.decode(encodedId) : null;
  const consentApproval: any = CoreModules.useAppSelector((state) => state.organisation.consentApproval);

  return (
    <div className="fmtm-bg-[#F5F5F5]">
      <CreateEditOrganizationHeader projectId={decodedId} />
      <div className="fmtm-box-border fmtm-border-[1px] fmtm-border-t-white fmtm-border-t-[0px] fmtm-px-5 fmtm-py-4">
        {decodedId || (!decodedId && consentApproval) ? (
          <CreateEditOrganizationForm organizationId={decodedId} />
        ) : (
          <ConsentDetailsForm />
        )}
      </div>
    </div>
  );
};

export default CreateEditOrganization;
