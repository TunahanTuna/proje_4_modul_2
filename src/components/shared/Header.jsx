import React, { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";

import Cookies from "universal-cookie";
import { Tabs } from "antd";
import axios from "axios";
import * as XLSX from "xlsx";
import { setData } from "../../store/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  cookieHelpers,
  texts,
  urlFilters,
} from "../../lib/constants/constants";

export default function Header() {
  const dispatch = useDispatch();

  const cookies = new Cookies();
  const test = cookies.get(urlFilters.corpList)?.map((data) => {
    return {
      key: data.caption,
      label: data.caption,
      url: data.url,
    };
  });
  const onChange = (key) => {
    const temp = test.find((data) => data.key == key);
    fetch(`${import.meta.env.VITE_BASE_URL}${temp?.url}`)
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
  };

  return (
    <div className="bg-neutral-50 h-16 px-4 flex justify-end gap-10 items-center border-b border-color-gray-100">
      <div className="flex bg-sky-900 rounded-lg p-1">
        <button>
          <a
            className="whitespace-nowrap  hover:no-underline"
            href="/"
            onClick={() => localStorage.removeItem(cookieHelpers.persistRoot)}
          >
            <span className="text-sky-100"> {texts.clear_data_text}</span>
          </a>
        </button>
      </div>
    </div>
  );
}
