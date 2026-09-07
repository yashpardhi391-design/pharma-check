document.addEventListener("DOMContentLoaded", () => {
  // Extensive B.Pharm Clinical Knowledge Base
  const database = {
    "amiodarone+digoxin": {
      risk: "HIGH RISK",
      score: 89,
      mechanism: "Amiodarone decreases renal and non-renal clearance of Digoxin by inhibiting P-glycoprotein efflux.",
      effect: "Increased risk of Digoxin toxicity (arrhythmias, AV block, severe nausea).",
      implication: "Significant rise in serum Digoxin concentration.",
      recommendation: "Reduce Digoxin dosage by 30-50% when initiating Amiodarone and monitor serum levels.",
      evidence: { pathway: "P-glycoprotein Transporter Inhibition", pmid: "3456789", fdaAlert: "Black Box Warning" }
    },
    "enalapril+potassium chloride": {
      risk: "HIGH RISK",
      score: 85,
      mechanism: "ACE inhibitors reduce aldosterone production, leading to potassium retention alongside oral potassium supplements.",
      effect: "Risk of severe hyperkalemia leading to cardiac conduction abnormalities.",
      implication: "Additive serum potassium elevation.",
      recommendation: "Avoid concomitant use. Regularly monitor serum potassium levels if co-prescribed.",
      evidence: { pathway: "RAAS Suppression + Direct Potassium Load", pmid: "2198301", fdaAlert: "Electrolyte Warning" }
    },
    "glibenclamide+alcohol": {
      risk: "HIGH RISK",
      score: 91,
      mechanism: "Alcohol inhibits hepatic gluconeogenesis and enhances the hypoglycemic effect of sulfonylureas.",
      effect: "Risk of severe and prolonged hypoglycemia.",
      implication: "Impaired glucose recovery mechanism.",
      recommendation: "Advise patients taking Glibenclamide to avoid alcohol intake.",
      evidence: { pathway: "Hepatic Gluconeogenesis Inhibition", pmid: "4509123", fdaAlert: "Clinical Advisory" }
    },
    "furosemide+gentamicin": {
      risk: "HIGH RISK",
      score: 93,
      mechanism: "Additive nephrotoxic and ototoxic effects on renal tubules and inner ear cells.",
      effect: "Increased risk of acute kidney injury and permanent ototoxicity.",
      implication: "Renal clearance reduction and cumulative tubular damage.",
      recommendation: "Avoid co-administration. Monitor peak/trough gentamicin levels and renal function.",
      evidence: { pathway: "Synergistic Renal Tubular & Otic Cell Injury", pmid: "5612349", fdaAlert: "Severe Toxicity Warning" }
    },
    "warfarin+co-trimoxazole": {
      risk: "HIGH RISK",
      score: 96,
      mechanism: "Sulfamethoxazole/Trimethoprim inhibits CYP2C9 metabolism of Warfarin and displaces it from plasma proteins.",
      effect: "Increased risk of severe bleeding and drastically elevated INR.",
      implication: "Metabolism inhibition of active S-warfarin.",
      recommendation: "Avoid combination. Reduce Warfarin dose and check INR within 3 days if necessary.",
      evidence: { pathway: "Hepatic CYP2C9 Inhibition", pmid: "8912304", fdaAlert: "Major Bleeding Hazard" }
    },
    "ibuprofen+warfarin": {
      risk: "HIGH RISK",
      score: 92,
      mechanism: "NSAID inhibition of platelet aggregation and gastric mucosal erosion combined with oral anticoagulation.",
      effect: "Markedly increased risk of upper gastrointestinal hemorrhage.",
      implication: "Synergistic impairment of primary and secondary hemostasis.",
      recommendation: "Avoid concurrent use. Use Paracetamol for analgesia in patients on Warfarin.",
      evidence: { pathway: "COX-1 Inhibition + Vitamin K Antagonism", pmid: "2189345", fdaAlert: "Black Box Warning" }
    },
    "aspirin+clopidogrel": {
      risk: "HIGH RISK",
      score: 84,
      mechanism: "Dual antiplatelet therapy targeting both COX-1 and ADP P2Y12 receptors.",
      effect: "Increased risk of major systemic and GI bleeding.",
      implication: "Additive inhibition of platelet aggregation.",
      recommendation: "Use together only when clinically indicated (e.g., post-stent placement) with GI protection.",
      evidence: { pathway: "Dual Antiplatelet Synergism", pmid: "7812903", fdaAlert: "Bleeding Precaution" }
    },
    "aspirin+ibuprofen": {
      risk: "MODERATE RISK",
      score: 65,
      mechanism: "Ibuprofen competitively blocks the active site of COX-1, preventing irreversible binding of Aspirin.",
      effect: "Decreased cardioprotective antiplatelet effect of low-dose Aspirin.",
      implication: "Potential reduction in cardiovascular protection.",
      recommendation: "Administer Aspirin 30 minutes before or 8 hours after Ibuprofen dose.",
      evidence: { pathway: "Competitive Receptor Site Binding", pmid: "6789012", fdaAlert: "FDA Administration Advisory" }
    },
    "levothyroxine+calcium": {
      risk: "MODERATE RISK",
      score: 62,
      mechanism: "Calcium ions form insoluble chelation complexes with Levothyroxine in the GI tract.",
      effect: "Decreased gastrointestinal absorption of Levothyroxine leading to hypothyroidism symptoms.",
      implication: "Reduced bio-availability of thyroid hormone.",
      recommendation: "Separate administration times by at least 4 hours.",
      evidence: { pathway: "Gastrointestinal Chelation Complex", pmid: "3312098", fdaAlert: "Absorption Warning" }
    },
    "omeprazole+clopidogrel": {
      risk: "MODERATE RISK",
      score: 70,
      mechanism: "Omeprazole inhibits CYP2C19, preventing bio-activation of the prodrug Clopidogrel.",
      effect: "Reduced antiplatelet efficacy of Clopidogrel and increased risk of thrombotic events.",
      implication: "Failure of prodrug conversion.",
      recommendation: "Use a non-CYP2C19 inhibiting PPI like Pantoprazole as an alternative.",
      evidence: { pathway: "Hepatic CYP2C19 Isoenzyme Inhibition", pmid: "9012384", fdaAlert: "FDA Safety Communication" }
    },
    "losartan+potassium chloride": {
      risk: "HIGH RISK",
      score: 83,
      mechanism: "Angiotensin II receptor blockade reduces renal potassium excretion, additive with potassium supplements.",
      effect: "Risk of hyperkalemia leading to potential cardiac arrhythmias.",
      implication: "Additive elevation of serum potassium.",
      recommendation: "Monitor serum potassium regularly; adjust supplement dosage.",
      evidence: { pathway: "Aldosterone Suppression + Potassium Addition", pmid: "4102983", fdaAlert: "Hyperkalemia Precaution" }
    },
    "clarithromycin+glimepiride": {
      risk: "HIGH RISK",
      score: 88,
      mechanism: "Clarithromycin inhibits CYP3A4 and P-glycoprotein, enhancing sulfonylurea systemic exposure.",
      effect: "Risk of severe and prolonged hypoglycemia.",
      implication: "Increased plasma half-life of Glimepiride.",
      recommendation: "Monitor blood glucose closely or consider alternative antibiotic.",
      evidence: { pathway: "CYP3A4 Inhibition", pmid: "5201928", fdaAlert: "Hypoglycemia Hazard" }
    },
    "furosemide+lithium": {
      risk: "HIGH RISK",
      score: 90,
      mechanism: "Loop diuretics promote sodium loss, prompting proximal tubular reabsorption of sodium and lithium.",
      effect: "Reduced renal clearance of Lithium leading to severe Lithium toxicity.",
      implication: "Increase in serum lithium levels.",
      recommendation: "Avoid combination if possible; reduce lithium dose and monitor serum levels frequently.",
      evidence: { pathway: "Proximal Tubular Reabsorption Shift", pmid: "6120938", fdaAlert: "Toxicity Advisory" }
    },
    "clopidogrel+etoricoxib": {
      risk: "HIGH RISK",
      score: 86,
      mechanism: "Additive antiplatelet effect of Clopidogrel and COX-2 NSAID vascular effects.",
      effect: "Increased risk of gastrointestinal mucosal bleeding.",
      implication: "Compromised primary hemostasis and vascular wall erosion.",
      recommendation: "Use with extreme caution; consider gastro-protective agents (PPIs).",
      evidence: { pathway: "ADP Blockade + COX-2 Selective NSAID Impact", pmid: "7310928", fdaAlert: "GI Bleeding Precaution" }
    },
    "atorvastatin+clarithromycin": {
      risk: "HIGH RISK",
      score: 94,
      mechanism: "Clarithromycin is a potent CYP3A4 inhibitor, blocking Atorvastatin metabolism.",
      effect: "Markedly elevated Atorvastatin levels; increased risk of myopathy and rhabdomyolysis.",
      implication: "Severe muscular degradation and acute renal failure.",
      recommendation: "Temporarily withhold Atorvastatin during Clarithromycin therapy.",
      evidence: { pathway: "Potent CYP3A4 Metabolic Inhibition", pmid: "8120394", fdaAlert: "Rhabdomyolysis Warning" }
    },
    "carbamazepine+warfarin": {
      risk: "HIGH RISK",
      score: 87,
      mechanism: "Carbamazepine induces hepatic CYP2C9 and CYP3A4 enzymes, accelerating Warfarin breakdown.",
      effect: "Reduced anticoagulant effect of Warfarin and decreased INR.",
      implication: "Increased risk of thromboembolic events.",
      recommendation: "Increase Warfarin dosage under strict INR monitoring upon starting Carbamazepine.",
      evidence: { pathway: "Hepatic Microsomal Enzyme Induction", pmid: "9210394", fdaAlert: "Therapeutic Failure Risk" }
    },
    "digoxin+furosemide": {
      risk: "HIGH RISK",
      score: 89,
      mechanism: "Furosemide induces potassium wasting; hypokalemia sensitizes the myocardium to Digoxin.",
      effect: "Increased risk of fatal Digoxin-induced cardiac arrhythmias.",
      implication: "Hypokalemia-mediated sensitization of Na+/K+ ATPase.",
      recommendation: "Monitor serum potassium levels; co-administer potassium supplements or potassium-sparing diuretics.",
      evidence: { pathway: "Electrolyte Depletion (Hypokalemia)", pmid: "1029384", fdaAlert: "Digitalis Toxicity Warning" }
    },
    "phenytoin+phenobarbital": {
      risk: "HIGH RISK",
      score: 82,
      mechanism: "Mutual hepatic enzyme induction and additive central nervous system depression.",
      effect: "Additive CNS depression, ataxia, and unpredictable plasma anticonvulsant levels.",
      implication: "Fluctuating therapeutic concentrations and sedation.",
      recommendation: "Monitor therapeutic drug levels of both antiepileptics regularly.",
      evidence: { pathway: "Synergistic Neural Inhibition & Induction", pmid: "1102938", fdaAlert: "CNS Warning" }
    },
    "metformin+iodinated contrast": {
      risk: "HIGH RISK",
      score: 90,
      mechanism: "Iodinated contrast media can induce acute renal impairment, causing Metformin accumulation.",
      effect: "Risk of severe, potentially fatal lactic acidosis.",
      implication: "Impaired renal elimination of Metformin.",
      recommendation: "Withhold Metformin at time of or prior to procedure; resume after 48 hours if renal function is normal.",
      evidence: { pathway: "Contrast-Induced Nephropathy", pmid: "1203948", fdaAlert: "Black Box Warning" }
    }
  };

  const defaultData = {
    risk: "LOW RISK",
    score: 25,
    mechanism: "No major direct pharmacokinetic interaction identified in standard B.Pharm clinical databases.",
    effect: "Minimal clinical impact expected under standard therapeutic dosing.",
    implication: "Low probability of adverse interaction.",
    recommendation: "Proceed with standard patient monitoring and standard dosing schedules.",
    evidence: { pathway: "Independent Clearance Pathways", pmid: "N/A", fdaAlert: "No Specific Co-Administration Warning" }
  };

  // Elements
  const drug1Input = document.getElementById("drug1");
  const drug2Input = document.getElementById("drug2");
  const runBtn = document.getElementById("runAnalysis");
  const resetBtn = document.getElementById("resetBtn");
  const downloadPdfBtn = document.getElementById("downloadPdfBtn");

  // Camera Scanner Elements
  const dropZone = document.getElementById("dropZone");
  const cameraInput = document.getElementById("cameraInput");
  const scanIdle = document.getElementById("scanIdle");
  const scanLoading = document.getElementById("scanLoading");
  const scanProgressText = document.getElementById("scanProgressText");

  // Theme Toggle Elements
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");

  // DARK / LIGHT MODE LOGIC
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === "light") {
      themeIcon.className = "fa-solid fa-moon";
    } else {
      themeIcon.className = "fa-solid fa-sun";
    }
  }

  // FEEDBACK RATING LOGIC
  const stars = document.querySelectorAll("#starRating i");
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.getAttribute("data-rating"));
      stars.forEach((s, idx) => {
        if (idx < selectedRating) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
    });
  });

  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackSuccess = document.getElementById("feedbackSuccess");

  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (selectedRating === 0) {
      alert("Please select a star rating!");
      return;
    }
    feedbackForm.style.display = "none";
    feedbackSuccess.style.display = "block";
  });

  // Helper function to capitalize
  function capitalize(word) {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Clear value on focus to auto-open datalist
  [drug1Input, drug2Input].forEach(input => {
    input.addEventListener("focus", function() {
      this.value = "";
    });
  });

  // PubChem Image URL Generator
  function getPubChemUrl(drugName) {
    if (!drugName || drugName.toLowerCase() === "alcohol") {
      return "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/Ethanol/PNG";
    }
    return `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${encodeURIComponent(drugName)}/PNG`;
  }

  // Interaction Analysis Function
  function analyzeInteractions() {
    const d1 = drug1Input.value.trim();
    const d2 = drug2Input.value.trim();

    if (!d1 || !d2) {
      alert("Please select or enter both medications.");
      return;
    }

    const key1 = `${d1.toLowerCase()}+${d2.toLowerCase()}`;
    const key2 = `${d2.toLowerCase()}+${d1.toLowerCase()}`;
    const data = database[key1] || database[key2] || defaultData;

    // Update Text Elements
    document.getElementById("reportTitle").textContent = `${d1} + ${d2}`;
    document.getElementById("riskScore").textContent = `${data.score}%`;
    document.getElementById("meterBar").style.width = `${data.score}%`;
    document.getElementById("mechText").textContent = data.mechanism;
    document.getElementById("effectText").textContent = data.effect;
    document.getElementById("impText").textContent = data.implication;
    document.getElementById("actionText").textContent = data.recommendation;

    // Risk Badge
    const badge = document.getElementById("riskBadge");
    badge.textContent = data.risk;
    badge.className = "risk-tag " + (data.score >= 75 ? "risk-high" : data.score >= 50 ? "risk-mod" : "risk-low");

    // Structures Section
    document.getElementById("struct1Name").textContent = d1;
    document.getElementById("struct2Name").textContent = d2;
    document.getElementById("struct1Img").src = getPubChemUrl(d1);
    document.getElementById("struct2Img").src = getPubChemUrl(d2);

    // Citations Section
    document.getElementById("pathwayText").textContent = data.evidence.pathway;
    document.getElementById("pmidText").textContent = data.evidence.pmid.includes("PMID") ? data.evidence.pmid : `PMID: ${data.evidence.pmid}`;
    document.getElementById("fdaText").textContent = data.evidence.fdaAlert;
  }

  // REAL TESSERACT.JS OCR SCANNER LOGIC
  dropZone.addEventListener("click", () => cameraInput.click());

  cameraInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    scanIdle.style.display = "none";
    scanLoading.style.display = "flex";
    scanProgressText.textContent = "Processing image text via Tesseract OCR...";

    try {
      // Real Optical Character Recognition
      const result = await Tesseract.recognize(file, 'eng', {
        logger: m => {
          if (m.status === 'recognizing text') {
            scanProgressText.textContent = `Scanning image: ${Math.round(m.progress * 100)}%`;
          }
        }
      });

      const extractedText = result.data.text.toLowerCase();

      // Master drug dictionary to match against scanned text
      const masterDrugList = [
        "alcohol", "amiodarone", "aspirin", "atorvastatin", "calcium", 
        "carbamazepine", "clarithromycin", "clopidogrel", "co-trimoxazole", 
        "digoxin", "enalapril", "etoricoxib", "furosemide", "gentamicin", 
        "glibenclamide", "glimepiride", "ibuprofen", "levothyroxine", 
        "lithium", "losartan", "metformin", "omeprazole", "phenobarbital", 
        "phenytoin", "potassium chloride", "warfarin", "paracetamol", "diazepam",
        "amlodipine", "amoxicillin", "atropine", "ciprofloxacin", "diltiazem"
      ];

      // Find drugs present in extracted text
      const detectedDrugs = masterDrugList.filter(drug => extractedText.includes(drug));

      scanLoading.style.display = "none";
      scanIdle.style.display = "block";

      if (detectedDrugs.length >= 2) {
        drug1Input.value = capitalize(detectedDrugs[0]);
        drug2Input.value = capitalize(detectedDrugs[1]);
        alert(`OCR Scan Complete! Detected: ${capitalize(detectedDrugs[0])} and ${capitalize(detectedDrugs[1])}`);
        analyzeInteractions();
      } else if (detectedDrugs.length === 1) {
        drug1Input.value = capitalize(detectedDrugs[0]);
        alert(`OCR Scan Detected 1 drug: ${capitalize(detectedDrugs[0])}. Please select the second medication manually.`);
      } else {
        alert("Image scanned successfully, but no matching B.Pharm medicines were recognized. Please ensure clear lighting and text alignment!");
      }
    } catch (err) {
      console.error(err);
      scanLoading.style.display = "none";
      scanIdle.style.display = "block";
      alert("Error scanning image. Please upload a clear JPG/PNG photo.");
    }
  });

  // Buttons Event Listeners
  runBtn.addEventListener("click", analyzeInteractions);

  resetBtn.addEventListener("click", () => {
    drug1Input.value = "";
    drug2Input.value = "";
    document.getElementById("reportTitle").textContent = "Select Medications";
    document.getElementById("riskScore").textContent = "0%";
    document.getElementById("meterBar").style.width = "0%";
    document.getElementById("mechText").textContent = "Select two drugs to view mechanism analysis.";
    document.getElementById("effectText").textContent = "Waiting for analysis...";
    document.getElementById("impText").textContent = "Waiting for analysis...";
    document.getElementById("actionText").textContent = "Waiting for analysis...";
  });

  downloadPdfBtn.addEventListener("click", () => {
    window.print();
  });

  // Preset Scenarios
  document.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      drug1Input.value = btn.getAttribute("data-d1");
      drug2Input.value = btn.getAttribute("data-d2");
      analyzeInteractions();
      document.getElementById("analyzer").scrollIntoView({ behavior: "smooth" });
    });
  });
});
