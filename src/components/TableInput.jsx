import React from "react";
import { useDispatch } from "react-redux";
import { setData } from "../store/dataSlice";
import * as XLSX from "xlsx";

export default function TableInput() {
  const dispatch = useDispatch();
  const handleFileUpload = (e) => {
    // Yüklenen dosyayı alın
    const file = e.target.files[0];

    // Dosyayı okumak için bir FileReader oluşturun
    const reader = new FileReader();

    // Dosya okuma tamamlandığında bu işlev çalışır
    reader.onload = (e) => {
      const data = event.target.result;

      const workbook = XLSX.read(data, { type: "binary" });
      dispatch(setData(workbook));
    };
    // Dosyayı ikili (binary) formatta okuyun
    reader.readAsBinaryString(file);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}
