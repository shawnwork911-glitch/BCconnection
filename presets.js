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

  // Dimensions set on every item line (dimension name or code -> value)
  dimensions: { "Cost center": "Z_NA", "Business line": "Z_NA", "Sales owner": "Z_NA" },

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
