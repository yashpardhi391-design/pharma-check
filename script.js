/* =========================================================
   PHARMACHECK AI
   LOCAL PHARMACOVIGILANCE ENGINE
   No API / No external dependency
========================================================= */

"use strict";


/* =========================================================
   1. DRUG LIBRARY
========================================================= */

const DRUGS = {

    amiodarone: {
        name: "Amiodarone",
        generic: "Amiodarone",
        className: "Antiarrhythmic"
    },

    amlodipine: {
        name: "Amlodipine",
        generic: "Amlodipine",
        className: "Calcium-channel blocker"
    },

    amoxicillin: {
        name: "Amoxicillin",
        generic: "Amoxicillin",
        className: "Penicillin antibiotic"
    },

    antacid: {
        name: "Antacid",
        generic: "Aluminium / magnesium antacid",
        className: "Gastrointestinal"
    },

    aspirin: {
        name: "Aspirin",
        generic: "Acetylsalicylic acid",
        className: "NSAID / Antiplatelet"
    },

    atenolol: {
        name: "Atenolol",
        generic: "Atenolol",
        className: "Beta blocker"
    },

    atorvastatin: {
        name: "Atorvastatin",
        generic: "Atorvastatin",
        className: "Statin"
    },

    carbamazepine: {
        name: "Carbamazepine",
        generic: "Carbamazepine",
        className: "Antiepileptic"
    },

    ciprofloxacin: {
        name: "Ciprofloxacin",
        generic: "Ciprofloxacin",
        className: "Fluoroquinolone antibiotic"
    },

    clarithromycin: {
        name: "Clarithromycin",
        generic: "Clarithromycin",
        className: "Macrolide antibiotic"
    },

    dexamethasone: {
        name: "Dexamethasone",
        generic: "Dexamethasone",
        className: "Corticosteroid"
    },

    diazepam: {
        name: "Diazepam",
        generic: "Diazepam",
        className: "Benzodiazepine"
    },

    diclofenac: {
        name: "Diclofenac",
        generic: "Diclofenac",
        className: "NSAID"
    },

    digoxin: {
        name: "Digoxin",
        generic: "Digoxin",
        className: "Cardiac glycoside"
    },

    doxycycline: {
        name: "Doxycycline",
        generic: "Doxycycline",
        className: "Tetracycline antibiotic"
    },

    enalapril: {
        name: "Enalapril",
        generic: "Enalapril",
        className: "ACE inhibitor"
    },

    fluconazole: {
        name: "Fluconazole",
        generic: "Fluconazole",
        className: "Azole antifungal"
    },

    fluoxetine: {
        name: "Fluoxetine",
        generic: "Fluoxetine",
        className: "SSRI antidepressant"
    },

    furosemide: {
        name: "Furosemide",
        generic: "Furosemide",
        className: "Loop diuretic"
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

    heparin: {
        name: "Heparin",
        generic: "Unfractionated heparin",
        className: "Anticoagulant"
    },

    ibuprofen: {
        name: "Ibuprofen",
        generic: "Ibuprofen",
        className: "NSAID"
    },

    insulin: {
        name: "Insulin",
        generic: "Insulin",
        className: "Antidiabetic"
    },

    ketoconazole: {
        name: "Ketoconazole",
        generic: "Ketoconazole",
        className: "Azole antifungal"
    },

    ketorolac: {
        name: "Ketorolac",
        generic: "Ketorolac",
        className: "NSAID"
    },

    levofloxacin: {
        name: "Levofloxacin",
        generic: "Levofloxacin",
        className: "Fluoroquinolone antibiotic"
    },

    levothyroxine: {
        name: "Levothyroxine",
        generic: "Levothyroxine",
        className: "Thyroid hormone"
    },

    linezolid: {
        name: "Linezolid",
        generic: "Linezolid",
        className: "Oxazolidinone antibiotic"
    },

    lisinopril: {
        name: "Lisinopril",
        generic: "Lisinopril",
        className: "ACE inhibitor"
    },

    lithium: {
        name: "Lithium",
        generic: "Lithium",
        className: "Mood stabilizer"
    },

    losartan: {
        name: "Losartan",
        generic: "Losartan",
        className: "ARB"
    },

    metformin: {
        name: "Metformin",
        generic: "Metformin",
        className: "Biguanide"
    },

    metoclopramide: {
        name: "Metoclopramide",
        generic: "Metoclopramide",
        className: "Antiemetic / Prokinetic"
    },

    metoprolol: {
        name: "Metoprolol",
        generic: "Metoprolol",
        className: "Beta blocker"
    },

    metronidazole: {
        name: "Metronidazole",
        generic: "Metronidazole",
        className: "Nitroimidazole antibiotic"
    },

    montelukast: {
        name: "Montelukast",
        generic: "Montelukast",
        className: "Leukotriene receptor antagonist"
    },

    naproxen: {
        name: "Naproxen",
        generic: "Naproxen",
        className: "NSAID"
    },

    omeprazole: {
        name: "Omeprazole",
        generic: "Omeprazole",
        className: "Proton-pump inhibitor"
    },

    ondansetron: {
        name: "Ondansetron",
        generic: "Ondansetron",
        className: "5-HT3 antagonist"
    },

    pantoprazole: {
        name: "Pantoprazole",
        generic: "Pantoprazole",
        className: "Proton-pump inhibitor"
    },

    paracetamol: {
        name: "Paracetamol",
        generic: "Acetaminophen",
        className: "Analgesic / Antipyretic"
    },

    phenytoin: {
        name: "Phenytoin",
        generic: "Phenytoin",
        className: "Antiepileptic"
    },

    prednisolone: {
        name: "Prednisolone",
        generic: "Prednisolone",
        className: "Corticosteroid"
    },

    propranolol: {
        name: "Propranolol",
        generic: "Propranolol",
        className: "Beta blocker"
    },

    rifampicin: {
        name: "Rifampicin",
        generic: "Rifampin",
        className: "Rifamycin antibiotic"
    },

    rosuvastatin: {
        name: "Rosuvastatin",
        generic: "Rosuvastatin",
        className: "Statin"
    },

    salbutamol: {
        name: "Salbutamol",
        generic: "Albuterol / Salbutamol",
        className: "Beta-2 agonist"
    },

    sertraline: {
        name: "Sertraline",
        generic: "Sertraline",
        className: "SSRI antidepressant"
    },

    sildenafil: {
        name: "Sildenafil",
        generic: "Sildenafil",
        className: "PDE-5 inhibitor"
    },

    simvastatin: {
        name: "Simvastatin",
        generic: "Simvastatin",
        className: "Statin"
    },

    spironolactone: {
        name: "Spironolactone",
        generic: "Spironolactone",
        className: "Potassium-sparing diuretic"
    },

    theophylline: {
        name: "Theophylline",
        generic: "Theophylline",
        className: "Methylxanthine"
    },

    warfarin: {
        name: "Warfarin",
        generic: "Warfarin",
        className: "Anticoagulant"
    },

    alcohol: {
        name: "Alcohol",
        generic: "Ethanol",
        className: "CNS depressant / Substance"
    },

    methotrexate: {
        name: "Methotrexate",
        generic: "Methotrexate",
        className: "Antimetabolite / Immunosuppressant"
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
        pathway: "Bleeding risk",
        risk: "Concurrent antiplatelet and anticoagulant effects can increase bleeding risk.",
        moa: "Aspirin inhibits platelet aggregation while warfarin reduces vitamin-K-dependent coagulation factor activity.",
        recommendation: "Verify indication, patient-specific bleeding risk and monitoring requirements with an authoritative clinical reference."
    },

    {
        a: "paracetamol",
        b: "alcohol",
        severity: "HIGH",
        score: 85,
        type: "Toxicodynamic",
        pathway: "Hepatic safety",
        risk: "Repeated or excessive exposure may increase concern for hepatic toxicity.",
        moa: "Alcohol use can alter hepatic metabolism and may increase vulnerability to acetaminophen-related liver injury in certain settings.",
        recommendation: "Verify total acetaminophen exposure and alcohol-use context with a qualified clinician or pharmacist."
    },

    {
        a: "ciprofloxacin",
        b: "antacid",
        severity: "MODERATE",
        score: 58,
        type: "Pharmacokinetic",
        pathway: "Absorption",
        risk: "Antacid minerals can reduce absorption of ciprofloxacin when taken too closely together.",
        moa: "Chelation with polyvalent cations can decrease fluoroquinolone gastrointestinal absorption.",
        recommendation: "Check product-specific administration spacing instructions before use."
    },

    {
        a: "atenolol",
        b: "verapamil",
        severity: "HIGH",
        score: 92,
        type: "Pharmacodynamic",
        pathway: "Cardiac conduction",
        risk: "Combined negative chronotropic and conduction effects may increase risk of bradycardia or conduction abnormalities.",
        moa: "Beta blockade combined with calcium-channel blockade can produce additive effects on heart rate and AV-node conduction.",
        recommendation: "Clinical verification and monitoring are important, particularly in patients with conduction or rate-control concerns."
    },

    {
        a: "atorvastatin",
        b: "clarithromycin",
        severity: "HIGH",
        score: 82,
        type: "Pharmacokinetic",
        pathway: "CYP3A-mediated exposure",
        risk: "Clarithromycin can increase exposure to certain statins metabolized through CYP3A pathways.",
        moa: "Macrolide-mediated enzyme/transporter inhibition may increase statin exposure and adverse-effect risk.",
        recommendation: "Verify the specific statin, dose and alternative-antibiotic options with an authoritative reference."
    },

    {
        a: "simvastatin",
        b: "clarithromycin",
        severity: "HIGH",
        score: 95,
        type: "Pharmacokinetic",
        pathway: "CYP3A-mediated exposure",
        risk: "A clinically important increase in simvastatin exposure may occur.",
        moa: "Clarithromycin inhibits CYP3A-mediated metabolism and can substantially increase simvastatin exposure.",
        recommendation: "Verify current product labeling and clinical guidance before concurrent use."
    },

    {
        a: "enalapril",
        b: "spironolactone",
        severity: "HIGH",
        score: 78,
        type: "Pharmacodynamic",
        pathway: "Potassium balance",
        risk: "Combined renin-angiotensin system and potassium-sparing effects may increase hyperkalemia risk.",
        moa: "ACE inhibition reduces aldosterone activity while spironolactone antagonizes aldosterone-mediated potassium excretion.",
        recommendation: "Verify potassium and renal-function monitoring requirements."
    },

    {
        a: "lisinopril",
        b: "spironolactone",
        severity: "HIGH",
        score: 78,
        type: "Pharmacodynamic",
        pathway: "Potassium balance",
        risk: "Combined therapy can increase potassium elevation risk in susceptible patients.",
        moa: "Both therapies reduce mechanisms responsible for potassium excretion.",
        recommendation: "Verify renal function, potassium monitoring and indication with a clinician."
    },

    {
        a: "warfarin",
        b: "amiodarone",
        severity: "HIGH",
        score: 86,
        type: "Pharmacokinetic",
        pathway: "Anticoagulant exposure",
        risk: "Amiodarone can increase warfarin effect and alter anticoagulation control.",
        moa: "Amiodarone inhibits metabolic pathways involved in warfarin clearance.",
        recommendation: "Verify anticoagulation monitoring and dose-management guidance."
    },

    {
        a: "warfarin",
        b: "metronidazole",
        severity: "HIGH",
        score: 82,
        type: "Pharmacokinetic",
        pathway: "Anticoagulant exposure",
        risk: "Metronidazole can increase anticoagulant effect in patients receiving warfarin.",
        moa: "Metabolic inhibition can reduce clearance of warfarin and increase anticoagulant response.",
        recommendation: "Verify monitoring requirements using current clinical guidance."
    },

    {
        a: "warfarin",
        b: "rifampicin",
        severity: "HIGH",
        score: 84,
        type: "Pharmacokinetic",
        pathway: "Enzyme induction",
        risk: "Rifampicin can reduce warfarin exposure and alter anticoagulation control.",
        moa: "Potent enzyme induction can increase metabolism of warfarin.",
        recommendation: "Verify anticoagulation monitoring and management during therapy changes."
    },

    {
        a: "ibuprofen",
        b: "enalapril",
        severity: "MODERATE",
        score: 63,
        type: "Pharmacodynamic",
        pathway: "Renal / blood pressure",
        risk: "NSAID use can reduce antihypertensive response and may contribute to renal stress in susceptible patients.",
        moa: "Prostaglandin inhibition can affect renal perfusion and counter some antihypertensive effects.",
        recommendation: "Verify renal risk and blood-pressure monitoring, especially with prolonged NSAID use."
    },

    {
        a: "lithium",
        b: "ibuprofen",
        severity: "HIGH",
        score: 87,
        type: "Pharmacokinetic",
        pathway: "Renal clearance",
        risk: "NSAIDs can increase lithium exposure and toxicity risk.",
        moa: "Reduced renal prostaglandin-mediated blood flow can decrease lithium clearance.",
        recommendation: "Verify lithium monitoring and renal function before concurrent use."
    },

    {
        a: "digoxin",
        b: "verapamil",
        severity: "HIGH",
        score: 83,
        type: "Pharmacokinetic / Pharmacodynamic",
        pathway: "Cardiac / drug exposure",
        risk: "Verapamil may increase digoxin exposure and both can contribute to cardiac conduction effects.",
        moa: "Transporter and conduction effects may increase digoxin-related toxicity risk.",
        recommendation: "Verify monitoring requirements and patient-specific cardiac risk."
    },

    {
        a: "fluoxetine",
        b: "linezolid",
        severity: "HIGH",
        score: 91,
        type: "Pharmacodynamic",
        pathway: "Serotonergic toxicity",
        risk: "Concurrent serotonergic activity may increase concern for serotonin toxicity.",
        moa: "Linezolid has monoamine oxidase-inhibiting activity and fluoxetine increases serotonergic signaling.",
        recommendation: "Verify current prescribing guidance and appropriate management of serotonergic therapy."
    },

    {
        a: "phenytoin",
        b: "rifampicin",
        severity: "MODERATE",
        score: 67,
        type: "Pharmacokinetic",
        pathway: "Enzyme induction",
        risk: "Rifampicin may reduce exposure to phenytoin and alter seizure control.",
        moa: "Enzyme induction can increase metabolism of phenytoin.",
        recommendation: "Verify therapeutic monitoring and dose-management requirements."
    },

    {
        a: "levothyroxine",
        b: "antacid",
        severity: "MODERATE",
        score: 56,
        type: "Pharmacokinetic",
        pathway: "Absorption",
        risk: "Antacid components may reduce levothyroxine absorption when administration is too close.",
        moa: "Gastrointestinal binding and altered absorption can reduce thyroid-hormone exposure.",
        recommendation: "Verify administration spacing using the product-specific prescribing information."
    },

    {
        a: "insulin",
        b: "propranolol",
        severity: "MODERATE",
        score: 61,
        type: "Pharmacodynamic",
        pathway: "Glucose regulation",
        risk: "Beta blockade may alter recognition of some hypoglycemia symptoms.",
        moa: "Beta-adrenergic blockade can blunt certain adrenergic warning signs of hypoglycemia.",
        recommendation: "Verify patient monitoring and counseling requirements."
    },

    {
        a: "methotrexate",
        b: "ibuprofen",
        severity: "HIGH",
        score: 80,
        type: "Pharmacokinetic / Toxicity",
        pathway: "Renal clearance",
        risk: "NSAID co-administration can increase concern for methotrexate toxicity in certain patients.",
        moa: "NSAIDs may affect renal elimination and exposure to methotrexate.",
        recommendation: "Verify dose, indication, renal function and current interaction guidance."
    },

    {
        a: "ciprofloxacin",
        b: "theophylline",
        severity: "HIGH",
        score: 81,
        type: "Pharmacokinetic",
        pathway: "CYP1A2 inhibition",
        risk: "Ciprofloxacin can increase theophylline exposure and adverse-effect risk.",
        moa: "Ciprofloxacin inhibits CYP1A2-mediated metabolism of theophylline.",
        recommendation: "Verify monitoring and alternative therapy considerations."
    },

    {
        a: "ketoconazole",
        b: "simvastatin",
        severity: "HIGH",
        score: 94,
        type: "Pharmacokinetic",
        pathway: "CYP3A-mediated exposure",
        risk: "Ketoconazole can markedly increase exposure to simvastatin.",
        moa: "Strong CYP3A inhibition can reduce simvastatin metabolism.",
        recommendation: "Verify current labeling and avoid inappropriate concurrent use."
    },

    {
        a: "amiodarone",
        b: "digoxin",
        severity: "HIGH",
        score: 89,
        type: "Pharmacokinetic / Pharmacodynamic",
        pathway: "Cardiac / drug exposure",
        risk: "Amiodarone can increase digoxin exposure and both agents can contribute to cardiac effects.",
        moa: "Amiodarone can reduce digoxin clearance and has independent electrophysiologic effects.",
        recommendation: "Verify monitoring and dose-management requirements."
    },

    {
        a: "fluconazole",
        b: "warfarin",
        severity: "HIGH",
        score: 84,
        type: "Pharmacokinetic",
        pathway: "Anticoagulant exposure",
        risk: "Fluconazole can increase warfarin effect and alter anticoagulation control.",
        moa: "CYP inhibition can reduce metabolism of warfarin.",
        recommendation: "Verify INR monitoring and management using current clinical guidance."
    },

    {
        a: "diazepam",
        b: "alcohol",
        severity: "HIGH",
        score: 90,
        type: "Pharmacodynamic",
        pathway: "CNS depression",
        risk: "Combined central nervous system depressant effects can increase sedation and impairment.",
        moa: "Both substances enhance CNS depressant effects through different mechanisms.",
        recommendation: "Avoid assuming safety; verify the clinical context and appropriate counseling."
    },

    {
        a: "aspirin",
        b: "heparin",
        severity: "HIGH",
        score: 86,
        type: "Pharmacodynamic",
        pathway: "Bleeding risk",
        risk: "Combined antiplatelet and anticoagulant effects can increase bleeding risk.",
        moa: "Aspirin inhibits platelet function while heparin enhances antithrombin-mediated anticoagulation.",
        recommendation: "Verify indication and bleeding monitoring requirements."
    },

    {
        a: "carbamazepine",
        b: "warfarin",
        severity: "MODERATE",
        score: 65,
        type: "Pharmacokinetic",
        pathway: "Enzyme induction",
        risk: "Carbamazepine can alter warfarin metabolism and anticoagulation control.",
        moa: "Enzyme induction can increase m
