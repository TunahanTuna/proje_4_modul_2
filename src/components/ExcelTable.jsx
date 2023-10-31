import React, { useState, useEffect } from "react";

import classNames from "classnames";

export default function ExcelTable({ table_sheet, title, setChartData }) {
  return (
    <div className="bg-neutral-50 px-4 pt-3 pb-4 rounded-sm border border-neutral-300 flex-1">
      <strong className="items-center justify-center flex text-indigo-950 font-bold text-xl w-full">
        {title && title}
      </strong>
      {table_sheet && (
        <div className="mt-3">
          <table className="w-full text-gray-700 table-auto">
            <thead>
              <tr>
                {table_sheet?.[0]?.slice(1).map((head, idx) => (
                  <th
                    className={classNames(
                      idx != 0 ? "text-right" : "text-left",
                      "bg-indigo-950 border-b border-neutral-500 text-xs  text-indigo-50 font-bold"
                    )}
                    key={idx}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table_sheet?.slice(1).map((dt, key) => (
                <tr
                  key={key}
                  className="hover:bg-indigo-100 bg-neutral-50 text-indigo-950 font-semibold"
                  onClick={setChartData && setChartData(dt[key])}
                >
                  {dt.slice(1).map((row, idx) => (
                    <td
                      className={classNames(
                        idx != 0 ? "text-right" : "text-left",

                        dt[0] == 1007 || dt[0] == 1009
                          ? "bg-green-900 text-indigo-50"
                          : null,
                        dt[0] == 1010 || dt[0] == 1011
                          ? "bg-yellow-400 text-black-200 font-bold"
                          : null,
                        dt[0] == 1020
                          ? "bg-blue-600 text-indigo-50 font-bold"
                          : null,
                        dt[0] == 3001
                          ? "bg-blue-900 text-indigo-50 font-bold"
                          : null,

                        "border-none p-2 text-xs"
                      )}
                      key={idx}
                    >
                      {isNaN(parseFloat(row))
                        ? row
                        : new Intl.NumberFormat("tr-TR", {
                            style: "decimal",
                            maximumFractionDigits: 2,
                          }).format(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
