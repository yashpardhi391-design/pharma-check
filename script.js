// ============================================================
// PHARMACHECK AI — CLINICAL INTERACTION ENGINE
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // ------------------------------------------------------------
  // DRUG DATABASE
  // Practical B.Pharm-aligned master library
  // ------------------------------------------------------------

  const pharmaDatabase = [
    // =========================
    // ANALGESICS / NSAIDs
    // =========================
    {
      id: "aspirin",
      name: "Aspirin",
      generic: "Acetylsalicylic acid",
      class: "NSAID / Antiplatelet",
      category: "Analgesic",
      year: "Year 2–3",
      mechanism: "Irreversible COX inhibition and reduced thromboxane A2 formation",
      indications: "Pain, fever, cardiovascular antiplatelet therapy"
    },
    {
      id: "paracetamol",
      name: "Paracetamol",
      generic: "Acetaminophen",
      class: "Analgesic / Antipyretic",
      category: "Analgesic",
      year: "Year 2–3",
      mechanism: "Central analgesic and antipyretic action",
      indications: "Pain and fever"
    },
    {
      id: "ibuprofen",
      name: "Ibuprofen",
      generic: "Ibuprofen",
      class: "NSAID",
      category: "Analgesic",
      year: "Year 2–3",
      mechanism: "Reversible COX inhibition",
      indications: "Pain, fever and inflammation"
    },
    {
      id: "diclofenac",
      name: "Diclofenac",
      generic: "Diclofenac",
      class: "NSAID",
      category: "Analgesic",
      year: "Year 2–3",
      mechanism: "Cyclooxygenase inhibition",
      indications: "Pain and inflammatory conditions"
    },
    {
      id: "naproxen",
      name: "Naproxen",
      generic: "Naproxen",
      class: "NSAID",
      category: "Analgesic",
      year: "Year 2–3",
      mechanism: "COX-1 and COX-2 inhibition",
      indications: "Pain and inflammation"
    },
    {
      id: "ketorolac",
      name: "Ketorolac",
      generic: "Ketorolac",
      class: "NSAID",
      category: "Analgesic",
      year: "Year 3",
      mechanism: "Prostaglandin synthesis inhibition",
      indications: "Short-term moderate to severe pain"
    },

    // =========================
    // ANTIBIOTICS
    // =========================
    {
      id: "amoxicillin",
      name: "Amoxicillin",
      generic: "Amoxicillin",
      class: "Penicillin antibiotic",
      category: "Antibiotic",
      year: "Year 3",
      mechanism: "Inhibits bacterial cell-wall synthesis",
      indications: "Bacterial infections"
    },
    {
      id: "azithromycin",
      name: "Azithromycin",
      generic: "Azithromycin",
      class: "Macrolide",
      category: "Antibiotic",
      year: "Year 3",
      mechanism: "Binds to 50S ribosomal subunit",
      indications: "Respiratory and other bacterial infections"
    },
    {
      id: "clarithromycin",
      name: "Clarithromycin",
      generic: "Clarithromycin",
      class: "Macrolide",
      category: "Antibiotic",
      year: "Year 3",
      mechanism: "Inhibits bacterial protein synthesis",
      indications: "Respiratory and bacterial infections"
    },
    {
      id: "ciprofloxacin",
      name: "Ciprofloxacin",
      generic: "Ciprofloxacin",
      class: "Fluoroquinolone",
      category: "Antibiotic",
      year: "Year 3",
      mechanism: "Inhibits bacterial DNA gyrase and topoisomerase IV",
      indications: "Bacterial infections"
    },
    {
      id: "levofloxacin",
      name: "Levofloxacin",
      generic: "Levofloxacin",
      class: "Fluoroquinolone",
      category: "Antibiotic",
      year: "Year 3",
      mechanism: "Inhibits DNA gyrase and topoisomerase IV",
      indications: "Bacterial infections"
    },
    {
      id: "doxycycline",
      name: "Doxycycline",
      generic: "Doxycycline",
      class: "Tetracycline",
      category: "Antibiotic",
      year: "Year 3",
      mechanism: "Inhibits bacterial protein synthesis",
      indications: "Bacterial and atypical infections"
    },
    {
      id: "metronidazole",
      name: "Metronidazole",
      generic: "Metronidazole",
      class: "Nitroimidazole",
      category: "Antibiotic",
      year: "Year 3",
      mechanism: "Damages microbial DNA",
      indications: "Anaerobic and protozoal infections"
    },
    {
      id: "rifampicin",
      name: "Rifampicin",
      generic: "Rifampicin",
      class: "Rifamycin antibiotic",
      category: "Antibiotic",
      year: "Year 3–4",
      mechanism: "Inhibits bacterial RNA polymerase",
      indications: "Tuberculosis and other infections"
    },
    {
      id: "linezolid",
      name: "Linezolid",
      generic: "Linezolid",
      class: "Oxazolidinone",
      category: "Antibiotic",
      year: "Year 4",
      mechanism: "Inhibits bacterial protein synthesis",
      indications: "Serious Gram-positive infections"
    },

    // =========================
    // CARDIOVASCULAR
    // =========================
    {
      id: "warfarin",
      name: "Warfarin",
      generic: "Warfarin",
      class: "Anticoagulant",
      category: "Cardiovascular",
      year: "Year 3–4",
      mechanism: "Inhibits vitamin K-dependent clotting factor synthesis",
      indications: "Prevention of thromboembolic events"
    },
    {
      id: "heparin",
      name: "Heparin",
      generic: "Unfractionated heparin",
      class: "Anticoagulant",
      category: "Cardiovascular",
      year: "Year 3–4",
      mechanism: "Enhances antithrombin activity",
      indications: "Anticoagulation"
    },
    {
      id: "atenolol",
      name: "Atenolol",
      generic: "Atenolol",
      class: "Beta blocker",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Selective beta-1 adrenergic blockade",
      indications: "Hypertension and cardiovascular disorders"
    },
    {
      id: "metoprolol",
      name: "Metoprolol",
      generic: "Metoprolol",
      class: "Beta blocker",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Selective beta-1 adrenergic blockade",
      indications: "Hypertension and cardiac disorders"
    },
    {
      id: "propranolol",
      name: "Propranolol",
      generic: "Propranolol",
      class: "Non-selective beta blocker",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Blocks beta-1 and beta-2 receptors",
      indications: "Hypertension, arrhythmias and other conditions"
    },
    {
      id: "verapamil",
      name: "Verapamil",
      generic: "Verapamil",
      class: "Calcium channel blocker",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Blocks L-type calcium channels",
      indications: "Hypertension and arrhythmias"
    },
    {
      id: "amlodipine",
      name: "Amlodipine",
      generic: "Amlodipine",
      class: "Calcium channel blocker",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Blocks L-type calcium channels",
      indications: "Hypertension and angina"
    },
    {
      id: "enalapril",
      name: "Enalapril",
      generic: "Enalapril",
      class: "ACE inhibitor",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Reduces angiotensin II formation",
      indications: "Hypertension and heart failure"
    },
    {
      id: "lisinopril",
      name: "Lisinopril",
      generic: "Lisinopril",
      class: "ACE inhibitor",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "ACE inhibition",
      indications: "Hypertension and heart failure"
    },
    {
      id: "losartan",
      name: "Losartan",
      generic: "Losartan",
      class: "ARB",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Blocks angiotensin II AT1 receptors",
      indications: "Hypertension"
    },
    {
      id: "furosemide",
      name: "Furosemide",
      generic: "Furosemide",
      class: "Loop diuretic",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Inhibits sodium-potassium-chloride cotransporter",
      indications: "Edema and hypertension"
    },
    {
      id: "spironolactone",
      name: "Spironolactone",
      generic: "Spironolactone",
      class: "Potassium-sparing diuretic",
      category: "Cardiovascular",
      year: "Year 3",
      mechanism: "Aldosterone receptor antagonist",
      indications: "Heart failure and edema"
    },
    {
      id: "digoxin",
      name: "Digoxin",
      generic: "Digoxin",
      class: "Cardiac glycoside",
      category: "Cardiovascular",
      year: "Year 3–4",
      mechanism: "Inhibits Na+/K+-ATPase and increases cardiac contractility",
      indications: "Selected cardiac conditions"
    },
    {
      id: "amiodarone",
      name: "Amiodarone",
      generic: "Amiodarone",
      class: "Antiarrhythmic",
      category: "Cardiovascular",
      year: "Year 4",
      mechanism: "Primarily potassium channel blockade with multiple electrophysiologic effects",
      indications: "Cardiac arrhythmias"
    },

    // =========================
    // LIPID LOWERING
    // =========================
    {
      id: "atorvastatin",
      name: "Atorvastatin",
      generic: "Atorvastatin",
      class: "Statin",
      category: "Lipid lowering",
      year: "Year 3",
      mechanism: "HMG-CoA reductase inhibition",
      indications: "Hyperlipidemia"
    },
    {
      id: "simvastatin",
      name: "Simvastatin",
      generic: "Simvastatin",
      class: "Statin",
      category: "Lipid lowering",
      year: "Year 3",
      mechanism: "HMG-CoA reductase inhibition",
      indications: "Hyperlipidemia"
    },
    {
      id: "rosuvastatin",
      name: "Rosuvastatin",
      generic: "Rosuvastatin",
      class: "Statin",
      category: "Lipid lowering",
      year: "Year 3",
      mechanism: "HMG-CoA reductase inhibition",
      indications: "Hyperlipidemia"
    },

    // =========================
    // ANTIDIABETICS
    // =========================
    {
      id: "metformin",
      name: "Metformin",
      generic: "Metformin",
      class: "Biguanide",
      category: "Antidiabetic",
      year: "Year 3",
      mechanism: "Reduces hepatic glucose production and improves insulin sensitivity",
      indications: "Type 2 diabetes"
    },
    {
      id: "glimepiride",
      name: "Glimepiride",
      generic: "Glimepiride",
      class: "Sulfonylurea",
      category: "Antidiabetic",
      year: "Year 3",
      mechanism: "Stimulates pancreatic insulin release",
      indications: "Type 2 diabetes"
    },
    {
      id: "glipizide",
      name: "Glipizide",
      generic: "Glipizide",
      class: "Sulfonylurea",
      category: "Antidiabetic",
      year: "Year 3",
      mechanism: "Stimulates insulin secretion",
      indications: "Type 2 diabetes"
    },
    {
      id: "insulin",
      name: "Insulin",
      generic: "Human insulin / insulin analogues",
      class: "Hormone / Antidiabetic",
      category: "Antidiabetic",
      year: "Year 3–4",
      mechanism: "Promotes glucose uptake and lowers blood glucose",
      indications: "Diabetes mellitus"
    },

    // =========================
    // CNS
    // =========================
    {
      id: "fluoxetine",
      name: "Fluoxetine",
      generic: "Fluoxetine",
      class: "SSRI",
      category: "CNS",
      year: "Year 3–4",
      mechanism: "Selective serotonin reuptake inhibition",
      indications: "Depressive and anxiety disorders"
    },
    {
      id: "sertraline",
      name: "Sertraline",
      generic: "Sertraline",
      class: "SSRI",
      category: "CNS",
      year: "Year 3–4",
      mechanism: "Selective serotonin reuptake inhibition",
      indications: "Depressive and anxiety disorders"
    },
    {
      id: "diazepam",
      name: "Diazepam",
      generic: "Diazepam",
      class: "Benzodiazepine",
      category: "CNS",
      year: "Year 3",
      mechanism: "Enhances GABA-A receptor activity",
      indications: "Anxiety, seizures and muscle spasm"
    },
    {
      id: "phenytoin",
      name: "Phenytoin",
      generic: "Phenytoin",
      class: "Antiepileptic",
      category: "CNS",
      year: "Year 3–4",
      mechanism: "Voltage-gated sodium channel blockade",
      indications: "Seizure disorders"
    },
    {
      id: "carbamazepine",
      name: "Carbamazepine",
      generic: "Carbamazepine",
      class: "Antiepileptic",
      category: "CNS",
      year: "Year 3–4",
      mechanism: "Voltage-gated sodium channel blockade",
      indications: "Seizure disorders and neuralgia"
    },
    {
      id: "lithium",
      name: "Lithium",
      generic: "Lithium carbonate",
      class: "Mood stabilizer",
      category: "CNS",
      year: "Year 4",
      mechanism: "Modulates intracellular signaling pathways",
      indications: "Bipolar disorder"
    },

    // =========================
    // GI
    // =========================
    {
      id: "omeprazole",
      name: "Omeprazole",
      generic: "Omeprazole",
      class: "Proton pump inhibitor",
      category: "Gastrointestinal",
      year: "Year 3",
      mechanism: "Suppresses gastric acid secretion through proton-pump inhibition",
      indications: "Acid-related disorders"
    },
    {
      id: "pantoprazole",
      name: "Pantoprazole",
      generic: "Pantoprazole",
      class: "Proton pump inhibitor",
      category: "Gastrointestinal",
      year: "Year 3",
      mechanism: "H+/K+-ATPase inhibition",
      indications: "Acid-related disorders"
    },
    {
      id: "antacid",
      name: "Antacid",
      generic: "Aluminium/Magnesium hydroxide preparation",
      class: "Antacid",
      category: "Gastrointestinal",
      year: "Year 2–3",
      mechanism: "Neutralizes gastric acid",
      indications: "Heartburn and dyspepsia"
    },
    {
      id: "ondansetron",
      name: "Ondansetron",
      generic: "Ondansetron",
      class: "5-HT3 antagonist",
      category: "Gastrointestinal",
      year: "Year 3",
      mechanism: "Blocks serotonin 5-HT3 receptors",
      indications: "Nausea and vomiting"
    },
    {
      id: "metoclopramide",
      name: "Metoclopramide",
      generic: "Metoclopramide",
      class: "Prokinetic / Antiemetic",
      category: "Gastrointestinal",
      year: "Year 3",
      mechanism: "Dopamine receptor antagonism with prokinetic effects",
      indications: "Nausea and gastrointestinal motility disorders"
    },

    // =========================
    // RESPIRATORY
    // =========================
    {
      id: "salbutamol",
      name: "Salbutamol",
      generic: "Albuterol",
      class: "Beta-2 agonist",
      category: "Respiratory",
      year: "Year 3",
      mechanism: "Stimulates beta-2 adrenergic receptors",
      indications: "Bronchospasm and asthma"
    },
    {
      id: "theophylline",
      name: "Theophylline",
      generic: "Theophylline",
      class: "Methylxanthine",
      category: "Respiratory",
      year: "Year 3–4",
      mechanism: "Phosphodiesterase inhibition and adenosine receptor antagonism",
      indications: "Selected respiratory disorders"
    },
    {
      id: "montelukast",
      name: "Montelukast",
      generic: "Montelukast",
      class: "Leukotriene receptor antagonist",
      category: "Respiratory",
      year: "Year 3",
      mechanism: "Blocks cysteinyl leukotriene receptors",
      indications: "Asthma and allergic rhinitis"
    },

    // =========================
    // ENDOCRINE
    // =========================
    {
      id: "levothyroxine",
      name: "Levothyroxine",
      generic: "Levothyroxine",
      class: "Thyroid hormone",
      category: "Endocrine",
      year: "Year 3–4",
      mechanism: "Synthetic thyroxine replacement",
      indications: "Hypothyroidism"
    },
    {
      id: "prednisolone",
      name: "Prednisolone",
      generic: "Prednisolone",
      class: "Corticosteroid",
      category: "Endocrine",
      year: "Year 3",
      mechanism: "Glucocorticoid receptor activation",
      indications: "Inflammatory and immune conditions"
    },
    {
      id: "dexamethasone",
      name: "Dexamethasone",
      generic: "Dexamethasone",
      class: "Corticosteroid",
      category: "Endocrine",
      year: "Year 3–4",
      mechanism: "Glucocorticoid receptor activation",
      indications: "Inflammatory and immune conditions"
    },

    // =========================
    // ANTIFUNGAL
    // =========================
    {
      id: "fluconazole",
      name: "Fluconazole",
      generic: "Fluconazole",
      class: "Azole antifungal",
      category: "Antifungal",
      year: "Year 3–4",
      mechanism: "Inhibits fungal ergosterol synthesis",
      indications: "Fungal infections"
    },
    {
      id: "ketoconazole",
      name: "Ketoconazole",
      generic: "Ketoconazole",
      class: "Azole antifungal",
      category: "Antifungal",
      year: "Year 3–4",
      mechanism: "Inhibits fungal ergosterol synthesis",
      indications: "Fungal infections"
    },

    // =========================
    // SPECIAL / OTHER
    // =========================
    {
      id: "alcohol",
      name: "Alcohol",
      generic: "Ethanol",
      class: "CNS depressant",
      category: "Other",
      year: "Clinical relevance",
      mechanism: "Central nervous system depressant; hepatic metabolism",
      indications: "Not a therapeutic drug"
    },
    {
      id: "sildenafil",
      name: "Sildenafil",
      generic: "Sildenafil",
      class: "PDE-5 inhibitor",
      category: "Urology",
      year: "Year 4",
      mechanism: "Inhibits phosphodiesterase-5",
      indications: "Erectile dysfunction and pulmonary hypertension"
    },
    {
      id: "methotrexate",
      name: "Methotrexate",
      generic: "Methotrexate",
      class: "Antimetabolite",
      category: "Antineoplastic / Immunomodulator",
      year: "Year 4",
      mechanism: "Folate pathway inhibition",
      indications: "Selected cancers and immune-mediated conditions"
    }
  ];

  // ------------------------------------------------------------
  // INTERACTION DATABASE
  // ------------------------------------------------------------

  const interactionDatabase = [
    {
      pair: ["aspirin", "warfarin"],
      severity: "HIGH",
      score: 88,
      type: "Bleeding risk",
      pathway: "Platelet inhibition + anticoagulation",
      risk: "Combined effects can increase the risk of clinically important bleeding.",
      moa: "Aspirin inhibits platelet aggregation while warfarin reduces vitamin K-dependent clotting factors.",
      recommendation: "Verify the combination, indication, bleeding risk and monitoring requirements with a qualified clinician or pharmacist."
    },
    {
      pair: ["paracetamol", "alcohol"],
      severity: "HIGH",
      score: 85,
      type: "Hepatotoxicity concern",
      pathway: "Hepatic metabolism",
      risk: "Concurrent use may increase concern for liver injury, particularly with excessive or chronic alcohol exposure.",
      moa: "Both substances involve hepatic metabolism and alcohol can alter pathways relevant to paracetamol toxicity.",
      recommendation: "Review alcohol exposure, total paracetamol intake and patient-specific liver risk with a healthcare professional."
    },
    {
      pair: ["ciprofloxacin", "antacid"],
      severity: "MODERATE",
      score: 58,
      type: "Reduced absorption",
      pathway: "Chelation / gastrointestinal absorption",
      risk: "Antacid components containing polyvalent cations can reduce ciprofloxacin absorption.",
      moa: "Ciprofloxacin can form poorly absorbed complexes with aluminium or magnesium.",
      recommendation: "Check administration timing and product-specific instructions with a pharmacist."
    },
    {
      pair: ["atenolol", "verapamil"],
      severity: "HIGH",
      score: 92,
      type: "Bradycardia / AV conduction",
      pathway: "Cardiac conduction",
      risk: "Combi
