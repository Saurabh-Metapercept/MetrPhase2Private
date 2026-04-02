import { TableColumn } from '../components/common/Table';
import Button from '../components/common/Button';
import { MoreVertical, Download } from 'lucide-react';

export const ACTIVITY_COLUMNS: TableColumn[] = [
  {
    key: 'project',
    label: 'Project Name',
    cellClassName: 'text-[#0F172A] font-medium'
  },
  {
    key: 'action',
    label: 'Action'
  },
  {
    key: 'user',
    label: 'User'
  },
  {
    key: 'date',
    label: 'Date'
  },
  {
    key: 'time',
    label: 'Time'
  },
  {
    key: 'actions',
    label: 'Actions',
    render: () => (
      <Button
        variant="custom"
        size="custom"
        className="w-7 h-7 rounded-lg border border-[#E2E8F0] hover:bg-gray-50"
        icon={<MoreVertical size={14} className="text-[#45556C]" />}
      />
    )
  }
];

export const RELEASE_COLUMNS: TableColumn[] = [
  {
    key: 'title',
    label: 'Release Title',
    cellClassName: 'text-[#0F172A] font-medium'
  },
  {
    key: 'projectName',
    label: 'Project Name'
  },
  {
    key: 'outputFormat',
    label: 'Output Format'
  },
  {
    key: 'ditaVersion',
    label: 'DITA OT Version'
  },
  {
    key: 'createdAt',
    label: 'Created At'
  },
  {
    key: 'download',
    label: 'Download',
    render: () => (
      <Button
        variant="custom"
        size="custom"
        className="w-8 h-8 rounded-lg bg-[#5F4050] hover:bg-[#4a3340]"
        icon={<Download size={16} className="text-white" />}
      />
    )
  }
];
