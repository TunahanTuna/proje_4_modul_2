import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { ColorizedExcelTable, ExcelTable } from "../components";
import { data } from "autoprefixer";
export default function NetGelecektekiDeger() {
  const { netGelecektekiDeger } = useSelector((state) => state.dataReducer);
  const title =
    netGelecektekiDeger &&
    netGelecektekiDeger?.find((data) => data?.[0] == 6000);
  const firstTable =
    netGelecektekiDeger &&
    netGelecektekiDeger?.filter(
      (data) => data?.[0] >= 6000 && data?.[0] <= 6003
    );
  const secondTable = netGelecektekiDeger && [
    title,
    ...netGelecektekiDeger?.filter(
      (data) => data?.[0] >= 6005 && data?.[0] <= 6007
    ),
  ];
  const customText =
    netGelecektekiDeger &&
    netGelecektekiDeger.find((data) => data?.[0] == 6004)?.[1];
  return (
    netGelecektekiDeger &&
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
