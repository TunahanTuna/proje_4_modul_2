import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ColorizedExcelTable, ExcelTable } from "../components";
import { data } from "autoprefixer";
export default function GOS2() {
  const { gos2 } = useSelector((state) => state.dataReducer);
  const title = gos2 && gos2?.find((data) => data?.[0] == 8000);
  const firstTable =
    gos2 && gos2?.filter((data) => data?.[0] >= 8001 && data?.[0] <= 8010);
  const secondTable =
    gos2 && gos2?.filter((data) => data?.[0] >= 8012 && data?.[0] <= 8021);

  const customText = gos2 && gos2.find((data) => data?.[0] == 8011)?.[1];
  console.log(gos2);
  return (
    gos2 &&
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
