/* =====================================================================
   PORTAL SETTINGS for the Business Central Portal
   Keep this file next to index.html. Edit it here - no change to
   index.html needed. NOTE: this file is publicly readable on GitHub,
   so never put prices or other confidential data in it.
   ===================================================================== */
window.PORTAL_PRESETS = {

  // Which entity a BC company belongs to (matched against the company name)
  companyGroups: [
    { group: "MY", match: "Sdn Bhd|\\bMY\\b" },
    { group: "SG", match: "Pte Ltd|\\bSG\\b" }
  ],

  // Registry dropdown (same order as your registry list)
  registries: ["I-REC", "TIGR", "I-REC/TIGR", "GEC", "Rehash", "JEPX", "BCX", "LGC",
               "T-REC", "K-REC", "AIB GO", "REGO", "NAR/MRET", "NAR", "MRET"],

  // Location Code by registry and entity. Leave "" until the code is known
  // (the user can still type a location on the order).
  locations: {
    "I-REC":      { MY: "IREC01", SG: "IREC02" },
    "TIGR":       { MY: "APX01",  SG: "APX02" },
    "I-REC/TIGR": { MY: "", SG: "" },
    "GEC":        { MY: "", SG: "" },
    "Rehash":     { MY: "", SG: "" },
    "JEPX":       { MY: "", SG: "" },
    "BCX":        { MY: "", SG: "" },
    "LGC":        { MY: "", SG: "" },
    "T-REC":      { MY: "", SG: "" },
    "K-REC":      { MY: "", SG: "" },
    "AIB GO":     { MY: "", SG: "" },
    "REGO":       { MY: "", SG: "" },
    "NAR/MRET":   { MY: "", SG: "" },
    "NAR":        { MY: "", SG: "" },
    "MRET":       { MY: "", SG: "" }
  },

  // VAT Bus. Posting Group choices (one per order; each line can be changed)
  vatGroups: {
    po: ["LOCAL", "EXPORT", "PURCH-ZP", "PURCH-TX"],
    so: ["LOCAL", "EXPORT", "SALES-SR", "SALES-ZR"]
  },

  // Global dimensions 1 and 2 are set on the ORDER HEADER (the lines inherit them).
  // BC rejects them when set line by line through the API.
  headerDimensions:     { shortcutDimension1Code: "Z_NA", shortcutDimension2Code: "Z_NA" },
  headerDimensionNames: { shortcutDimension1Code: "Cost center", shortcutDimension2Code: "Business line" },

  // Other dimensions are set on every item line (dimension name or code -> value)
  dimensions: { "Cost center": "Z_NA", "Business line": "Z_NA", "Sales owner": "Z_NA" },

  // Number series offered when creating a supplier / customer (needs Saxon Portal API v1.2).
  // Leave a list empty to keep "blank = auto / type it yourself".
  noSeries: {
    vendors: [
      { code: "PP-VENNO",  desc: "Vendor No." },
      { code: "PP-VENNO1", desc: "Vendor No. - Trade Vendor (M-TR…)" },
      { code: "PP-VENNO2", desc: "Vendor No. - Non Trade Vendor (M-NTR…)" }
    ],
    customers: []
  },

  // Dropdowns for new customers (posting groups + MyInvois). Needs Saxon Portal API v1.3.
  customerSetup: {
    genBusPostingGroups: [
      { code: "INTERCO", desc: "INTERCO" }, { code: "LOCAL", desc: "LOCAL" },
      { code: "OVERSEAS", desc: "OVERSEAS" }, { code: "RELATED", desc: "RELATED" } ],
    customerPostingGroups: [
      { code: "IC-NT-SAXONSG", desc: "Interco Non-Trade Receivables - Saxon Renewables Pte Ltd" },
      { code: "IC-T-SAXONSG",  desc: "Interco Trade Receivables - Saxon Renewables Pte Ltd" },
      { code: "NON-TRADE",     desc: "Non-Trade Receivables" },
      { code: "TRADE",         desc: "Trade Receivables" } ],
    idTypes: [ { code: "NRIC" }, { code: "PASSPORT" }, { code: "BRN" }, { code: "Army" } ],
    // Pending customers tab (buyers on RECs / Carbon Credit Stock-Out deals): starting values on the review form.
    // LOCAL when the customer's country = the company's (MY / SG), otherwise OVERSEAS.
    defaults: { genBusLocal: "LOCAL", genBusOverseas: "OVERSEAS", customerPostingGroup: "TRADE", idType: "BRN" }
  },

  // Pending suppliers / customers tabs (asset deals, and RECs / Carbon Credit deals).
  //   since:  deals approved BEFORE this date are not listed (set to the go-live date)
  //   noSeries: every deal supplier takes its number from this series (fixed); customers use BC's default
  //   staleCreatingMinutes: after this long, someone else may continue an interrupted Create
  supplierQueue: { since: "2026-11-10", noSeries: "PP-VENNO1", staleCreatingMinutes: 15 },

  // Dropdowns and defaults for asset suppliers. Needs Saxon Portal API v1.4.
  // Defaults: LOCAL when the supplier's country = the company's (MY / SG), otherwise OVERSEAS / EXPORT.
  // TODO: replace vendorPostingGroups with the real codes from BC (Vendor Posting Groups page).
  vendorSetup: {
    genBusPostingGroups: [
      { code: "INTERCO", desc: "INTERCO" }, { code: "LOCAL", desc: "LOCAL" },
      { code: "OVERSEAS", desc: "OVERSEAS" }, { code: "RELATED", desc: "RELATED" } ],
    vendorPostingGroups: [
      { code: "TRADE",     desc: "Trade Payables (placeholder - check BC)" },
      { code: "NON-TRADE", desc: "Non-Trade Payables (placeholder - check BC)" } ],
    vatBusPostingGroups: [ { code: "LOCAL" }, { code: "EXPORT" }, { code: "PURCH-ZP" }, { code: "PURCH-TX" } ],
    idTypes: [ { code: "NRIC" }, { code: "PASSPORT" }, { code: "BRN" }, { code: "Army" } ],
    defaults: { genBusLocal: "LOCAL", genBusOverseas: "OVERSEAS", vendorPostingGroup: "TRADE",
                vatBusLocal: "LOCAL", vatBusOverseas: "EXPORT" },
    localCurrency: { MY: "MYR", SG: "SGD" }   // vendor currency is left blank when the deal is in this
  },

  // Defaults for new part numbers (Costs & Posting)
  itemDefaults: { generalProductPostingGroupCode: "RECS", inventoryPostingGroupCode: "RECS" },

  // Payment Terms Code dropdown (supplier and customer)
  paymentTerms: [
    { group: "Calendar days", terms: [
      { code: "03D", desc: "3 DAYS" }, { code: "05D", desc: "5 DAYS" }, { code: "07D", desc: "7 DAYS" },
      { code: "10D", desc: "10 DAYS" }, { code: "14D", desc: "14 DAYS" }, { code: "15D", desc: "15 DAYS" },
      { code: "17D", desc: "17 DAYS" }, { code: "20D", desc: "20 DAYS" }, { code: "21D", desc: "21 DAYS" },
      { code: "28D", desc: "28 DAYS" }, { code: "30D", desc: "30 DAYS" }, { code: "42D", desc: "42 DAYS" },
      { code: "45D", desc: "45 DAYS" }, { code: "60D", desc: "60 DAYS" }, { code: "90D", desc: "90 DAYS" } ] },
    { group: "Days after invoice date", terms: [
      { code: "INV3", desc: "3 DAYS AFTER INVOICE DATE" }, { code: "INV5", desc: "5 DAYS AFTER INVOICE DATE" },
      { code: "INV7", desc: "7 DAYS AFTER INVOICE DATE" }, { code: "INV10", desc: "10 DAYS AFTER INVOICE DATE" },
      { code: "INV14", desc: "14 DAYS AFTER INVOICE DATE" }, { code: "INV15", desc: "15 DAYS AFTER INVOICE DATE" },
      { code: "INV20", desc: "20 DAYS AFTER INVOICE DATE" }, { code: "INV21", desc: "21 DAYS AFTER INVOICE DATE" },
      { code: "INV30", desc: "30 DAYS AFTER INVOICE DATE" }, { code: "INV45", desc: "45 DAYS AFTER INVOICE DATE" },
      { code: "INV60", desc: "60 DAYS AFTER INVOICE DATE" }, { code: "INV90", desc: "90 DAYS AFTER INVOICE DATE" } ] },
    { group: "Business days after invoice date", terms: [
      { code: "BINV3", desc: "3 BUSINESS DAYS AFTER INVOICE DATE" }, { code: "BINV5", desc: "5 BUSINESS DAYS AFTER INVOICE DATE" },
      { code: "BINV7", desc: "7 BUSINESS DAYS AFTER INVOICE DATE" }, { code: "7BD", desc: "7 BUSINESS DAYS" },
      { code: "BINV10", desc: "10 BUSINESS DAYS AFTER INVOICE DATE" }, { code: "BINV15", desc: "15 BUSINESS DAYS AFTER INVOICE DATE" },
      { code: "BINV20", desc: "20 BUSINESS DAYS AFTER INVOICE DATE" }, { code: "BINV21", desc: "21 BUSINESS DAYS AFTER INVOICE DATE" },
      { code: "BINV30", desc: "30 BUSINESS DAYS AFTER INVOICE DATE" } ] },
    { group: "Business days after delivery", terms: [
      { code: "BINV1", desc: "1 BUSINESS DAY AFTER DELIVERY DATE" },
      { code: "DEL10BD", desc: "10 BUSINESS DAYS AFTER DELIVERY" }, { code: "DEL15BD", desc: "15 BUSINESS DAYS AFTER DELIVERY" } ] },
    { group: "Advance / down payment", terms: [
      { code: "ADV100", desc: "100% IN ADVANCE" },
      { code: "DP10BL45", desc: "10% DOWN PAYMENT, 90% 45 DAYS AFTER B/L DATE" },
      { code: "DP10LC60", desc: "10% DOWN PAYMENT, 90% 60 DAYS L/C" },
      { code: "DP10LC90", desc: "10% DOWN PAYMENT, 90% 90 DAYS L/C" },
      { code: "DP15BL45", desc: "15% DP, 85% L/C OR TT 45 DAYS FROM B/L DATE" },
      { code: "DP20INV30", desc: "20% DOWN PAYMENT, 80% 30 DAYS AFTER INVOICE DATE" },
      { code: "DP25BL75", desc: "25% DOWN PAYMENT, 75% 7 DAYS AFTER INVOICE DATE" },
      { code: "DP30BC", desc: "30% DOWN PAYMENT, 70% BEFORE COLLECTION" },
      { code: "DP30DO30", desc: "30% DOWN PAYMENT, 70% 30 DAYS UPON DO DATE" },
      { code: "DP50BD", desc: "50% DOWN PAYMENT, 50% BEFORE DELIVERY" },
      { code: "DP50INV3", desc: "50% DOWN PAYMENT, 50% 3 DAYS AFTER INVOICE DATE" } ] }
  ],

  /* Comment templates. Gaps are written as {type:Label} or {type:Label=default}
     types: text, number, percent (adds %), date (1 JAN 2026),
            longdate (30 SEPTEMBER 2026), registry (dropdown), free (any text)
     hint "fx" shows price x rate under the comment. */
  comments: [
    { label: "FX rate", hint: "fx",
      text: "{text:Currency=USD} {number:Price} @ BNM RATE {number:BNM rate} ON {longdate:Rate date} AT MIDDLE RATE 1700" },
    { label: "Issuance fee",              text: "ISSUANCE FEE: USD {number:Fee}" },
    { label: "Redemption & issuance fee", text: "REDEMPTION & ISSUANCE FEE: USD {number:Fee}" },
    { label: "Buyer's profit sharing",    text: "BUYER'S PROFIT SHARING PERCENTAGE {percent:Percentage}" },
    { label: "Agreement dated",           text: "AGREEMENT DATED {date:Date}" },
    { label: "Purchase order dated",      text: "PURCHASE ORDER DATED {date:Date}" },
    { label: "Trade confirmation dated",  text: "TRADE CONFIRMATION DATED {date:Date}" },
    { label: "Transfer of RECs",          text: "TRANSFER OF RECS ({registry:Registry})" },
    { label: "Redemption of RECs",        text: "REDEMPTION OF RECS ({registry:Registry})" },
    { label: "Free text",                 text: "{free:Text}" }
  ]
};
