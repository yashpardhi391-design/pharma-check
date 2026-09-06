"use strict";

/* =========================
   PHARMACHECK AI
   FINAL WORKING ENGINE
========================= */

const DRUGS = {
  aspirin: "Aspirin",
  paracetamol: "Paracetamol",
  ibuprofen: "Ibuprofen",
  diclofenac: "Diclofenac",
  naproxen: "Naproxen",
  ketorolac: "Ketorolac",
  amoxicillin: "Amoxicillin",
  azithromycin: "Azithromycin",
  clarithromycin: "Clarithromycin",
  ciprofloxacin: "Ciprofloxacin",
  levofloxacin: "Levofloxacin",
  doxycycline: "Doxycycline",
  metronidazole: "Metronidazole",
  rifampicin: "Rifampicin",
  linezolid: "Linezolid",
  warfarin: "Warfarin",
  heparin: "Heparin",
  atenolol: "Atenolol",
  metoprolol: "Metoprolol",
  propranolol: "Propranolol",
  verapamil: "Verapamil",
  amlodipine: "Amlodipine",
  enalapril: "Enalapril",
  lisinopril: "Lisinopril",
  losartan: "Losartan",
  furosemide: "Furosemide",
  spironolactone: "Spironolactone",
  digoxin: "Digoxin",
  amiodarone: "Amiodarone",
  atorvastatin: "Atorvastatin",
  simvastatin: "Simvastatin",
  rosuvastatin: "Rosuvastatin",
  metformin: "Metformin",
  glimepiride: "Glimepiride",
  glipizide: "Glipizide",
  insulin: "Insulin",
  fluoxetine: "Fluoxetine",
  sertraline: "Sertraline",
  diazepam: "Diazepam",
  phenytoin: "Phenytoin",
  carbamazepine: "Carbamazepine",
  lithium: "Lithium",
  omeprazole: "Omeprazole",
  pantoprazole: "Pantoprazole",
  antacid: "Antacid",
  ondansetron: "Ondansetron",
  metoclopramide: "Metoclopramide",
  salbutamol: "Salbutamol",
  theophylline: "Theophylline",
  montelukast: "Montelukast",
  levothyroxine: "Levothyroxine",
  prednisolone: "Prednisolone",
  dexamethasone: "Dexamethasone",
  fluconazole: "Fluconazole",
  ketoconazole: "Ketoconazole",
  alcohol: "Alcohol",
  sildenafil: "Sildenafil",
  methotrexate: "Methotrexate"
};


/* =========================
   INTERACTION DATABASE
========================= */

