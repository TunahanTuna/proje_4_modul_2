import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ExcelTable } from "../components";
import { data } from "autoprefixer";
export default function AmortismanTablosu() {
  const { amortismanTablosu } = useSelector((state) => state.dataReducer);

  return (
    amortismanTablosu && (
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="flex gap-4 flex-col"
      >
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={amortismanTablosu} />
        </div>
      </motion.div>
    )
  );
}
