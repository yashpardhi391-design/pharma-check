"use strict";


/* ==========================================
   DRUG LIBRARY
========================================== */

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


/* ==========================================
   INTERACTION DATABASE
========================================== */

const INTERACTIONS = {

  "aspirin|warfarin": {
    severity: "HIGH",
    score: 88,
    type: "Bleeding Risk",
    pathway: "Pharmacodynamic",
    risk: "Concurrent use may increase bleeding risk.",
    moa: "Both agents affect hemostasis through different mechanisms.",
    recommendation: "Clinical monitoring and verification with an authoritative interaction reference are recommended."
  },

  "alcohol|paracetamol": {
    severity: "HIGH",
    score: 85,
    type: "Hepatic Safety",
    pathway: "Pharmacodynamic",
    risk: "Concurrent exposure may increase hepatic safety concerns.",
    moa: "Alcohol exposure can affect hepatic metabolism and susceptibility to acetaminophen toxicity.",
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
    pathway: "Renal Clearance",
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
    pathway: "Renal Clearance",
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


/* ==========================================
   CREATE DRUG OPTIONS
========================================== */

function loadDrugs() {

  const first = document.getElementById("drug1");
  const second = document.getElementById("drug2");

  if (!first || !second) {
    console.error("Drug selectors not found.");
    return;
  }

  const sorted = Object.entries(DRUGS)
    .sort((a, b) => a[1].localeCompare(b[1]));

  sorted.forEach(function(item) {

    const value = item[0];
    const name = item[1];

    const option1 = document.createElement("option");
    option1.value = value;
    option1.textContent = name;

    const option2 = document.createElement("option");
    option2.value = value;
    option2.textContent = name;

    first.appendChild(option1);
    second.appendChild(option2);

  });

}


/* ==========================================
   SEARCH
========================================== */

function setupSearch(searchId, selectId) {

  const search = document.getElementById(searchId);
  const select = document.getElementById(selectId);

  if (!search || !select) return;

  search.addEventListener("input", function() {

    const query = this.value
      .toLowerCase()
      .trim();

    const currentValue = select.value;

    select.innerHTML = "";

    const placeholder = document.createElement("option");

    placeholder.value = "";
    placeholder.textContent =
      selectId === "drug1"
        ? "Select primary drug"
        : "Select secondary drug";

    select.appendChild(placeholder);


    Object.entries(DRUGS)
      .filter(function(item) {

        const key = item[0];
        const name = item[1].toLowerCase();

        return (
          !query ||
          key.includes(query) ||
          name.includes(query)
        );

      })
      .sort((a, b) =>
        a[1].localeCompare(b[1])
      )
      .forEach(function(item) {

        const option = document.createElement("option");

        option.value = item[0];
        option.textContent = item[1];

        select.appendChild(option);

      });


    if (DRUGS[currentValue]) {
      select.value = currentValue;
    }

  });

}


/* ==========================================
   ANALYSIS
========================================== */

function runAnalysis() {

  console.log("RUN ANALYSIS CLICKED");


  const drug1 = document.getElementById("drug1").value;
  const drug2 = document.getElementById("drug2").value;


  if (!drug1 || !drug2) {

    alert(
      "Please select both primary and secondary drugs."
    );

    return;
  }


  if (drug1 === drug2) {

    alert(
      "Please select two different drugs."
    );

    return;
  }


  const key = [drug1, drug2]
    .sort()
    .join("|");


  let result = INTERACTIONS[key];


  if (!result) {

    result = {

      severity: "VERIFY",

      score: null,

      type: "No Local Interaction Rule",

      pathway: "Insufficient local data",

      risk:
        "This combination is not covered by the current local interaction rule set.",

      moa:
        "No local rule was found. This does not establish that the combination is safe.",

      recommendation:
        "Verify this combination using an authoritative drug-interaction reference or qualified healthcare professional."

    };

  }


  showReport(
    drug1,
    drug2,
    result
  );

}


/* ==========================================
   SHOW REPORT
========================================== */

function showReport(drug1, drug2, result) {

  const placeholder =
    document.getElementById("placeholderView");

  const report =
    document.getElementById("reportView");


  placeholder.style.display = "none";

  report.style.display = "block";


  document.getElementById("pairTitle").textContent =
    DRUGS[drug1] + " + " + DRUGS[drug2];


  const pill =
    document.getElementById("severityPill");


  pill.textContent =
    result.severity;


  pill.className =
    "severity " +
    result.severity.toLowerCase();


  document.getElementById("riskScore").textContent =
    result.score === null
      ? "—"
      : result.score + "/100";


  document.getElementById("interactionType").textContent =
    result.type;


  document.getElementById("pathway").textContent =
    result.pathway;


  document.getElementById("riskText").textContent =
    result.risk;


  document.getElementById("moaText").textContent =
    result.moa;


  document.getElementById("recommendationText").textContent =
    result.recommendation;


  const meter =
    document.getElementById("riskMeter");


  meter.style.width =
    result.score === null
      ? "0%"
      : result.score + "%";


  document.getElementById("reportCode").textContent =
    "PC-" +
    Math.floor(
      10000000 +
      Math.random() * 90000000
    );


  report.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* ==========================================
   RESET
========================================== */

function resetAnalysis() {

  document.getElementById("drug1").value = "";

  document.getElementById("drug2").value = "";

  document.getElementById("patientAge").value =
    "adult";

  document.getElementById("patientRenal").value =
    "normal";

  document.getElementById("patientHepatic").value =
    "normal";


  document.getElementById("placeholderView").style.display =
    "flex";

  document.getElementById("reportView").style.display =
    "none";

  document.getElementById("riskMeter").style.width =
    "0%";

}


/* ==========================================
   QUICK SCENARIOS
========================================== */

function setupScenarios() {

  document.querySelectorAll("[data-preset]")
    .forEach(function(button) {

      button.addEventListener("click", function() {

        const values =
          this.dataset.preset.split("|");


        document.getElementById("drug1").value =
          values[0];

        document.getElementById("drug2").value =
          values[1];


        runAnalysis();

      });

    });

}


/* ==========================================
   MATRIX
========================================== */

function renderMatrix(filter) {

  const grid =
    document.getElementById("matrixGrid");


  grid.innerHTML = "";


  Object.entries(INTERACTIONS)
    .filter(function(item) {

      const data = item[1];

      return (
        filter === "ALL" ||
        data.severity === filter
      );

    })
    .forEach(function(item) {

      const key = item[0];
      const data = item[1];

      const drugs = key.split("|");

      const card =
        document.createElement("div");

      card.className =
        "matrix-card";


      card.innerHTML = `

        <div class="matrix-top">

          <h4>
            ${DRUGS[drugs[0]]}
            +
            ${DRUGS[drugs[1]]}
          </h4>

          <span class="score-value">
            ${data.score}/100
          </span>

        </div>

        <p>
          ${data.type} · ${data.pathway}
        </p>

        <span class="matrix-severity ${data.severity.toLowerCase()}">
          ${data.severity}
        </span>

      `;


      grid.appendChild(card);

    });

}


/* ==========================================
   FILTERS
========================================== */

function setupFilters() {

  document.querySelectorAll(".filter")
    .forEach(function(button) {

      button.addEventListener("click", function() {

        document.querySelectorAll(".filter")
          .forEach(function(btn) {

            btn.classList.remove("active");

          });


        this.classList.add("active");


        renderMatrix(
          this.dataset.filter
        );

      });

    });

}


/* ==========================================
   START
========================================== */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    loadDrugs();

    setupSearch(
      "search1",
      "drug1"
    );

    setupSearch(
      "search2",
      "drug2"
    );

    setupScenarios();

    setupFilters();

    renderMatrix("ALL");

    console.log(
      "PharmaCheck AI ENGINE ONLINE"
    );

  }
);