const INTERACTIONS = {

  "aspirin|warfarin": {
    severity: "HIGH",
    score: 88,
    type: "Bleeding Risk",
    pathway: "Pharmacodynamic",
    risk: "Concurrent use may increase the risk of gastrointestinal and systemic bleeding.",
    moa: "Both agents can impair hemostasis through different mechanisms.",
    recommendation: "Clinical monitoring and verification with an authoritative interaction reference are recommended."
  },

  "alcohol|paracetamol": {
    severity: "HIGH",
    score: 85,
    type: "Hepatotoxicity Risk",
    pathway: "Pharmacodynamic",
    risk: "Concurrent exposure may increase hepatic safety concerns.",
    moa: "Alcohol exposure can alter hepatic metabolism and increase susceptibility to acetaminophen-related toxicity.",
    recommendation: "Avoid unsupervised concurrent use and verify patient-specific factors."
  },

  "atenolol|verapamil": {
    severity: "HIGH",
    score: 92,
    type: "Cardiovascular",
    pathway: "Pharmacodynamic",
    risk: "Combined effects may increase bradycardia, hypotension or conduction abnormalities.",
    moa: "Both agents can reduce cardiac rate or conduction.",
    recommendation: "Clinical monitoring is recommended."
  },

  "atorvastatin|clarithromycin": {
    severity: "HIGH",
    score: 82,
    type: "Pharmacokinetic",
    pathway: "CYP3A4 inhibition",
    risk: "Clarithromycin may increase atorvastatin exposure.",
    moa: "Enzyme inhibition can reduce statin metabolism.",
    recommendation: "Verify therapy and monitor for statin-related adverse effects."
  },

  "clarithromycin|simvastatin": {
    severity: "HIGH",
    score: 95,
    type: "Pharmacokinetic",
    pathway: "CYP3A4 inhibition",
    risk: "Clarithromycin can substantially increase simvastatin exposure.",
    moa: "CYP3A4 inhibition reduces simvastatin metabolism.",
    recommendation: "Requires professional verification before concurrent use."
  },

  "enalapril|spironolactone": {
    severity: "HIGH",
    score: 86,
    type: "Electrolyte",
    pathway: "Potassium retention",
    risk: "Concurrent use may increase hyperkalemia risk.",
    moa: "Both therapies can increase serum potassium.",
    recommendation: "Monitor potassium and renal function where clinically appropriate."
  },

  "lisinopril|spironolactone": {
    severity: "HIGH",
    score: 86,
    type: "Electrolyte",
    pathway: "Potassium retention",
    risk: "Concurrent use may increase hyperkalemia risk.",
    moa: "Both therapies can increase serum potassium.",
    recommendation: "Monitor potassium and renal function where clinically appropriate."
  },

  "amiodarone|warfarin": {
    severity: "HIGH",
    score: 84,
    type: "Anticoagulation",
    pathway: "Pharmacokinetic",
    risk: "Amiodarone can increase warfarin exposure and anticoagulant effect.",
    moa: "Metabolic inhibition can increase warfarin activity.",
    recommendation: "Verify anticoagulation monitoring requirements."
  },

  "metronidazole|warfarin": {
    severity: "HIGH",
    score: 87,
    type: "Anticoagulation",
    pathway: "Pharmacokinetic",
    risk: "Metronidazole may increase anticoagulant effect.",
    moa: "Metabolic interaction can increase warfarin exposure.",
    recommendation: "Verify INR monitoring and therapy with a qualified professional."
  },

  "ibuprofen|enalapril": {
    severity: "MODERATE",
    score: 58,
    type: "Renal / Blood Pressure",
    pathway: "Pharmacodynamic",
    risk: "NSAID use may reduce antihypertensive effect and affect renal function.",
    moa: "Prostaglandin inhibition can alter renal blood flow.",
    recommendation: "Use clinical monitoring and patient-specific assessment."
  },

  "ibuprofen|lithium": {
    severity: "HIGH",
    score: 82,
    type: "Lithium Toxicity",
    pathway: "Renal clearance",
    risk: "NSAIDs may increase lithium exposure.",
    moa: "Reduced renal lithium clearance may increase serum concentration.",
    recommendation: "Verify lithium monitoring requirements."
  },

  "digoxin|verapamil": {
    severity: "HIGH",
    score: 85,
    type: "Cardiac",
    pathway: "Pharmacokinetic / Pharmacodynamic",
    risk: "Combined use may increase cardiac adverse-effect risk.",
    moa: "Effects on cardiac conduction and digoxin exposure may overlap.",
    recommendation: "Professional monitoring is recommended."
  },

  "fluoxetine|linezolid": {
    severity: "HIGH",
    score: 94,
    type: "Serotonergic",
    pathway: "Pharmacodynamic",
    risk: "Concurrent exposure can increase serotonin toxicity risk.",
    moa: "Both therapies can increase serotonergic activity.",
    recommendation: "Requires professional verification."
  },

  "ciprofloxacin|theophylline": {
    severity: "HIGH",
    score: 83,
    type: "Pharmacokinetic",
    pathway: "CYP inhibition",
    risk: "Ciprofloxacin may increase theophylline exposure.",
    moa: "Reduced theophylline metabolism may increase systemic exposure.",
    recommendation: "Verify therapy and monitoring requirements."
  },

  "diazepam|alcohol": {
    severity: "HIGH",
    score: 96,
    type: "CNS Depression",
    pathway: "Pharmacodynamic",
    risk: "Combined CNS depressant effects may be dangerous.",
    moa: "Both substances depress central nervous system activity.",
    recommendation: "Avoid unsupervised concurrent use."
  },

  "aspirin|heparin": {
    severity: "HIGH",
    score: 91,
    type: "Bleeding Risk",
    pathway: "Pharmacodynamic",
    risk: "Concurrent anticoagulant and antiplatelet effects can increase bleeding risk.",
    moa: "Both agents impair hemostasis through different mechanisms.",
    recommendation: "Requires clinical monitoring."
  },

  "methotrexate|ibuprofen": {
    severity: "HIGH",
    score: 89,
    type: "Toxicity",
    pathway: "Renal clearance",
    risk: "NSAIDs may alter methotrexate clearance and increase toxicity concerns.",
    moa: "Renal elimination and protein-binding effects may contribute.",
    recommendation: "Professional verification is recommended."
  },

  "ketoconazole|simvastatin": {
    severity: "HIGH",
    score: 94,
    type: "Pharmacokinetic",
    pathway: "CYP3A4 inhibition",
    risk: "Ketoconazole can markedly increase simvastatin exposure.",
    moa: "Strong enzyme inhibition reduces statin metabolism.",
    recommendation: "Requires professional verification."
  },

  "amiodarone|digoxin": {
    severity: "HIGH",
    score: 86,
    type: "Cardiac",
    pathway: "Pharmacokinetic",
    risk: "Amiodarone may increase digoxin exposure.",
    moa: "Changes in digoxin disposition may increase systemic exposure.",
    recommendation: "Verify monitoring requirements."
  },

  "fluconazole|warfarin": {
    severity: "HIGH",
    score: 88,
    type: "Anticoagulation",
    pathway: "CYP inhibition",
    risk: "Fluconazole may increase warfarin effect.",
    moa: "Metabolic inhibition can increase warfarin exposure.",
    recommendation: "Verify anticoagulation monitoring."
  },

  "levothyroxine|antacid": {
    severity: "MODERATE",
    score: 55,
    type: "Absorption",
    pathway: "Gastrointestinal",
    risk: "Antacids may reduce levothyroxine absorption.",
    moa: "Binding or altered gastrointestinal conditions can reduce absorption.",
    recommendation: "Verify administration timing."
  },

  "insulin|propranolol": {
    severity: "MODERATE",
    score: 62,
    type: "Hypoglycemia",
    pathway: "Pharmacodynamic",
    risk: "Beta-blockade may alter recognition of hypoglycemia symptoms.",
    moa: "Beta-adrenergic effects can mask some warning symptoms.",
    recommendation: "Monitor according to clinical guidance."
  }
};


