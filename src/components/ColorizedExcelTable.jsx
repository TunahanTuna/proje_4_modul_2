import React, { useState, useEffect } from "react";

import classNames from "classnames";

export default function ColorizedExcelTable({
  table_sheet,
  title,
  setChartData,
}) {
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
                        dt[0] == 5004 ||
                          dt[0] == 5011 ||
                          dt[0] == 6001 ||
                          dt[0] == 7001 ||
                          dt[0] == 6005 ||
                          dt[0] == 7005 ||
                          dt[0] == 8002 ||
                          dt[0] == 8013
                          ? "bg-red-400"
                          : "",
                        dt[0] == 8003 || dt[0] == 8014 ? "bg-red-300" : "",
                        dt[0] == 8004 || dt[0] == 8015 ? "bg-orange-300" : "",
                        dt[0] == 8005 || dt[0] == 8016 ? "bg-orange-200" : "",
                        dt[0] == 8006 || dt[0] == 8017 ? "bg-yellow-100" : "",
                        dt[0] == 8007 || dt[0] == 8018 ? "bg-green-100" : "",
                        dt[0] == 8008 || dt[0] == 8019 ? "bg-green-200" : "",
                        dt[0] == 8009 || dt[0] == 8020 ? "bg-green-300" : "",

                        dt[0] == 5005 ||
                          dt[0] == 5012 ||
                          dt[0] == 6002 ||
                          dt[0] == 7002 ||
                          dt[0] == 6006 ||
                          dt[0] == 7006
                          ? "bg-yellow-400"
                          : "",
                        dt[0] == 5006 ||
                          dt[0] == 5013 ||
                          dt[0] == 6003 ||
                          dt[0] == 7003 ||
                          dt[0] == 6007 ||
                          dt[0] == 7007 ||
                          dt[0] == 8010 ||
                          dt[0] == 8021
                          ? "bg-green-400"
                          : "",
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
