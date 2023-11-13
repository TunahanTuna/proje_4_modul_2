import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { texts, urlFilters } from "../lib/constants/constants";
import * as XLSX from "xlsx";

import { useDispatch, useSelector } from "react-redux";
import { setBank } from "../store/bankSlice";
import { setData } from "../store/dataSlice";
import Cookies from "universal-cookie";

export const apiRequests = (jwtKey) => {
  const dispatch = useDispatch();
  const { veriGirisi } = useSelector((state) => state.dataReducer);
  const fetchURL = import.meta.env.VITE_FETCH_USER_URL;

  const cookies = new Cookies();

  useEffect(() => {
    if (jwtKey != null) {
      try {
        axios
          .get(fetchURL, {
            headers: {
              Authorization: `${urlFilters.tokenHelper} ${jwtKey}`,
            },
          })
          .then((response) => {
            const mainUrl = response?.data?.yatirimGeriDonus?.url;
            console.log(mainUrl);
            fetch(`${import.meta.env.VITE_BASE_URL}${mainUrl}`)
              .then((res) => res.blob())
              .then((blob) => {
                const file = new File([blob], urlFilters.excelFileName, {
                  type: urlFilters.excelFileType,
                });

                // Excel dosyasını okuma işlemi
                const reader = new FileReader();
                reader.onload = function (event) {
                  const data = event.target.result;

                  const workbook = XLSX.read(data, { type: "binary" });
                  dispatch(setData(workbook));
                };
                reader.readAsBinaryString(file);
              });
          });
      } catch (error) {}
    }
  }, [jwtKey]);
};