/* =========================
   HELPERS
========================= */

function normalizePair(a, b) {
  return [a, b].sort().join("|");
}

function get(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  const el = get(id);
  if (el) el.textContent = value;
}

function show(id) {
  const el = get(id);
  if (el) el.style.display = "";
}

function hide(id) {
  const el = get(id);
  if (el) el.style.display = "none";
}


/* =========================
   DRUG SELECTS
========================= */

function populateDrugSelects() {

  const select1 = get("drug1");
  const select2 = get("drug2");

  if (!select1 || !select2) return;

  const options = Object.entries(DRUGS)
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([value, name]) =>
      `<option value="${value}">${name}</option>`
    )
    .join("");

  select1.innerHTML = `<option value="">Select primary drug</option>${options}`;
  select2.innerHTML = `<option value="">Select secondary drug</option>${options}`;
}


/* =========================
   SEARCH FILTER
========================= */

function setupSearch(searchId, selectId) {

  const search = get(searchId);
  const select = get(selectId);

  if (!search || !select) return;

  search.addEventListener("input", function () {

    const query = this.value.toLowerCase().trim();

    const current = select.value;

    select.innerHTML =
      `<option value="">${selectId === "drug1" ? "Select primary drug" : "Select secondary drug"}</option>`;

    Object.entries(DRUGS)
      .filter(([key, name]) =>
        !query ||
        key.includes(query) ||
        name.toLowerCase().includes(query)
      )
      .sort((a, b) => a[1].localeCompare(b[1]))
      .forEach(([key, name]) => {

        const option = document.createElement("option");
        option.value = key;
        option.textContent = name;

        select.appendChild(option);
      });

    if (DRUGS[current]) {
      select.value = current;
    }
  });
}


