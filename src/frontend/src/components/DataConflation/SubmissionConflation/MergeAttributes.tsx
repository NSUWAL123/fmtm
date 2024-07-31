import React, { useState } from 'react';
import { Modal } from '@/components/common/Modal';
import Button from '@/components/common/Button';
import Table, { TableHeader } from '@/components/common/CustomTable';

const osmTags = {
  category: 'Service',
  building_material: 'Stone',
  building_levels: 4,
  service: 'Beauty',
  area: 10,
  roof: 'Tile',
};

const submissionTags = {
  category: 'Residential',
  building_material: 'Brick',
  building_levels: 5,
  service: 'Active',
  area: 10,
  roof: 'Glass',
};

type mergeAttributesPropType = {
  selectedConflateMethod: 'submission_feature' | 'osm_feature' | 'merge_attributes' | '';
  setSelectedConflateMethod: (value: '') => void;
};

const MergeAttributes = ({ selectedConflateMethod, setSelectedConflateMethod }: mergeAttributesPropType) => {
  const [chosenAttribute, setChosenAttribute] = useState({});

  const tableData: any = [];
  for (const [key, value] of Object.entries(osmTags)) {
    if (submissionTags?.[key] && submissionTags?.[key] !== value) {
      tableData.push({ name: key, osm: value, submission: submissionTags?.[key] });
    }
  }

  return (
    <>
      <Modal
        title={<p className="fmtm-text-left">Merge Data With OSM</p>}
        description={
          <div className="fmtm-mt-1">
            <div>
              <Table
                flag="primarytable"
                style={{ maxHeight: '60vh', width: '100%' }}
                data={tableData}
                onRowClick={() => {}}
                isLoading={false}
              >
                <TableHeader
                  dataField="Feature Name"
                  headerClassName="featureHeader"
                  rowClassName="featureRow"
                  dataFormat={(row) => <div>{row?.name}</div>}
                />
                <TableHeader
                  dataField="OSM Tags"
                  headerClassName="osmHeader"
                  rowClassName="osmRow !fmtm-p-0"
                  dataFormat={(row) => (
                    <div
                      className={`fmtm-flex fmtm-items-center fmtm-justify-between !fmtm-h-full fmtm-absolute fmtm-top-0 fmtm-left-0 fmtm-w-full fmtm-p-3 ${
                        chosenAttribute[row?.name] === row?.osm && 'fmtm-bg-[#9FD5C5]'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setChosenAttribute((prev) => ({ ...prev, [row?.name]: row?.osm }));
                      }}
                    >
                      <label
                        htmlFor={row?.name}
                        className={`fmtm-text-base ${
                          chosenAttribute[row?.name] === row?.osm ? 'fmtm-text-white' : 'fmtm-text-gray-500'
                        } fmtm-mb-[2px] fmtm-cursor-pointer fmtm-flex fmtm-items-center fmtm-gap-2`}
                      >
                        <p>{row?.osm}</p>
                      </label>
                      <input
                        type="radio"
                        id={row?.name}
                        name={row?.name}
                        value={row?.osm}
                        className={`fmtm-accent-[#5BAD8C] fmtm-cursor-pointer fmtm-bg-white`}
                        checked={chosenAttribute[row?.name] === row?.osm}
                      />
                    </div>
                  )}
                />
                <TableHeader
                  dataField="Submission #457"
                  headerClassName="submissionHeader"
                  rowClassName="submissionRow !fmtm-p-0"
                  dataFormat={(row) => (
                    <div
                      className={`fmtm-flex fmtm-items-center fmtm-justify-between !fmtm-h-full fmtm-absolute fmtm-top-0 fmtm-left-0 fmtm-w-full fmtm-p-3 ${
                        chosenAttribute[row?.name] === row?.submission && 'fmtm-bg-[#9FD5C5]'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setChosenAttribute((prev) => ({ ...prev, [row?.name]: row?.submission }));
                      }}
                    >
                      <label
                        htmlFor={row?.name}
                        className={`fmtm-text-base ${
                          chosenAttribute[row?.name] === row?.submission ? 'fmtm-text-white' : 'fmtm-text-gray-500'
                        } fmtm-mb-[2px] fmtm-cursor-pointer fmtm-flex fmtm-items-center fmtm-gap-2`}
                      >
                        <p>{row?.submission}</p>
                      </label>
                      <input
                        type="radio"
                        id={row?.name}
                        name={row?.name}
                        value={row?.submission}
                        className={`fmtm-accent-[#5BAD8C]  fmtm-cursor-pointer`}
                        checked={chosenAttribute[row?.name] === row?.submission}
                      />
                    </div>
                  )}
                />
              </Table>
            </div>
            <div className="fmtm-flex fmtm-gap-[0.625rem] fmtm-justify-center fmtm-mt-5">
              <Button
                btnText="Save"
                btnType="primary"
                onClick={() => {
                  setSelectedConflateMethod('');
                }}
                type="button"
                className="!fmtm-rounded fmtm-text-sm !fmtm-py-2 fmtm-font-bold"
              />
            </div>
          </div>
        }
        open={selectedConflateMethod === 'merge_attributes'}
        onOpenChange={() => setSelectedConflateMethod('')}
        className="fmtm-max-w-[60rem] fmtm-rounded-xl"
      />
    </>
  );
};

export default MergeAttributes;
