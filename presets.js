/* =====================================================================
   PO PRESETS for the Business Central Portal
   Keep this file next to index.html. Edit it when a new contract or
   period starts - no change to index.html needed.

   Each preset is one reusable item-line pattern:
     id                  unique short id (no spaces)
     name                what users see in the Preset dropdown
     group               "MY" or "SG" - only shown for companies in that group
     active              false = hidden (kept for reference)
     item                default part no. ("" = user enters it)
     description         description base; the period is added behind it,
                         e.g. "... (TIGR) - JAN 26" or "... - JAN-JUN 26"
     year                2-digit year used in the period text
     from / to           default month range (JAN ... DEC)
     style               "monthly" | "quarterly" | "single"
     location            Location Code (APX01 / APX02 / IREC01)
     vatBusPostingGroup  set through the Saxon Portal API extension
     price               { currency: "USD" } -> user enters USD price on the PO;
                                            unit cost = USD x BNM rate (+ FX comment line)
                         { }                -> user enters the unit cost on the PO
                         (no prices are stored in this file - it is publicly readable)
     dimensions          dimension name or code -> value (merged with defaults)
   ===================================================================== */
window.PORTAL_PRESETS = {

  // Which companies belong to which group (matched against the company name)
  companyGroups: [
    { group: "MY", match: "Sdn Bhd|\\bMY\\b" },
    { group: "SG", match: "Pte Ltd|\\bSG\\b" }
  ],

  // Text at the end of the FX comment line
  fxMiddleRate: "1700",

  // Applied to every preset unless the preset overrides it
  defaults: {
    dimensions: { "Cost center": "Z_NA", "Business line": "Z_NA", "Sales owner": "Z_NA" }
  },

  presets: [
    /* ---------- MALAYSIA (Saxon Renewable Energy Sdn Bhd) ---------- */
    { id: "my-tigr-v26-h1", name: "MY Solar TIGR V26 - JAN-JUN", group: "MY",
      item: "", description: "MALAYSIA SOLAR RECS V26 (TIGR)", year: 26, from: "JAN", to: "JUN", style: "monthly",
      location: "APX01", vatBusPostingGroup: "LOCAL", price: { currency: "USD" } },

    { id: "my-tigr-v26-h2", name: "MY Solar TIGR V26 - JUL-DEC", group: "MY",
      item: "0459EDR_MYSLR_V26", description: "MALAYSIA SOLAR RECS V26 (TIGR)", year: 26, from: "JUL", to: "DEC", style: "monthly",
      location: "APX01", vatBusPostingGroup: "LOCAL", price: { currency: "USD" } },

    { id: "my-bgs-v26-monthly", name: "MY Biogas IREC V26 - monthly", group: "MY",
      item: "I0029_MYBGS_V26", description: "MALAYSIA BIOGAS RECS V26 (IREC)", year: 26, from: "JAN", to: "JUN", style: "monthly",
      location: "IREC01", vatBusPostingGroup: "LOCAL", price: { currency: "USD" } },

    { id: "my-bgs-v26-single", name: "MY Biogas IREC V26 - JAN-JUN one line", group: "MY",
      item: "I0033_MYBGS_V26", description: "MALAYSIA BIOGAS RECS V26 (IREC)", year: 26, from: "JAN", to: "JUN", style: "single",
      location: "IREC01", vatBusPostingGroup: "LOCAL", price: { currency: "USD" } },

    { id: "my-bgs-v25-monthly", name: "MY Biogas IREC V25 - JUL-DEC", group: "MY", active: false,
      item: "I0032_MYBGS_V25", description: "MALAYSIA BIOGAS RECS V25 (IREC)", year: 25, from: "JUL", to: "DEC", style: "monthly",
      location: "IREC01", vatBusPostingGroup: "LOCAL", price: { currency: "USD" } },

    /* ---------- SINGAPORE (Saxon Renewables Pte Ltd) ---------- */
    { id: "sg-resi-v26-single", name: "SG Resi TIGR V26 - JAN-JUN one line", group: "SG",
      item: "T3156_SGSLR_V26", description: "SINGAPORE SOLAR RECS V26 (TIGR)", year: 26, from: "JAN", to: "JUN", style: "single",
      location: "APX02", vatBusPostingGroup: "PURCH-ZP", price: {} },

    { id: "sg-resi-v26-monthly", name: "SG Resi TIGR V26 - monthly", group: "SG",
      item: "T3300_SGSLR_V26", description: "SINGAPORE SOLAR RECS V26 (TIGR)", year: 26, from: "JAN", to: "JUN", style: "monthly",
      location: "APX02", vatBusPostingGroup: "PURCH-ZP", price: {} },

    { id: "sg-com-v26-monthly", name: "SG Com TIGR V26 - monthly", group: "SG",
      item: "T5383_SGSLR_V26", description: "SINGAPORE SOLAR RECS V26 (TIGR)", year: 26, from: "JAN", to: "DEC", style: "monthly",
      location: "APX02", vatBusPostingGroup: "PURCH-TX", price: {} },

    { id: "sg-com-v26-quarterly", name: "SG Com TIGR V26 - quarterly", group: "SG",
      item: "T5508_SGSLR_V26", description: "SINGAPORE SOLAR RECS V26 (TIGR)", year: 26, from: "JAN", to: "SEP", style: "quarterly",
      location: "APX02", vatBusPostingGroup: "PURCH-TX", price: {} },

    { id: "sg-com-v25-monthly", name: "SG Com TIGR V25 - monthly", group: "SG", active: false,
      item: "T5382_SGSLR_V25", description: "SINGAPORE SOLAR RECS V25 (TIGR)", year: 25, from: "JUL", to: "DEC", style: "monthly",
      location: "APX02", vatBusPostingGroup: "PURCH-TX", price: {} },

    { id: "sg-com-v25-quarterly", name: "SG Com TIGR V25 - quarterly", group: "SG", active: false,
      item: "T5508_SGSLR_V25", description: "SINGAPORE SOLAR RECS V25 (TIGR)", year: 25, from: "JUL", to: "DEC", style: "quarterly",
      location: "APX02", vatBusPostingGroup: "PURCH-TX", price: {} }
  ]
};
