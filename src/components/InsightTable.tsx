import type { InsightTableVisual } from "../types/project";

interface InsightTableProps {
  visual: InsightTableVisual;
}

export function InsightTable({ visual }: InsightTableProps) {
  return (
    <section className="structured-section">
      <div className="structured-section__heading">
        <p className="section-label">{visual.title}</p>
        <h2>{visual.intro}</h2>
      </div>
      <div className="insight-table__scroll">
        <table className="insight-table">
          <thead>
            <tr>
              {visual.columns.map((column) => (
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visual.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th scope="row" key={cell}>
                      {cell}
                    </th>
                  ) : (
                    <td key={cell}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

