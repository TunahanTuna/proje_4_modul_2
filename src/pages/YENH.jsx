import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ColorizedExcelTable, ExcelTable } from "../components";
import { data } from "autoprefixer";
export default function YENH() {
  const { yenh } = useSelector((state) => state.dataReducer);
  const title = yenh && yenh?.find((data) => data?.[0] == 7000);
  const firstTable =
    yenh && yenh?.filter((data) => data?.[0] >= 7000 && data?.[0] <= 7003);
  const secondTable = yenh && [
    title,
    ...yenh?.filter((data) => data?.[0] >= 7005 && data?.[0] <= 7007),
  ];
  const customText = yenh && yenh.find((data) => data?.[0] == 7004)?.[1];
  return (
    yenh &&
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
          <ColorizedExcelTable table_sheet={firstTable} />
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
