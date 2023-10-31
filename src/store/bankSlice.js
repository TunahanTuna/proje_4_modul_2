import { createSlice } from '@reduxjs/toolkit'
import { parse } from 'dotenv'
import * as XLSX from 'xlsx'
const initialState = {
    kredi_takip: [],
    limit_risk_teminat: [],
    teminat_yapisi: [],
    teminat_degeri: [],
    proje_limitleri: [],
    banka_limit_risk: [],
    yillik_odeme: [],
    kur_farki: [],
    teminat_mektubu: [],
    gayrimenkul_listeleri: []
}
export const bankSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setBank: (state, action) => {
            // XLSX.read(action.payload, { type: 'binary' })
            const workbook = action.payload

            // Çalışma sayfasını bir JSON verisine dönüştürün (başlıklar dahil)
            state.kredi_takip = dataParser(workbook, '11')
            state.limit_risk_teminat = dataParser(workbook, '2')
            state.teminat_yapisi = dataParser(workbook, '3')
            state.teminat_degeri = dataParser(workbook, '4')
            state.proje_limitleri = dataParser(workbook, '5')
            state.banka_limit_risk = dataParser(workbook, '6')
            state.yillik_odeme = dataParser(workbook, '7')
            state.kur_farki = dataParser(workbook, '8')
            state.teminat_mektubu = dataParser(workbook, '9')
            state.gayrimenkul_listeleri = dataParser(workbook, '10')
        }
    }
})
export const { setBank } = bankSlice.actions
export default bankSlice.reducer

function dataParser(workbook, sheetName) {
    const worksheet = workbook.Sheets[sheetName]

    return XLSX.utils.sheet_to_json(worksheet, { header: 1, raw: false }).map((dt) => {
        return dt.map((d) => {
            return typeof d != 'string' && Number.isInteger(d) != true ? d.toFixed(2) : d
        })
    })
}
