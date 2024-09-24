import * as styles from "@/styles/components/Table.css";

interface tableColumn {
  title: string;
  dataIndex: string;
  render?: (data: string) => React.ReactNode;
}

interface data {
  key: React.Key;
  [key: string]: any;
}

interface TableProps {
  columns: tableColumn[];
  dataSource: data[];
}

export const Table = ({ columns, dataSource }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th className={styles.tableColumn} key={column.dataIndex}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {dataSource.map((data, i) => (
          <tr key={i}>
            {columns.map((column, key) => (
              <td key={key} className={styles.tableRow}>
                {column.render ? column.render(data[column.dataIndex]) : data[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
