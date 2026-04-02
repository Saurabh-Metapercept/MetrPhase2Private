import { ReactNode } from 'react';

export interface TableColumn<T = any> {
  key: string;
  label: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  headerClassName?: string;
  cellClassName?: string;
  render?: (row: T, index: number) => ReactNode;
}

interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick?: (row: T, index: number) => void;
  className?: string;
}

export default function Table<T = any>({ columns, data, onRowClick, className = '' }: TableProps<T>) {
  return (
    <table className={`w-full border-collapse ${className}`}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              className={`font-bold text-base text-[#314158] px-4 py-3 border-b border-[#E2E8F0] text-${column.align || 'left'} ${column.headerClassName || ''}`}
              style={{ width: column.width }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={`border-b border-[#F1F5F9] ${onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}`}
            onClick={() => onRowClick?.(row, index)}
          >
            {columns.map((column) => (
              <td
                key={column.key}
                className={`px-4 py-3 text-[#45556C] text-base ${column.cellClassName || ''}`}
              >
                {column.render ? column.render(row, index) : (row as any)[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
