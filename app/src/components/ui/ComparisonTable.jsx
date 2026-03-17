export default function ComparisonTable({ title, headers, rows }) {
  return (
    <div>
      {title && <h3 className="text-lg font-semibold text-[#161616] mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-[#e0e0e0]">
              {headers.map((h, i) => (
                <th key={i} className="py-3 px-4 text-xs font-semibold text-[#161616] uppercase tracking-widest">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-[#e0e0e0] ${i % 2 === 0 ? 'bg-[#f4f4f4]' : 'bg-white'}`}>
                {row.map((cell, j) => (
                  <td key={j} className={`py-3 px-4 ${j === 0 ? 'font-medium text-[#161616]' : 'text-[#525252]'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
