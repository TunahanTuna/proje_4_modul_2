import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ExcelTable } from "../components";
export default function VeriGiriş() {
  const { veriGirisi } = useSelector((state) => state.dataReducer);
  const firstTable =
    veriGirisi &&
    veriGirisi?.filter((data) => data?.[0] >= 1002 && data?.[0] <= 1020);
  const secondTable =
    veriGirisi &&
    veriGirisi?.filter((data) => data?.[0] >= 1022 && data?.[0] <= 1031);
  const thirdTable =
    veriGirisi &&
    veriGirisi?.filter((data) => data?.[0] >= 1034 && data?.[0] <= 1043);
  const fourthTable =
    veriGirisi &&
    veriGirisi?.filter((data) => data?.[0] >= 1046 && data?.[0] <= 1055);
  return (
    firstTable &&
    secondTable &&
    thirdTable && (
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="flex gap-4 flex-col"
      >
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={firstTable} title={"Tesisin Maliyeti"} />
        </div>
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={secondTable} title={"Tablo I"} />
        </div>
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={thirdTable} title={"Tablo II"} />
        </div>
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={fourthTable} title={"Tablo III"} />
        </div>
      </motion.div>
    )
  );
}
