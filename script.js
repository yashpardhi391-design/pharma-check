/* =========================================================
   PHARMACHECK AI
   Pharmacovigilance Interaction Engine
========================================================= */

"use strict";


/* =========================================================
   1. DRUG LIBRARY
========================================================= */

const DRUGS = {

    aspirin: {
        name: "Aspirin",
        generic: "Acetylsalicylic acid",
        className: "NSAID / Antiplatelet"
    },

    paracetamol: {
        name: "Paracetamol",
        generic: "Acetaminophen",
        className: "Analgesic / Antipyretic"
    },

    ibuprofen: {
        name: "Ibuprofen",
        generic: "Ibuprofen",
        className: "NSAID"
    },

    diclofenac: {
        name: "Diclofenac",
        generic: "Diclofenac",
        className: "NSAID"
    },

    naproxen: {
        name: "Naproxen",
        generic: "Naproxen",
        className: "NSAID"
    },

    ketorolac: {
        name: "Ketorolac",
        generic: "Ketorolac",
        className: "NSAID"
    },

    amoxicillin: {
        name: "Amoxicillin",
        generic: "Amoxicillin",
        className: "Penicillin Antibiotic"
    },

    azithromycin: {
        name: "Azithromycin",
        generic: "Azithromycin",
        className: "Macrolide Antibiotic"
    },

    clarithromycin: {
        name: "Clarithromycin",
        generic: "Clarithromycin",
        className: "Macrolide Antibiotic"
    },

    ciprofloxacin: {
        name: "Ciprofloxacin",
        generic: "Ciprofloxacin",
        className: "Fluoroquinolone"
    },

    levofloxacin: {
        name: "Levofloxacin",
        generic: "Levofloxacin",
        className: "Fluoroquinolone"
    },

    doxycycline: {
        name: "Doxycycline",
        generic: "Doxycycline",
        className: "Tetracycline Antibiotic"
    },

    metronidazole: {
        name: "Metronidazole",
        generic: "Metronidazole",
        className: "Nitroimidazole Antibiotic"
    },

    rifampicin: {
        name: "Rifampicin",
        generic: "Rifampin",
        className: "Antitubercular"
    },

    linezolid: {
        name: "Linezolid",
        generic: "Linezolid",
        className: "Oxazolidinone Antibiotic"
    },

    warfarin: {
        name: "Warfarin",
        generic: "Warfarin",
        className: "Anticoagulant"
    },

    heparin: {
        name: "Heparin",
        generic: "Unfractionated Heparin",
        className: "Anticoagulant"
    },

    atenolol: {
        name: "Atenolol",
        generic: "Atenolol",
        className: "Beta Blocker"
    },

    metoprolol: {
        name: "Metoprolol",
        generic: "Metoprolol",
        className: "Beta Blocker"
    },

    propranolol: {
        name: "Propranolol",
        generic: "Propranolol",
        className: "Beta Blocker"
    },

    verapamil: {
        name: "Verapamil",
        generic: "Verapamil",
        className: "Calcium Channel Blocker"
    },

    amlodipine: {
        name: "Amlodipine",
        generic: "Amlodipine",
        className: "Calcium Channel Blocker"
    },

    enalapril: {
        name: "Enalapril",
        generic: "Enalapril",
        className: "ACE Inhibitor"
    },

    lisinopril: {
        name: "Lisinopril",
        generic: "Lisinopril",
        className: "ACE Inhibitor"
    },

    losartan: {
        name: "Losartan",
        generic: "Losartan",
        className: "ARB"
    },

    furosemide: {
        name: "Furosemide",
        generic: "Furosemide",
        className: "Loop Diuretic"
    },

    spironolactone: {
        name: "Spironolactone",
        generic: "Spironolactone",
        className: "Potassium-Sparing Diuretic"
    },

    digoxin: {
        name: "Digoxin",
        generic: "Digoxin",
        className: "Cardiac Glycoside"
    },

    amiodarone: {
        name: "Amiodarone",
        generic: "Amiodarone",
        className: "Antiarrhythmic"
    },

    atorvastatin: {
        name: "Atorvastatin",
        generic: "Atorvastatin",
        className: "Statin"
    },

    simvastatin: {
        name: "Simvastatin",
        generic: "Simvastatin",
        className: "Statin"
    },

    rosuvastatin: {
        name: "Rosuvastatin",
        generic: "Rosuvastatin",
        className: "Statin"
    },

    metformin: {
        name: "Metformin",
        generic: "Metformin",
        className: "Biguanide"
    },

    glimepiride: {
        name: "Glimepiride",
        generic: "Glimepiride",
        className: "Sulfonylurea"
    },

    glipizide: {
        name: "Glipizide",
        generic: "Glipizide",
        className: "Sulfonylurea"
    },

    insulin: {
        name: "Insulin",
        generic: "Human / Analog Insulin",
        className: "Antidiabetic"
    },

    fluoxetine: {
        name: "Fluoxetine",
        generic: "Fluoxetine",
        className: "SSRI"
    },

    sertraline: {
        name: "Sertraline",
        generic: "Sertraline",
        className: "SSRI"
    },

    diazepam: {
        name: "Diazepam",
        generic: "Diazepam",
        className: "Benzodiazepine"
    },

    phenytoin: {
        name: "Phenytoin",
        generic: "Phenytoin",
        className: "Antiepileptic"
    },

    carbamazepine: {
        name: "Carbamazepine",
        generic: "Carbamazepine",
        className: "Antiepileptic"
    },

    lithium: {
        name: "Lithium",
        generic: "Lithium",
        className: "Mood Stabilizer"
    },

    omeprazole: {
        name: "Omeprazole",
        generic: "Omeprazole",
        className: "Proton Pump Inhibitor"
    },

    pantoprazole: {
        name: "Pantoprazole",
        generic: "Pantoprazole",
        className: "Proton Pump Inhibitor"
    },

    antacid: {
        name: "Antacid",
        generic: "Aluminium / Magnesium Antacid",
        className: "Antacid"
    },

    ondansetron: {
        name: "Ondansetron",
        generic: "Ondansetron",
        className: "Antiemetic"
    },

    metoclopramide: {
        name: "Metoclopramide",
        generic: "Metoclopramide",
        className: "Prokinetic / Antiemetic"
    },

    salbutamol: {
        name: "Salbutamol",
        generic: "Albuterol",
        className: "Beta-2 Agonist"
    },

    theophylline: {
        name: "Theophylline",
        generic: "Theophylline",
        className: "Methylxanthine"
    },

    montelukast: {
        name: "Montelukast",
        generic: "Montelukast",
        className: "Leukotriene Receptor Antagonist"
    },

    levothyroxine: {
        name: "Levothyroxine",
        generic: "Levothyroxine",
        className: "Thyroid Hormone"
    },

    prednisolone: {
        name: "Prednisolone",
        generic: "Prednisolone",
        className: "Corticosteroid"
    },

    dexamethasone: {
        name: "Dexamethasone",
        generic: "Dexamethasone",
        className: "Corticosteroid"
    },

    fluconazole: {
        name: "Fluconazole",
        generic: "Fluconazole",
        className: "Azole Antifungal"
    },

    ketoconazole: {
        name: "Ketoconazole",
        generic: "Ketoconazole",
        className: "Azole Antifungal"
    },

    alcohol: {
        name: "Alcohol",
        generic: "Ethanol",
        className: "CNS Depressant / Substance"
    },

    sildenafil: {
        name: "Sildenafil",
        generic: "Sildenafil",
        className: "PDE-5 Inhibitor"
    },

    methotrexate: {
        name: "Methotrexate",
        generic: "Methotrexate",
        className: "Antimetabolite"
    }

};