/* =========================
   RUN ANALYSIS
========================= */

function runAnalysis() {

  const drug1 = get("drug1")?.value;
  const drug2 = get("drug2")?.value;

  if (!drug1 || !drug2) {
    alert("Please select both primary and secondary drugs.");
    return;
  }

  if (drug1 === drug2) {
    alert("Please select two different drugs.");
    return;
  }

  const key = normalizePair(drug1, drug2);

  const interaction = INTERACTIONS[key];

  let result;

  if (interaction) {

    result = {
      ...interaction,
      title: `${DRUGS[drug1]} + ${DRUGS[drug2]}`
    };

  } else {

    result = {
      severity: "VERIFY",
      score: null,
      type: "No Local Interaction Rule",
      pathway: "Insufficient local data",
      risk: "This combination is not covered by the current local interaction rule set.",
      moa: "Absence of a local rule does not establish that the combination is safe.",
      recommendation: "Verify using an authoritative drug-interaction reference or qualified healthcare professional.",
      title: `${DRUGS[drug1]} + ${DRUGS[drug2]}`
    };
  }

  renderReport(result);
}


/* =========================
   REPORT
========================= */

function renderReport(result) {

  const placeholder = get("placeholderView");
  const report = get("reportView");

  if (placeholder) placeholder.style.display = "none";
  if (report) report.style.display = "block";

  setText("pairTitle", result.title);
  setText("severityPill", result.severity);
  setText("riskScore", result.score !== null ? `${result.score}/100` : "—");
  setText("interactionType", result.type);
  setText("pathway", result.pathway);
  setText("riskText", result.risk);
  setText("moaText", result.moa);
  setText("recommendationText", result.recommendation);

  const meter = get("riskMeter");

  if (meter) {
    meter.style.width =
      result.score !== null
        ? `${result.score}%`
        : "0%";
  }

  setText(
    "reportCode",
    `PC-${Date.now().toString().slice(-8)}`
  );

  const pill = get("severityPill");

  if (pill) {
    pill.className = "severity-pill";

    if (result.severity === "HIGH") {
      pill.classList.add("high");
    } else if (result.severity === "MODERATE") {
      pill.classList.add("moderate");
    } else {
      pill.classList.add("verify");
    }
  }

  if (report) {
    report.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================
   RESET
========================= */

function resetAnalysis() {

  if (get("drug1")) get("drug1").value = "";
  if (get("drug2")) get("drug2").value = "";

  if (get("patientAge")) get("patientAge").value = "adult";
  if (get("patientRenal")) get("patientRenal").value = "normal";
  if (get("patientHepatic")) get("patientHepatic").value = "normal";

  hide("reportView");
  show("placeholderView");
}


/* =========================
   PRESETS
========================= */

function applyPreset(value) {

  const parts = value.split("|");

  if (parts.length !== 2) return;

  const first = parts[0];
  const second = parts[1];

  if (get("drug1")) get("drug1").value = first;
  if (get("drug2")) get("drug2").value = second;

  runAnalysis();
}


/* =========================
   BUTTONS
========================= */

function setupButtons() {

  const run = get("runAnalysis");

  if (run) {
    run.addEventListener("click", function (event) {
      event.preventDefault();
      runAnalysis();
    });
  }

  const clear = get("clearBtn");

  if (clear) {
    clear.addEventListener("click", function (event) {
      event.preventDefault();
      resetAnalysis();
    });
  }

  document.querySelectorAll("[data-preset]").forEach(button => {

    button.addEventListener("click", function () {
      applyPreset(this.dataset.preset);
    });

  });
}


/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", function () {

  populateDrugSelects();

  setupSearch("search1", "drug1");
  setupSearch("search2", "drug2");

  setupButtons();

  console.log("PharmaCheck AI Engine: ONLINE");

});
