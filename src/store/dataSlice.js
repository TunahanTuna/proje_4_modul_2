import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import * as XLSX from "xlsx";
const initialState = {
  veriGirisi: [],
  taksitOdemeTablosu: [],
  amortismanTablosu: [],
  nakitAkim: [],
  netBugunkuDeger: [],
  netGelecektekiDeger: [],
  yenh: [],
  ki1: [],
  ki2: [],
  gos2: [],
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      // XLSX.read(action.payload, { type: 'binary' })
      const workbook = action.payload;

      state.veriGirisi = dataParser(workbook, "Veri_girisi");
      state.taksitOdemeTablosu = dataParser(workbook, "taksit_odeme_tablosu");
      state.amortismanTablosu = dataParser(workbook, "amortisman_tablosu");
      state.nakitAkim = dataParser(workbook, "Nakit_akim");
      state.netBugunkuDeger = dataParser(workbook, "Net_Bugunku_deger");
      state.netGelecektekiDeger = dataParser(workbook, "Net_Gelecekteki_deger");
      state.yenh = dataParser(workbook, "YENH");
      state.ki1 = dataParser(workbook, "KI1");
      state.ki2 = dataParser(workbook, "KI2");
      state.gos2 = dataParser(workbook, "GÖS2");
    },
  },
});
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;

function dataParser(workbook, sheetName) {
  const worksheet = workbook.Sheets[sheetName];

  return XLSX.utils.sheet_to_json(worksheet, { header: 1 }).map((dt) => {
    return dt.map((d) => {
      return typeof d != "string" && Number.isInteger(d) != true
        ? d.toFixed(2)
        : d;
    });
  });
}
function financialAnalysisParser(workbook, sheetName) {
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }).map((dt) => {
    return dt.map((d) => {
      return typeof d != "string" && Number.isInteger(d) != true
        ? d.toFixed(4)
        : d;
    });
  });

  return {
    donen_varliklar: {
      hazir_degerler: data.filter((dt, index) => index >= 0 && index <= 14),
      ticari_alacaklar: data.filter((dt, index) => index >= 16 && index <= 37),
      stoklar: data.filter((dt, index) => index >= 39 && index <= 75),
    },
    duran_varliklar: {
      ticari_alacaklar: data.filter((dt, index) => index >= 77 && index <= 107),
      maddi_duran_varliklar: data.filter(
        (dt, index) => index >= 109 && index <= 151
      ),
    },
    kisa_vadeli_yabanci_kaynaklar: {
      mali_borclar: data.filter((dt, index) => index >= 153 && index <= 165),
      ticari_borclar: data.filter((dt, index) => index >= 167 && index <= 188),
      yaygin_insaat_hakedis: data.filter(
        (dt, index) => index >= 190 && index <= 224
      ),
    },
    uzun_vadeli_yabanci_kaynaklar: {
      mali_borclar: data.filter((dt, index) => index >= 226 && index <= 236),
      ticari_borclar: data.filter((dt, index) => index >= 238 && index <= 271),
    },
    ozkaynaklar: data.filter((dt, index) => index >= 273 && index <= 305),
    gelir_hesaplari: data.filter((dt, index) => index >= 307 && index <= 318),
    maaliyet_hesaplari: data.filter(
      (dt, index) => index >= 320 && index <= 337
    ),
    diger_gelir_ve_gider_hesaplari: data.filter(
      (dt, index) => index >= 339 && index <= 364
    ),
    olagandisi_gelir_kar: data.filter(
      (dt, index) => index >= 367 && index <= 375
    ),
    donem_kar_hesaplari: data.filter(
      (dt, index) => index >= 378 && index <= 383
    ),
  };
}
