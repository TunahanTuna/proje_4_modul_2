import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ColorizedExcelTable, ExcelTable } from "../components";
import { data } from "autoprefixer";
export default function NetBugunkuDeger() {
  const { netBugunkuDeger } = useSelector((state) => state.dataReducer);
  const title =
    netBugunkuDeger && netBugunkuDeger?.find((data) => data?.[0] == 5000);
  const firstTable =
    netBugunkuDeger &&
    netBugunkuDeger?.filter((data) => data?.[0] >= 5001 && data?.[0] <= 5006);
  const secondTable =
    netBugunkuDeger &&
    netBugunkuDeger?.filter((data) => data?.[0] >= 5009 && data?.[0] <= 5013);
  const customText =
    netBugunkuDeger && netBugunkuDeger.find((data) => data?.[0] == 5007)?.[1];
  return (
    netBugunkuDeger &&
    firstTable &&
    secondTable &&
    customText &&
    title && (
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="flex gap-4 flex-col"
      >
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ColorizedExcelTable table_sheet={firstTable} title={title?.[1]} />
        </div>
        <div className="p-4 bg-white border-b-4">
          <p className="text-justify">{customText}</p>
        </div>
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ColorizedExcelTable table_sheet={secondTable} />
        </div>
      </motion.div>
    )
  );
}
