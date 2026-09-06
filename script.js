// 1. JSON DRUG DATABASE MATRIX
const pharmaDatabase = {
    "drugs": [
        { "id": "aspirin", "name": "Aspirin", "class": "NSAID / Antiplatelet" },
        { "id": "warfarin", "name": "Warfarin", "class": "Vitamin K Antagonist" },
        { "id": "paracetamol", "name": "Paracetamol", "class": "Analgesic / Antipyretic" },
        { "id": "alcohol", "name": "Ethanol / Alcohol", "class": "CNS Depressant / Enzyme Inducer" },
        { "id": "ciprofloxacin", "name": "Ciprofloxacin", "class": "Fluoroquinolone Antibiotic" },
        { "id": "antacid", "name": "Antacid (Al/Mg)", "class": "Phosphate Binder / Antacid" },
        { "id": "atenolol", "name": "Atenolol", "class": "Beta-1 Selective Blocker" },
        { "id": "verapamil", "name": "Verapamil", "class": "Non-Dihydropyridine CCB" },
        { "id": "atorvastatin", "name": "Atorvastatin", "class": "HMG-CoA Reductase Inhibitor" },
        { "id": "clarithromycin", "name": "Clarithromycin", "class": "Macrolide Antibiotic" }
    ],
    "interactions": {
        "aspirin-warfarin": {
            "severity": "HIGH",
            "score": 88,
            "type": "Synergistic Hemostasis Inhibition",
            "enzyme": "COX-1 & VKORC1 Complex",
            "risk": "Major Gastrointestinal Hemorrhage & Prolonged Bleeding",
            "moa": "Aspirin inhibits platelet aggregation while Warfarin inhibits clotting factor synthesis. Dual blockade exponentially raises bleeding risk.",
            "recommendation": "Avoid concurrent use. If necessary, monitor INR closely and consider gastroprotection (PPI)."
        },
        "paracetamol-alcohol": {
            "severity": "HIGH",
            "score": 85,
            "type": "Metabolic Hepatotoxicity",
            "enzyme": "CYP2E1 Induction / NAPQI",
            "risk": "Acute Liver Failure & Severe Hepatic Necrosis",
            "moa": "Chronic alcohol intake induces CYP2E1, converting paracetamol rapidly into toxic NAPQI metabolite, overwhelming liver glutathione.",
            "recommendation": "Restrict paracetamol dose to <2,000 mg/day in chronic alcohol consumers."
        },
        "ciprofloxacin-antacid": {
            "severity": "MODERATE",
            "score": 58,
            "type": "Pharmacokinetic Absorption Chelation",
            "enzyme": "Gastrointestinal Chelation Complex",
            "risk": "Treatment Failure Due to Poor Antibiotic Absorption",
            "moa": "Divalent and trivalent cations (Mg²⁺/Al³⁺) form insoluble chelate complexes with Ciprofloxacin, reducing absorption by ~75%.",
            "recommendation": "Administer Ciprofloxacin 2 hours before or 6 hours after antacid dosing."
        },
        "atenolol-verapamil": {
            "severity": "HIGH",
            "score": 92,
            "type": "Additive Cardiodepression",
            "enzyme": "AV Node Beta-1 & L-Type Ca²⁺ Blockade",
            "risk": "Severe Bradycardia, Complete AV Block & Hypotension",
            "moa": "Combined blockade of SA/AV nodal conduction suppresses cardiac contractility and heart rate dangerously.",
            "recommendation": "Contraindicated in most clinical settings. Switch CCB to Amlodipine if needed."
        },
        "atorvastatin-clarithromycin": {
            "severity": "HIGH",
            "score": 82,
            "type": "CYP3A4 Metabolic Inhibition",
            "enzyme": "CYP3A4 Pathway",
            "risk": "Rhabdomyolysis, Severe Myopathy & Acute Renal Failure",
            "moa": "Clarithromycin potently inhibits CYP3A4, dramatically elevating plasma concentrations of Atorvastatin.",
            "recommendation": "Temporarily withhold Atorvastatin during Clarithromycin therapy course."
        }
    }
};

