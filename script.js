/* ============================================================
   PHARMACHECK AI — NEXT-GEN PHARMACOVIGILANCE ENGINE
   B.Pharm Year 1 → Year 4 Drug Knowledgebase
   Educational / Academic Demonstration
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================================
       DRUG DATABASE
       B.Pharm-oriented common drugs
       ============================================================ */

    const pharmaDatabase = [

        // ========================================================
        // B.PHARM YEAR 1 — BASIC / COMMONLY ENCOUNTERED DRUGS
        // ========================================================

        {
            id: "paracetamol",
            name: "Paracetamol",
            generic: "Paracetamol",
            class: "Analgesic / Antipyretic",
            category: "CNS",
            year: "B.Pharm Year 1",
            indications: ["Fever", "Pain"],
            mechanism: "Central inhibition of prostaglandin synthesis",
            route: "Oral / IV"
        },
        {
            id: "aspirin",
            name: "Aspirin",
            generic: "Acetylsalicylic Acid",
            class: "NSAID / Antiplatelet",
            category: "CNS / Cardiovascular",
            year: "B.Pharm Year 1",
            indications: ["Pain", "Fever", "Antiplatelet therapy"],
            mechanism: "Irreversible COX inhibition",
            route: "Oral"
        },
        {
            id: "ibuprofen",
            name: "Ibuprofen",
            generic: "Ibuprofen",
            class: "NSAID",
            category: "CNS",
            year: "B.Pharm Year 1",
            indications: ["Pain", "Inflammation", "Fever"],
            mechanism: "Reversible COX inhibition",
            route: "Oral"
        },
        {
            id: "diclofenac",
            name: "Diclofenac",
            generic: "Diclofenac",
            class: "NSAID",
            category: "CNS",
            year: "B.Pharm Year 1",
            indications: ["Pain", "Inflammation"],
            mechanism: "Cyclooxygenase inhibition",
            route: "Oral / Topical"
        },
        {
            id: "naproxen",
            name: "Naproxen",
            generic: "Naproxen",
            class: "NSAID",
            category: "CNS",
            year: "B.Pharm Year 1",
            indications: ["Pain", "Arthritis"],
            mechanism: "COX inhibition",
            route: "Oral"
        },
        {
            id: "cetirizine",
            name: "Cetirizine",
            generic: "Cetirizine",
            class: "Antihistamine",
            category: "Respiratory",
            year: "B.Pharm Year 1",
            indications: ["Allergy", "Rhinitis", "Urticaria"],
            mechanism: "Selective H1 receptor antagonist",
            route: "Oral"
        },
        {
            id: "loratadine",
            name: "Loratadine",
            generic: "Loratadine",
            class: "Antihistamine",
            category: "Respiratory",
            year: "B.Pharm Year 1",
            indications: ["Allergic rhinitis", "Urticaria"],
            mechanism: "Peripheral H1 receptor antagonist",
            route: "Oral"
        },
        {
            id: "chlorpheniramine",
            name: "Chlorpheniramine",
            generic: "Chlorpheniramine",
            class: "Antihistamine",
            category: "Respiratory",
            year: "B.Pharm Year 1",
            indications: ["Allergy"],
            mechanism: "H1 receptor blockade",
            route: "Oral"
        },
        {
            id: "omeprazole",
            name: "Omeprazole",
            generic: "Omeprazole",
            class: "Proton Pump Inhibitor",
            category: "Gastrointestinal",
            year: "B.Pharm Year 1",
            indications: ["GERD", "Peptic ulcer"],
            mechanism: "Irreversible H+/K+ ATPase inhibition",
            route: "Oral / IV"
        },
        {
            id: "famotidine",
            name: "Famotidine",
            generic: "Famotidine",
            class: "H2 Receptor Blocker",
            category: "Gastrointestinal",
            year: "B.Pharm Year 1",
            indications: ["GERD", "Ulcer"],
            mechanism: "Histamine H2 receptor blockade",
            route: "Oral / IV"
        },

        // ========================================================
        // B.PHARM YEAR 2 — PHARMACOLOGY / PHARMACEUTICAL CHEMISTRY
        // ========================================================

        {
            id: "warfarin",
            name: "Warfarin",
            generic: "Warfarin",
            class: "Anticoagulant",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Thromboembolism prevention", "Atrial fibrillation"],
            mechanism: "Vitamin K epoxide reductase inhibition",
            route: "Oral"
        },
        {
            id: "heparin",
            name: "Heparin",
            generic: "Unfractionated Heparin",
            class: "Anticoagulant",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Thrombosis", "Anticoagulation"],
            mechanism: "Enhances antithrombin activity",
            route: "IV / SC"
        },
        {
            id: "enoxaparin",
            name: "Enoxaparin",
            generic: "Enoxaparin",
            class: "LMWH",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["DVT prevention", "Thrombosis"],
            mechanism: "Potentiates antithrombin-mediated factor Xa inhibition",
            route: "SC"
        },
        {
            id: "clopidogrel",
            name: "Clopidogrel",
            generic: "Clopidogrel",
            class: "Antiplatelet",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["ACS", "Stroke prevention"],
            mechanism: "P2Y12 receptor inhibition",
            route: "Oral"
        },
        {
            id: "atorvastatin",
            name: "Atorvastatin",
            generic: "Atorvastatin",
            class: "Statin",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Hyperlipidemia", "Cardiovascular risk reduction"],
            mechanism: "HMG-CoA reductase inhibition",
            route: "Oral"
        },
        {
            id: "rosuvastatin",
            name: "Rosuvastatin",
            generic: "Rosuvastatin",
            class: "Statin",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Hyperlipidemia"],
            mechanism: "HMG-CoA reductase inhibition",
            route: "Oral"
        },
        {
            id: "amlodipine",
            name: "Amlodipine",
            generic: "Amlodipine",
            class: "Calcium Channel Blocker",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Hypertension", "Angina"],
            mechanism: "L-type calcium channel blockade",
            route: "Oral"
        },
        {
            id: "atenolol",
            name: "Atenolol",
            generic: "Atenolol",
            class: "Beta Blocker",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Hypertension", "Angina"],
            mechanism: "Selective beta-1 adrenergic receptor blockade",
            route: "Oral"
        },
        {
            id: "propranolol",
            name: "Propranolol",
            generic: "Propranolol",
            class: "Beta Blocker",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Hypertension", "Arrhythmia", "Migraine"],
            mechanism: "Non-selective beta adrenergic blockade",
            route: "Oral / IV"
        },
        {
            id: "metoprolol",
            name: "Metoprolol",
            generic: "Metoprolol",
            class: "Beta Blocker",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Hypertension", "Heart failure"],
            mechanism: "Beta-1 adrenergic blockade",
            route: "Oral / IV"
        },
        {
            id: "verapamil",
            name: "Verapamil",
            generic: "Verapamil",
            class: "Calcium Channel Blocker",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Arrhythmia", "Angina", "Hypertension"],
            mechanism: "L-type calcium channel blockade",
            route: "Oral / IV"
        },
        {
            id: "diltiazem",
            name: "Diltiazem",
            generic: "Diltiazem",
            class: "Calcium Channel Blocker",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Angina", "Arrhythmia", "Hypertension"],
            mechanism: "Calcium channel blockade",
            route: "Oral / IV"
        },
        {
            id: "enalapril",
            name: "Enalapril",
            generic: "Enalapril",
            class: "ACE Inhibitor",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Hypertension", "Heart failure"],
            mechanism: "ACE inhibition",
            route: "Oral"
        },
        {
            id: "losartan",
            name: "Losartan",
            generic: "Losartan",
            class: "ARB",
            category: "Cardiovascular",
            year: "B.Pharm Year 2",
            indications: ["Hypertension", "Heart failure"],
            mechanism: "AT1 receptor blockade",
            route: "Oral"
        },
        {
            id: "furosemide",
            name: "Furosemide",
            generic: "Furosemide",
            class: "Loop Diuretic",
            category: "Cardiovascular / Renal",
            year: "B.Pharm Year 2",
            indications: ["Edema", "Hypertension"],
            mechanism: "Na-K-2Cl cotransporter inhibition",
            route: "Oral / IV"
        },
        {
            id: "spironolactone",
            name: "Spironolactone",
            generic: "Spironolactone",
            class: "Potassium-Sparing Diuretic",
            category: "Cardiovascular / Renal",
            year: "B.Pharm Year 2",
            indications: ["Heart failure", "Edema"],
            mechanism: "Aldosterone receptor antagonism",
            route: "Oral"
        },

        // ========================================================
        // ANTIMICROBIALS
        // ========================================================

        {
            id: "amoxicillin",
            name: "Amoxicillin",
            generic: "Amoxicillin",
            class: "Penicillin Antibiotic",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Bacterial infections"],
            mechanism: "Inhibits bacterial cell-wall synthesis",
            route: "Oral / IV"
        },
        {
            id: "ampicillin",
            name: "Ampicillin",
            generic: "Ampicillin",
            class: "Penicillin Antibiotic",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Bacterial infections"],
            mechanism: "Inhibits bacterial cell-wall synthesis",
            route: "Oral / IV"
        },
        {
            id: "azithromycin",
            name: "Azithromycin",
            generic: "Azithromycin",
            class: "Macrolide Antibiotic",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Respiratory infections"],
            mechanism: "50S ribosomal subunit inhibition",
            route: "Oral / IV"
        },
        {
            id: "clarithromycin",
            name: "Clarithromycin",
            generic: "Clarithromycin",
            class: "Macrolide Antibiotic",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Respiratory infections", "H. pylori"],
            mechanism: "50S ribosomal subunit inhibition",
            route: "Oral"
        },
        {
            id: "ciprofloxacin",
            name: "Ciprofloxacin",
            generic: "Ciprofloxacin",
            class: "Fluoroquinolone",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Bacterial infections"],
            mechanism: "DNA gyrase and topoisomerase IV inhibition",
            route: "Oral / IV"
        },
        {
            id: "levofloxacin",
            name: "Levofloxacin",
            generic: "Levofloxacin",
            class: "Fluoroquinolone",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Respiratory infections", "UTI"],
            mechanism: "Topoisomerase inhibition",
            route: "Oral / IV"
        },
        {
            id: "doxycycline",
            name: "Doxycycline",
            generic: "Doxycycline",
            class: "Tetracycline",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Bacterial infections"],
            mechanism: "30S ribosomal subunit inhibition",
            route: "Oral / IV"
        },
        {
            id: "metronidazole",
            name: "Metronidazole",
            generic: "Metronidazole",
            class: "Nitroimidazole",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Anaerobic infections", "Protozoal infections"],
            mechanism: "Disrupts microbial DNA",
            route: "Oral / IV"
        },
        {
            id: "rifampicin",
            name: "Rifampicin",
            generic: "Rifampicin",
            class: "Antitubercular",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Tuberculosis"],
            mechanism: "Bacterial RNA polymerase inhibition",
            route: "Oral"
        },
        {
            id: "isoniazid",
            name: "Isoniazid",
            generic: "Isoniazid",
            class: "Antitubercular",
            category: "Anti-infective",
            year: "B.Pharm Year 2",
            indications: ["Tuberculosis"],
            mechanism: "Inhibits mycolic acid synthesis",
            route: "Oral"
        },

        // ========================================================
        // CNS / PSYCHIATRY
        // ========================================================

        {
            id: "diazepam",
            name: "Diazepam",
            generic: "Diazepam",
            class: "Benzodiazepine",
            category: "CNS",
            year: "B.Pharm Year 2",
            indications: ["Anxiety", "Seizures"],
            mechanism: "Enhances GABA-A receptor activity",
            route: "Oral / IV"
        },
        {
            id: "alprazolam",
            name: "Alprazolam",
            generic: "Alprazolam",
            class: "Benzodiazepine",
            category: "CNS",
            year: "B.Pharm Year 2",
            indications: ["Anxiety disorders"],
            mechanism: "Enhances GABA-A activity",
            route: "Oral"
        },
        {
            id: "clonazepam",
            name: "Clonazepam",
            generic: "Clonazepam",
            class: "Benzodiazepine",
            category: "CNS",
            year: "B.Pharm Year 2",
            indications: ["Seizures", "Panic disorder"],
            mechanism: "Enhances GABA-A activity",
            route: "Oral"
        },
        {
            id: "fluoxetine",
            name: "Fluoxetine",
            generic: "Fluoxetine",
            class: "SSRI",
            category: "CNS",
            year: "B.Pharm Year 2",
            indications: ["Depression", "OCD"],
            mechanism: "Selective serotonin reuptake inhibition",
            route: "Oral"
        },
        {
            id: "sertraline",
            name: "Sertraline",
            generic: "Sertraline",
            class: "SSRI",
            category: "CNS",
            year: "B.Pharm Year 2",
            indications: ["Depression", "Anxiety"],
            mechanism: "Selective serotonin reuptake inhibition",
            route: "Oral"
        },
        {
            id: "phenytoin",
            name: "Phenytoin",
            generic: "Phenytoin",
            class: "Antiepileptic",
            category: "CNS",
            year: "B.Pharm Year 2",
            indications: ["Seizures"],
            mechanism: "Voltage-gated sodium channel blockade",
            route: "Oral / IV"
        },
        {
            id: "valproate",
            name: "Sodium Valproate",
            generic: "Valproic Acid / Sodium Valproate",
            class: "Antiepileptic",
            category: "CNS",
            year: "B.Pharm Year 2",
            indications: ["Epilepsy", "Bipolar disorder"],
            mechanism: "Multiple mechanisms including increased GABA activity",
            route: "Oral / IV"
        },
        {
            id: "carbamazepine",
            name: "Carbamazepine",
            generic: "Carbamazepine",
            class: "Antiepileptic",
            category: "CNS",
            year: "B.Pharm Year 2",
            indications: ["Epilepsy", "Trigeminal neuralgia"],
            mechanism: "Voltage-gated sodium channel blockade",
            route: "Oral"
        },

        // ========================================================
        // B.PHARM YEAR 3 — ENDOCRINE / GI / RESPIRATORY
        // ========================================================

        {
            id: "metformin",
            name: "Metformin",
            generic: "Metformin",
            class: "Biguanide",
            category: "Antidiabetic",
            year: "B.Pharm Year 3",
            indications: ["Type 2 diabetes"],
            mechanism: "Reduces hepatic glucose production and improves insulin sensitivity",
            route: "Oral"
        },
        {
            id: "glimepiride",
            name: "Glimepiride",
            generic: "Glimepiride",
            class: "Sulfonylurea",
            category: "Antidiabetic",
            year: "B.Pharm Year 3",
            indications: ["Type 2 diabetes"],
            mechanism: "Stimulates pancreatic insulin release",
            route: "Oral"
        },
        {
            id: "insulin_regular",
            name: "Regular Insulin",
            generic: "Human Regular Insulin",
            class: "Insulin",
            category: "Antidiabetic",
            year: "B.Pharm Year 3",
            indications: ["Diabetes mellitus"],
            mechanism: "Promotes glucose uptake and utilization",
            route: "SC / IV"
        },
        {
            id: "levothyroxine",
            name: "Levothyroxine",
            generic: "Levothyroxine",
            class: "Thyroid Hormone",
            category: "Endocrine",
            year: "B.Pharm Year 3",
            indications: ["Hypothyroidism"],
            mechanism: "Synthetic T4 replacement",
            route: "Oral / IV"
        },
        {
            id: "prednisolone",
            name: "Prednisolone",
            generic: "Prednisolone",
            class: "Corticosteroid",
            category: "Endocrine / Anti-inflammatory",
            year: "B.Pharm Year 3",
            indications: ["Inflammatory disorders", "Autoimmune conditions"],
            mechanism: "Glucocorticoid receptor activation",
            route: "Oral"
        },
        {
            id: "dexamethasone",
            name: "Dexamethasone",
            generic: "Dexamethasone",
            class: "Corticosteroid",
            catego
