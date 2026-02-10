export interface AuftragInformation {
  paNumber: string;
  bgNumber: string;
  bgName: string;
  bgRevision: string;
  topQuantity: string;
  bottomQuantity: string;
  totalQuantity: string;
  category: string;
  firstSide: string;
}

export const fujiData: AuftragInformation = {
  bgNumber: "1127088",
  bgRevision: "2.0",
  paNumber: "184987",
  bgName: "MM5_16E_A_Vin_1_Degson",
  totalQuantity: "6",
  topQuantity: "0",
  bottomQuantity: "4",
  category: "T1B1",
  firstSide: "TOP",
};
export const iblData: AuftragInformation = {
  bgNumber: "1127653",
  bgRevision: "1.0",
  paNumber: "190644",
  bgName: "safelog5_av_LED_o_1_3c_5V_1ch",
  topQuantity: "228",
  totalQuantity: "0",
  bottomQuantity: "100",
  category: "T1B1",
  firstSide: "BOTTOM",
};
export const viscomData: AuftragInformation = {
  bgNumber: "1114804",
  bgRevision: "3.0",
  paNumber: "189658",
  bgName: "ASEA_60x45_du_LPM_3_ohneAUX_200mA_ADD",
  totalQuantity: "1188",
  topQuantity: "0",
  bottomQuantity: "999",
  category: "T1B1",
  firstSide: "BOTTOM",
};
