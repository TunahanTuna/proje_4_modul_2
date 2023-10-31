import DashboardSideBar from "../../components/shared/DashboardSideBar";

export const texts = {
  charts_main_title: "Grafikler",
  clear_data_text: "Çıkış Yap",
  succes_login_message: "Firma Verisi Alınıyor",
  error_data_fetch: "Veri Alınamadı",
  submenuOpenObject: {
    "finansal-tablolar": true,
    "oran-analizi": true,
    "faaliyet-raporlari": true,
    "mali-analiz-raporu": true,
  },
};

export const urlFilters = {
  corpList: "corpList",
  excelFileName: "excel.xlsx",
  excelFileType:
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  tokenHelper: "Bearer",
  excelFileFormatObject: {
    type: "binary",
    cellDates: true,
    dateNF: "dd/mm/yyyy;@",
  },
};

export const cookieHelpers = {
  persistRoot: "persist:root",
};
export const sidebarTabsHelpers = {
  sidebarItemsObject: [
    {
      key: "1",
      label: "Yatırım Geri Dönüş",
      children: <DashboardSideBar />,
    },
  ],
};
