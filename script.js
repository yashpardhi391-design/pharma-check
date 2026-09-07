document.addEventListener("DOMContentLoaded", function () {
  // Pre-configured Clinical Intelligence Matrix Database
  const db = {
    "Warfarin-Aspirin": {
      scorePercentage: 95,
      severity: "HIGH RISK",
      severityClass: "high",
      mechanism: "Synergistic Anticoagulation & Antiplatelet Inhibition",
      effect: "Fatal Bleeding & GI Hemorrhage Risk",
      implication: "Combined primary hemostasis blockade and clotting factor suppression dramatically elevates GI bleeding risks.",
      action: "Avoid combination. If mandatory, monitor INR closely and prescribe PPI cover."
    },
    "Warfarin-Fluconazole": {
      scorePercentage: 92,
      severity: "HIGH RISK",
      severityClass: "high",
      mechanism: "Hepatic CYP2C9 Enzyme Inhibition",
      effect: "Acute Warfarin Accumulation & Toxicity",
      implication: "Fluconazole inhibits S-warfarin clearance, causing rapid increase in INR levels.",
      action: "Reduce Warfarin dosage by 50% during concurrent azole antifungal therapy."
    },
    "Aspirin-Ibuprofen": {
      scorePercentage: 68,
      severity: "MODERATE RISK",
      severityClass: "moderate",
      mechanism: "Competitive COX-1 Binding Site Blockade",
      effect: "Attenuated Cardioprotective Effect of Aspirin",
      implication: "Ibuprofen obstructs Aspirin access to the COX-1 acetylation site on platelets.",
      action: "Take Aspirin 1 hour before or 8 hours after NSAID dosing."
    },
    "Digoxin-Amiodarone": {
      scorePercentage: 89,
      severity: "HIGH RISK",
      severityClass: "high",
      mechanism: "P-glycoprotein (P-gp) Transporter Efflux Inhibition",
      effect: "Severe Digoxin Toxicity & Arrhythmias",
      implication: "Amiodarone reduces renal and biliary clearance of Digoxin by over 50%.",
      action: "Halve the Digoxin dose upon starting Amiodarone therapy and measure serum levels."
    },
    "Simvastatin-Amiodarone": {
      scorePercentage: 84,
      severity: "HIGH RISK",
      severityClass: "high",
      mechanism: "CYP3A4 Enzyme Competition",
      effect: "Myopathy & Rhabdomyolysis",
      implication: "Inhibition of statin breakdown leads to skeletal muscle damage and acute renal damage.",
      action: "Cap Simvastatin dose to 20mg/day or switch to Pravastatin/Rosuvastatin."
    },
    "Lisinopril-Spironolactone": {
      scorePercentage: 78,
      severity: "MODERATE RISK",
      severityClass: "moderate",
      mechanism: "Suppression of RAAS Axis",
      effect: "Life-Threatening Hyperkalemia",
      implication: "Decreased urinary potassium excretion leading to systemic potassium buildup.",
      action: "Routine serum potassium monitoring required; avoid potassium supplements."
    }
  };

  // Safe Element References
  const runBtn = document.getElementById('runAnalysis');
  const resetBtn = document.getElementById('resetBtn');
  const drug1Select = document.getElementById('drug1');
  const drug2Select = document.getElementById('drug2');
  const drug1Search = document.getElementById('drug1Search');
  const drug2Search = document.getElementById('drug2Search');
  const emptyState = document.getElementById('emptyState');
  const reportResult = document.getElementById('reportResult');

  // Core Clinical Simulation Logic
  function executeAnalysis() {
    const d1 = drug1Select ? drug1Select.value : "";
    const d2 = drug2Select ? drug2Select.value : "";

    if (!d1 || !d2) {
      alert("Kripya dono Primary aur Secondary medications select karein!");
      return;
    }

    if (d1 === d2) {
      alert("Dono jagah same drug select hai! Kripya alag-alag select karein.");
      return;
    }

    if (runBtn) {
      runBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ANALYZING...`;
    }

    setTimeout(function () {
      const key1 = d1 + "-" + d2;
      const key2 = d2 + "-" + d1;

      const age = document.getElementById('ageGroup') ? document.getElementById('ageGroup').value : 'adult';
      const kidney = document.getElementById('kidneyFunction') ? document.getElementById('kidneyFunction').value : 'normal';
      const liver = document.getElementById('liverFunction') ? document.getElementById('liverFunction').value : 'normal';

      let data = db[key1] || db[key2];

      // Dynamic calculation for unlisted drug combinations
      if (!data) {
        let score = 45;
        if (kidney === 'severe') score += 25;
        if (liver === 'impaired') score += 20;
        if (age === 'elderly') score += 10;

        data = {
          scorePercentage: Math.min(score, 95),
          severity: score >= 70 ? "HIGH RISK" : "MODERATE RISK",
          severityClass: score >= 70 ? "high" : "moderate",
          mechanism: "Pharmacokinetic Metabolic Clearance Competition",
          effect: "Altered Excretion & Potential Toxicity",
          implication: `Concurrent administration of ${d1} + ${d2} requires clinical monitoring under current organ clearance capabilities (${kidney} renal, ${liver} hepatic).`,
          action: "Perform baseline laboratory assessment and monitor for therapeutic elevation or adverse effects."
        };
      }

      // Populate Visual Report Data
      const reportPair = document.getElementById('reportPair');
      if (reportPair) reportPair.innerText = d1 + " + " + d2;

      const sevTag = document.getElementById('severityTag');
      if (sevTag) {
        sevTag.innerText = data.severity;
        sevTag.className = "severity " + data.severityClass;
      }

      const riskScore = document.getElementById('riskScore');
      if (riskScore) riskScore.innerText = data.scorePercentage + "%";

      const riskMeter = document.getElementById('riskMeter');
      if (riskMeter) riskMeter.style.width = data.scorePercentage + "%";

      const mechanismText = document.getElementById('mechanismText');
      if (mechanismText) mechanismText.innerText = data.mechanism;

      const effectText = document.getElementById('effectText');
      if (effectText) effectText.innerText = data.effect;

      const implicationText = document.getElementById('implicationText');
      if (implicationText) implicationText.innerText = data.implication;

      const actionText = document.getElementById('actionText');
      if (actionText) actionText.innerText = data.action;

      const reportId = document.getElementById('reportId');
      if (reportId) reportId.innerText = "REPORT ID: PRM-" + Math.floor(1000 + Math.random() * 9000) + "-X";

      // Show/Hide Display State
      if (emptyState) emptyState.style.display = 'none';
      if (reportResult) reportResult.style.display = 'block';

      if (runBtn) {
        runBtn.innerHTML = `<i class="fa-solid fa-bolt"></i> RUN INTERACTION ANALYSIS`;
      }
    }, 200);
  }

  // Event Listeners
  if (runBtn) runBtn.onclick = executeAnalysis;

  if (resetBtn) {
    resetBtn.onclick = function () {
      if (drug1Select) drug1Select.value = "";
      if (drug2Select) drug2Select.value = "";
      if (drug1Search) drug1Search.value = "";
      if (drug2Search) drug2Search.value = "";

      const options1 = drug1Select ? drug1Select.options : [];
      for (let i = 0; i < options1.length; i++) options1[i].style.display = "";

      const options2 = drug2Select ? drug2Select.options : [];
      for (let i = 0; i < options2.length; i++) options2[i].style.display = "";

      if (reportResult) reportResult.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
    };
  }

  // Live Dropdown Filtering Logic
  function bindSearchFilter(inputElem, selectElem) {
    if (!inputElem || !selectElem) return;

    inputElem.addEventListener('input', function (e) {
      const filter = e.target.value.toLowerCase();
      const options = selectElem.options;
      for (let i = 0; i < options.length; i++) {
        const txt = options[i].text.toLowerCase();
        if (options[i].value === "") {
          options[i].style.display = "";
        } else {
          options[i].style.display = txt.includes(filter) ? "" : "none";
        }
      }
    });
  }

  bindSearchFilter(drug1Search, drug1Select);
  bindSearchFilter(drug2Search, drug2Select);

  // Quick Preset Handlers
  const presetBtns = document.querySelectorAll('.preset-btn');
  presetBtns.forEach(function (btn) {
    btn.onclick = function () {
      const d1 = btn.getAttribute('data-d1');
      const d2 = btn.getAttribute('data-d2');

      if (d1 && d2 && drug1Select && drug2Select) {
        drug1Select.value = d1;
        drug2Select.value = d2;
        executeAnalysis();
      }
    };
  });
});
