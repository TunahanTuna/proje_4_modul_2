import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ExcelTable } from "../components";
import { data } from "autoprefixer";
export default function NakitAkim() {
  const { nakitAkim } = useSelector((state) => state.dataReducer);
  const firstTable =
    nakitAkim && nakitAkim.filter((data) => data[0] >= 4001 && data[0] <= 4018);
  const secondTable =
    nakitAkim && nakitAkim.filter((data) => data[0] >= 4021 && data[0] <= 4038);
  const title = nakitAkim && nakitAkim.find((data) => data[0] == 4000);
  return (
    nakitAkim &&
    title && (
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="flex gap-4 flex-col"
      >
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={firstTable} title={title?.[1]} />
        </div>
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={secondTable} />
        </div>
      </motion.div>
    )
  );
}