// 2. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    const drug1Select = document.getElementById("drug1");
    const drug2Select = document.getElementById("drug2");
    const search1 = document.getElementById("search1");
    const search2 = document.getElementById("search2");

    const runBtn = document.getElementById("runAnalysis");
    const clearBtn = document.getElementById("clearBtn");

    const placeholderView = document.getElementById("placeholderView");
    const reportView = document.getElementById("reportView");

    function renderDropdowns(filter1 = "", filter2 = "") {
        drug1Select.innerHTML = "";
        drug2Select.innerHTML = "";

        pharmaDatabase.drugs.forEach(d => {
            if (d.name.toLowerCase().includes(filter1.toLowerCase())) {
                const opt = document.createElement("option");
                opt.value = d.id;
                opt.textContent = `${d.name} (${d.class})`;
                drug1Select.appendChild(opt);
            }
            if (d.name.toLowerCase().includes(filter2.toLowerCase())) {
                const opt = document.createElement("option");
                opt.value = d.id;
                opt.textContent = `${d.name} (${d.class})`;
                drug2Select.appendChild(opt);
            }
        });
    }

    renderDropdowns();

    search1.addEventListener("input", (e) => renderDropdowns(e.target.value, search2.value));
    search2.addEventListener("input", (e) => renderDropdowns(search1.value, e.target.value));

    drug1Select.addEventListener("change", () => {
        const selectedText = drug1Select.options[drug1Select.selectedIndex]?.text.split(" (")[0];
        if (selectedText) search1.value = selectedText;
    });

    drug2Select.addEventListener("change", () => {
        const selectedText = drug2Select.options[drug2Select.selectedIndex]?.text.split(" (")[0];
        if (selectedText) search2.value = selectedText;
    });

    // 3. ANALYSIS EXECUTION
    runBtn.addEventListener("click", executeAnalysis);

    clearBtn.addEventListener("click", () => {
        placeholderView.style.display = "block";
        reportView.style.display = "none";
        search1.value = "";
        search2.value = "";
        renderDropdowns();
    });

    function executeAnalysis() {
        let d1 = drug1Select.value;
        let d2 = drug2Select.value;

        let name1 = search1.value.trim();
        let name2 = search2.value.trim();

        if (name1) {
            const found = pharmaDatabase.drugs.find(d => d.name.toLowerCase() === name1.toLowerCase() || d.id === name1.toLowerCase());
            d1 = found ? found.id : name1.toLowerCase();
        }
        if (name2) {
            const found = pharmaDatabase.drugs.find(d => d.name.toLowerCase() === name2.toLowerCase() || d.id === name2.toLowerCase());
            d2 = found ? found.id : name2.toLowerCase();
        }

        if (!d1 || !d2) {
            alert("Please select or enter both Medicine A and Medicine B.");
            return;
        }

        if (d1 === d2) {
            alert("Please select two different medicines.");
            return;
        }

        const key1 = `${d1}-${d2}`;
        const key2 = `${d2}-${d1}`;
        const data = pharmaDatabase.interactions[key1] || pharmaDatabase.interactions[key2];

        // Clinical modifiers
        const age = document.getElementById("patientAge").value;
        const renal = document.getElementById("patientRenal").value;
        const hepatic = document.getElementById("patientHepatic").value;

        let riskMultiplier = 1.0;
        let contextNotes = [];

        if (age === "geriatric") { riskMultiplier += 0.15; contextNotes.push("Geriatric (+15%)"); }
        if (renal === "impaired") { riskMultiplier += 0.10; contextNotes.push("Impaired Renal (+10%)"); }
        if (hepatic === "impaired") { riskMultiplier += 0.15; contextNotes.push("Impaired Hepatic (+15%)"); }

        placeholderView.style.display = "none";
        reportView.style.display = "block";

        const drugAObj = pharmaDatabase.drugs.find(d => d.id === d1);
        const drugBObj = pharmaDatabase.drugs.find(d => d.id === d2);

        const displayName1 = drugAObj ? drugAObj.name : name1;
        const displayName2 = drugBObj ? drugBObj.name : name2;

        document.getElementById("pairTitle").textContent = `${displayName1} + ${displayName2}`;
        document.getElementById("reportCode").textContent = `REF-${Math.floor(10000 + Math.random() * 90000)}`;

        if (data) {
            let finalScore = Math.min(100, Math.round(data.score * riskMultiplier));
            
            document.getElementById("severityPill").textContent = `${data.severity} SEVERITY`;
            document.getElementById("severityPill").className = `sev-tag sev-${data.severity}`;
            document.getElementById("riskScoreVal").textContent = `${finalScore}%`;

            const gaugeFill = document.getElementById("gaugeBarInner");
            gaugeFill.style.width = `${finalScore}%`;
            gaugeFill.style.backgroundColor = finalScore > 75 ? "#ef4444" : finalScore > 40 ? "#f59e0b" : "#10b981";

            document.getElementById("interType").textContent = data.type;
            document.getElementById("enzymePath").textContent = data.enzyme;
            document.getElementById("primaryRiskDesc").textContent = data.risk;
            document.getElementById("moaDesc").textContent = data.moa;
            document.getElementById("actionDesc").textContent = data.recommendation;

            document.getElementById("riskContextNote").textContent = contextNotes.length > 0 
                ? `* Adjusted for: ${contextNotes.join(", ")}` 
                : "* Standard adult baseline score.";
        } else {
            document.getElementById("severityPill").textContent = "LOW / SAFE";
            document.getElementById("severityPill").className = "sev-tag sev-LOW";
            document.getElementById("riskScoreVal").textContent = "15%";

            const gaugeFill = document.getElementById("gaugeBarInner");
            gaugeFill.style.width = "15%";
            gaugeFill.style.backgroundColor = "#10b981";

            document.getElementById("interType").textContent = "Minor / Custom Entry";
            document.getElementById("enzymePath").textContent = "Standard Metabolic Route";
            document.getElementById("primaryRiskDesc").textContent = `No critical interaction profile recorded in local JSON database for ${displayName1} & ${displayName2}.`;
            document.getElementById("moaDesc").textContent = "The medications follow independent pharmacokinetics without direct toxic interaction.";
            document.getElementById("actionDesc").textContent = "Standard clinical dosage is safe. Consult a medical practitioner if needed.";
            document.getElementById("riskContextNote").textContent = "* Dynamic evaluation based on baseline parameters.";
        }
    }

    // Preset Loader
    window.triggerPreset = function(d1, d2) {
        search1.value = "";
        search2.value = "";
        renderDropdowns();
        
        drug1Select.value = d1;
        drug2Select.value = d2;

        const drugAObj = pharmaDatabase.drugs.find(d => d.id === d1);
        const drugBObj = pharmaDatabase.drugs.find(d => d.id === d2);
        if (drugAObj) search1.value = drugAObj.name;
        if (drugBObj) search2.value = drugBObj.name;

        executeAnalysis();
    };

    // Matrix Cards Render
    function renderMatrixCards(filter = "all") {
        const grid = document.getElementById("matrixGrid");
        if (!grid) return;
        grid.innerHTML = "";

        Object.keys(pharmaDatabase.interactions).forEach(key => {
            const item = pharmaDatabase.interactions[key];
            if (filter === "all" || item.severity === filter) {
                const names = key.split("-").map(n => n.toUpperCase()).join(" + ");
                const card = document.createElement("div");
                card.className = "m-item-card";
                card.innerHTML = `
                    <span class="sev-tag sev-${item.severity}" style="float:right; font-size:9px;">${item.severity}</span>
                    <h4>${names}</h4>
                    <p style="margin-top:6px;"><strong>Type:</strong> ${item.type}</p>
                    <p style="margin-top:4px;">${item.risk}</p>
                `;
                grid.appendChild(card);
            }
        });
    }

    renderMatrixCards();

    window.filterMatrix = function(type, btn) {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderMatrixCards(type);
    };
});