/* =========================================================
   2. INTERACTION DATABASE
========================================================= */

const INTERACTIONS = [

    {
        a: "aspirin",
        b: "warfarin",
        severity: "HIGH",
        score: 88,
        type: "Pharmacodynamic",
        pathway: "Hemostasis / Platelet Function",
        risk: "Concurrent use can increase bleeding concern because antiplatelet and anticoagulant effects may be additive.",
        moa: "Aspirin inhibits platelet aggregation while warfarin reduces synthesis of vitamin-K-dependent clotting factors.",
        recommendation: "Clinical context and bleeding risk should be reviewed. Verify the indication and monitor appropriately."
    },

    {
        a: "paracetamol",
        b: "alcohol",
        severity: "HIGH",
        score: 85,
        type: "Toxicodynamic",
        pathway: "Hepatic Metabolism",
        risk: "Repeated or excessive exposure may increase concern for liver toxicity, particularly with additional risk factors.",
        moa: "Paracetamol is metabolized hepatically. Alcohol exposure can modify hepatic metabolic conditions and toxicity risk.",
        recommendation: "Review total exposure and patient risk factors. Avoid assuming safety solely from standard single-dose use."
    },

    {
        a: "ciprofloxacin",
        b: "antacid",
        severity: "MODERATE",
        score: 58,
        type: "Pharmacokinetic",
        pathway: "GI Absorption / Chelation",
        risk: "Antacids containing polyvalent cations can reduce absorption of ciprofloxacin.",
        moa: "Ciprofloxacin can form complexes with aluminium or magnesium ions, reducing gastrointestinal absorption.",
        recommendation: "Administration timing should be checked against an authoritative product reference."
    },

    {
        a: "atenolol",
        b: "verapamil",
        severity: "HIGH",
        score: 92,
        type: "Pharmacodynamic",
        pathway: "Cardiac Conduction",
        risk: "Combined effects may increase concern for bradycardia, hypotension or impaired AV conduction.",
        moa: "Atenolol reduces sympathetic cardiac stimulation while verapamil slows AV-node conduction.",
        recommendation: "Combination requires careful clinical assessment and monitoring when used together."
    },

    {
        a: "atorvastatin",
        b: "clarithromycin",
        severity: "HIGH",
        score: 82,
        type: "Pharmacokinetic",
        pathway: "CYP3A4",
        risk: "Clarithromycin can increase exposure to atorvastatin, potentially increasing adverse-effect risk.",
        moa: "Clarithromycin inhibits CYP3A4-mediated metabolism, which can increase concentrations of susceptible statins.",
        recommendation: "Verify the statin-antibiotic combination and consider an appropriate alternative strategy where clinically indicated."
    },

    {
        a: "simvastatin",
        b: "clarithromycin",
        severity: "HIGH",
        score: 95,
        type: "Pharmacokinetic",
        pathway: "CYP3A4",
        risk: "Strong interaction potential may substantially increase simvastatin exposure and muscle toxicity concern.",
        moa: "CYP3A4 inhibition reduces simvastatin metabolism and may increase systemic exposure.",
        recommendation: "This combination should be specifically verified using current authoritative interaction guidance."
    },

    {
        a: "enalapril",
        b: "spironolactone",
        severity: "HIGH",
        score: 84,
        type: "Pharmacodynamic",
        pathway: "Renin-Angiotensin-Aldosterone System",
        risk: "Combined potassium-retaining effects may increase hyperkalemia concern.",
        moa: "Enalapril reduces angiotensin-II-mediated aldosterone activity while spironolactone antagonizes aldosterone.",
        recommendation: "Renal function and potassium status should be considered in clinical assessment."
    },

    {
        a: "lisinopril",
        b: "spironolactone",
        severity: "HIGH",
        score: 84,
        type: "Pharmacodynamic",
        pathway: "RAAS / Potassium Balance",
        risk: "Both medicines can contribute to increased serum potassium.",
        moa: "ACE inhibition decreases aldosterone activity while spironolactone directly blocks aldosterone receptors.",
        recommendation: "Review renal function and potassium monitoring requirements."
    },

    {
        a: "warfarin",
        b: "amiodarone",
        severity: "HIGH",
        score: 86,
        type: "Pharmacokinetic",
        pathway: "CYP Enzyme Inhibition",
        risk: "Amiodarone can increase warfarin exposure and anticoagulant effect.",
        moa: "Amiodarone inhibits several metabolic pathways involved in warfarin clearance.",
        recommendation: "Verify anticoagulation monitoring requirements when therapy is combined."
    },

    {
        a: "warfarin",
        b: "metronidazole",
        severity: "HIGH",
        score: 83,
        type: "Pharmacokinetic",
        pathway: "Warfarin Metabolism",
        risk: "Metronidazole may increase anticoagulant effect and bleeding concern.",
        moa: "Metronidazole can inhibit metabolic pathways involved in clearance of certain warfarin components.",
        recommendation: "Clinical monitoring and authoritative interaction guidance should be consulted."
    },

    {
        a: "warfarin",
        b: "rifampicin",
        severity: "HIGH",
        score: 81,
        type: "Pharmacokinetic",
        pathway: "Enzyme Induction",
        risk: "Rifampicin can substantially alter warfarin exposure and anticoagulant response.",
        moa: "Rifampicin induces drug-metabolizing enzymes and transport pathways, increasing clearance of susceptible medicines.",
        recommendation: "Anticoagulation response should be clinically reviewed when rifampicin is initiated or stopped."
    },

    {
        a: "sildenafil",
        b: "nitroglycerin",
        severity: "HIGH",
        score: 99,
        type: "Pharmacodynamic",
        pathway: "Nitric Oxide / cGMP",
        risk: "PDE-5 inhibition combined with nitrate-mediated vasodilation can produce dangerous blood-pressure reduction.",
        moa: "Both pathways increase cGMP-mediated vasodilation.",
        recommendation: "This pair requires strict verification against authoritative prescribing guidance."
    },

    {
        a: "ibuprofen",
        b: "enalapril",
        severity: "MODERATE",
        score: 61,
        type: "Pharmacodynamic",
        pathway: "Renal Hemodynamics",
        risk: "NSAID exposure can reduce the blood-pressure and renal effects associated with ACE inhibitor therapy in susceptible patients.",
        moa: "NSAID-mediated prostaglandin inhibition can affect renal blood flow and sodium handling.",
        recommendation: "Consider patient renal status and verify the combination when clinically relevant."
    },

    {
        a: "lithium",
        b: "ibuprofen",
        severity: "HIGH",
        score: 87,
        type: "Pharmacokinetic",
        pathway: "Renal Lithium Clearance",
        risk: "NSAIDs may reduce renal lithium clearance and increase lithium exposure.",
        moa: "Reduced renal prostaglandin synthesis can alter renal blood flow and lithium handling.",
        recommendation: "Verify monitoring requirements and assess patient-specific risk factors."
    },

    {
        a: "digoxin",
        b: "verapamil",
        severity: "HIGH",
        score: 82,
        type: "Pharmacokinetic / Pharmacodynamic",
        pathway: "Cardiac Function / P-gp",
        risk: "Verapamil can increase digoxin exposure and may add to effects on cardiac conduction.",
        moa: "Verapamil can affect P-glycoprotein-mediated transport and AV-node conduction.",
        recommendation: "Clinical monitoring and current interaction references should be used."
    },

    {
        a: "fluoxetine",
        b: "linezolid",
        severity: "HIGH",
        score: 91,
        type: "Pharmacodynamic",
        pathway: "Serotonergic Signaling",
        risk: "Combined serotonergic activity may increase concern for serotonin toxicity.",
        moa: "Fluoxetine increases serotonergic signaling while linezolid has monoamine oxidase-inhibiting potential.",
        recommendation: "The combination requires careful clinical verification and appropriate monitoring."
    },

    {
        a: "phenytoin",
        b: "rifampicin",
        severity: "MODERATE",
        score: 68,
        type: "Pharmacokinetic",
        pathway: "Hepatic Enzyme Induction",
        risk: "Rifampicin may alter phenytoin metabolism and reduce or destabilize exposure.",
        moa: "Enzyme induction can increase metabolic clearance of susceptible medicines.",
        recommendation: "Verify therapeutic monitoring and dose-management requirements."
    },

    {
        a: "levothyroxine",
        b: "antacid",
        severity: "MODERATE",
        score: 55,
        type: "Pharmacokinetic",
        pathway: "GI Absorption",
        risk: "Antacid components may interfere with gastrointestinal absorption of levothyroxine.",
        moa: "Binding or altered gastrointestinal conditions can reduce levothyroxine absorption.",
        recommendation: "Administration timing and product-specific guidance should be checked."
    },

    {
        a: "insulin",
        b: "propranolol",
        severity: "MODERATE",
        score: 62,
        type: "Pharmacodynamic",
        pathway: "Glucose Regulation / Beta Blockade",
        risk: "Beta blockade may alter recognition of some symptoms of hypoglycemia.",
        moa: "Propranolol blocks beta-adrenergic signaling that contributes to several counter-regulatory responses.",
        recommendation: "Review glucose monitoring and patient-specific clinical considerations."
    },

    {
        a: "methotrexate",
        b: "ibuprofen",
        severity: "HIGH",
        score: 78,
        type: "Pharmacokinetic",
        pathway: "Renal Clearance",
        risk: "NSAIDs may alter renal handling of methotrexate and increase toxicity concern in susceptible settings.",
        moa: "Reduced renal clearance can increase systemic methotrexate exposure.",
        recommendation: "Verify dose, indication, renal status and interaction guidance before concurrent use."
    },

    {
        a: "ciprofloxacin",
        b: "theophylline",
        severity: "HIGH",
        score: 79,
        type: "Pharmacokinetic",
        pathway: "CYP1A2",
        risk: "Ciprofloxacin can increase theophylline exposure in susceptible patients.",
        moa: "Ciprofloxacin inhibits CYP1A2, an important pathway in theophylline metabolism.",
        recommendation: "Check current interaction guidance and monitoring requirements."
    },

    {
        a: "ketoconazole",
        b: "simvastatin",
        severity: "HIGH",
        score: 94,
        type: "Pharmacokinetic",
        pathway: "CYP3A4",
        risk: "Ketoconazole can markedly inhibit metabolism of simvastatin and increase exposure.",
        moa: "Strong CYP3A4 inhibition reduces simvastatin clearance.",
        recommendation: "This combination should be independently verified using current authoritative guidance."
    },

    {
        a: "amiodarone",
        b: "digoxin",
        severity: "HIGH",
        score: 80,
        type: "Pharmacokinetic",
        pathway: "P-glycoprotein / Cardiac",
        risk: "Amiodarone may increase digoxin exposure and can add to cardiac conduction effects.",
        moa: "Amiodarone can reduce digoxin clearance and influence cardiac electrophysiology.",
        recommendation: "Verify monitoring requirements and patient-specific risk factors."
    },

    {
        a: "fluconazole",
        b: "warfarin",
        severity: "HIGH",
        score: 85,
        type: "Pharmacokinetic",
        pathway: "CYP Enzyme Inhibition",
        risk: "Fluconazole can increase warfarin exposure and anticoagulant response.",
        moa: "Fluconazole inhibits hepatic metabolic pathways involved in warfarin clearance.",
        recommendation: "Anticoagulation status should be clinically monitored when appropriate."
    }

];


/* =========================================================
   3. DOM REFERENCES
========================================================= */

const $ = (id) => document.getElementById(id);

const search1 = $("search1");
const search2 = $("search2");

const drug1 = $("dru
