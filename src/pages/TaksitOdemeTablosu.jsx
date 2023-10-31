import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ExcelTable } from "../components";
import { data } from "autoprefixer";
export default function TaksitOdemeTablosu() {
  const { taksitOdemeTablosu } = useSelector((state) => state.dataReducer);
  const firstTable =
    taksitOdemeTablosu &&
    taksitOdemeTablosu.filter(
      (data) => data[0] >= 2000 && data[0] <= 2011 && data[0] != 2001
    );
  const secondTable =
    taksitOdemeTablosu && taksitOdemeTablosu.filter((data) => data[0] == null);
  return (
    taksitOdemeTablosu && (
      <motion.div
        initial={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        className="flex gap-4 flex-col"
      >
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={firstTable} />
        </div>
        <div className="flex xl:gap-4 w-full overflow-y-auto">
          <ExcelTable table_sheet={secondTable} />
        </div>
      </motion.div>
    )
  );
}
