// ============ DATA ============
const subjects = [
    // ============ 1st semester ============
    { name: "Introduction to Business", code: "510101" },
    { name: "Business Communication & Report Writing", code: "510103" },
    { name: "Business Accounting", code: "510105" },
    { name: "Business Mathematics", code: "510107" },
    { name: "History of Emergence of Independent Bangladesh (In Bangla)", code: "211501" },
      // ============ 2nd semester ============
    { name: "Principles of Management", code: "510109" },
    { name: "Taxation in Bangladesh", code: "510111" },
    { name: "Computer and Information Technology", code: "510113" },
    { name: "Theory and Practice of Banking", code: "510115" },
    { name: "Micro Economics", code: "510117" },
      // ============ 3rd semester ============
    { name: "Business Statistics-I", code: "520119" },
    { name: "Organization Behavior", code: "520121" },
    { name: "Legal Environment of Business", code: "520123" },
    { name: "E-Commerce", code: "520125" },
    { name: "Macro Economics", code: "520127" },
     // ============ 4th semester ============
    { name: "Risk Management & Insurance", code: "520129" },
    { name: "Business Statistics-II", code: "520131" },
    { name: "Human Resource Management", code: "520133" },
    { name: "Export-Import Management", code: "520135" },
    { name: "Supply Chain Management", code: "520137" },
    // ============ 5th semester ============
    { name: "Principles of Finance", code: "530139" },
    { name: "Principles of Marketing", code: "530141" },
    { name: "Cost Accounting", code: "530143" },
    { name: "Tourism & Hospitality Management", code: "530145" },
    { name: "Entrepreneurship & Small Business Management", code: "530147" },
    // ============ 6th semester ============
    { name: "Financial Management", code: "530149" },
    { name: "Marketing Management", code: "530151" },
    { name: "Management Accounting", code: "530153" },
    { name: "Enterprise Resource Planning", code: "530155" },
    { name: "Research Methodology", code: "530157" },
    { name: "Viva-Voce", code: "530158" },
    // ============ Major in Accounting ============
    { name: "Intermediate Accounting", code: "542501" },
    { name: "Advanced Accounting", code: "542503" },
    { name: "Working Capital Management", code: "542505" },
    { name: "Financial Statement Analysis and Business Valuation", code: "542507" },
    { name: "Corporate Governance", code: "542509" },
    { name: "Accounting Information Systems", code: "542511" },
    { name: "Auditing", code: "542513" },
    { name: "Advanced Cost & Management Accounting", code: "542515" },
    { name: "Accounting Theory", code: "542517" },
    { name: "Accounting for Government and Non-Profit Organization and NGO", code: "542519" },
    { name: "Internship / Project Paper & Defence", code: "542520" },
    // ============ Major in Management ============
    { name: "Organization Development", code: "542601" },
    { name: "Global Management", code: "542603" },
    { name: "Conflict Management", code: "542605" },
    { name: "Management Thought", code: "542607" },
    { name: "Career Planning & Development", code: "542609" },
    { name: "Industrial Relations", code: "542611" },
    { name: "Management Information Systems", code: "542613" },
    { name: "Operations Management", code: "542615" },
    { name: "Strategic Management", code: "542617" },
    { name: "Total Quality Management", code: "542619" },
    { name: "Internship / Project Paper & Defence", code: "542620" },
    // ============ Major in Marketing ============
    { name: "Customer Relationship Management", code: "542301" },
    { name: "Customer Behavior", code: "542303" },
    { name: "Brand Management", code: "542305" },
    { name: "E-Marketing", code: "542307" },
    { name: "Service Marketing", code: "542309" },
    { name: "Selling & Salesmanship", code: "542311" },
    { name: "Integrated Marketing Communication", code: "542313" },
    { name: "SME Marketing", code: "542315" },
    { name: "International Economics", code: "542317" },
    { name: "Agricultural & Food Marketing", code: "542319" },
    { name: "Internship / Project Paper & Defence", code: "542320" },
     // ============ Major in Finance ============
    { name: "Corporate Finance", code: "542401" },
    { name: "Working Capital Management", code: "542403" },
    { name: "Bank Management", code: "542405" },
    { name: "E-Banking", code: "542407" },
    { name: "Fundamental of Investment", code: "542409" },
    { name: "Financial Markets & Institutions", code: "542411" },
    { name: "Financial Analysis and Business Valuation", code: "542413" },
    { name: "Fiscal and Monetary Policy", code: "542415" },
    { name: "Security Analysis and Portfolio Management", code: "542417" },
    { name: "Real Estate Finance", code: "542419" },
    { name: "Internship / Project Paper & Defence", code: "542420" },

];

const teachers = [
    { name: "Ms. Nasrin Sultana", designation: "Associate Professor" },
    { name: "Ms. Sohel Ahmed", designation: "Professor" },
    { name: "Md. Shahinur Sobhan", designation: "Professor" },
    { name: "Mr. Mohammad Mosharraf Hossain", designation: "Associate Professor" },
    { name: "Mr. A.N.M. Badsha Miah", designation: "Associate Professor" },
    { name: "Ms Manna Akter Lina", designation: "Associate Professor" },
    { name: "Mr. Md. Monsur Ali", designation: "Associate Professor" },
    { name: "Mr. Md. Sohel Ahmed", designation: "Associate Professor" },
    { name: "Ms Fahmida Rawshan", designation: "Assistant Professor" },
    { name: "Ms Refatun Nahar", designation: "Assistant Professor" },
    { name: "Ms Sania Magfur", designation: "Assistant Professor" },
    { name: "Ms Lata Akter", designation: "Assistant Professor" },
    { name: "Ms Aparajita Saha", designation: "Assistant Professor" },
    { name: "Mr. Sahabuddin Ahammed ACMA", designation: "Assistant Professor" },
    { name: "Ms Afroza Rahmat Rinky", designation: "Lecturer" },
];

// ============ UPDATE PREVIEW ============
function upd() {
    const subject = document.getElementById("f_subject").value.trim();
    const course = document.getElementById("f_course").value.trim();
    const teacher = document.getElementById("f_teacher").value.trim();
    const designation = document.getElementById("f_designation").value;
    const tdept = document.getElementById("f_tdept").value.trim();
    const sname = document.getElementById("f_sname").value.trim();
    const roll = document.getElementById("f_roll").value.trim();
    const sec = document.getElementById("f_sec").value.trim();
    const batch = document.getElementById("f_batch").value.trim();
    const sem = document.getElementById("f_sem").value.trim();
    const sdept = document.getElementById("f_sdept").value.trim();
    const date = document.getElementById("f_date").value;
    const topic = document.getElementById("f_topic").value.trim();
    const college = document.getElementById("f_college").value.trim();
    const fontSize = document.getElementById("f_fontsize").value;
    const borderStyle = document.getElementById("f_border").value;

    // Update college name
    const pCollege = document.getElementById("p_college");
    pCollege.textContent = college || "DHAKA CITY COLLEGE";

    // Update topic/subject
    const pTopic = document.getElementById("p_topic");
    if (topic) {
        pTopic.innerHTML = topic;
        pTopic.classList.add("filled");
        pTopic.classList.remove("italic");
    } else if (subject) {
        pTopic.innerHTML = subject;
        pTopic.classList.add("filled");
        pTopic.classList.remove("italic");
    } else {
        pTopic.innerHTML = "<em>ASSIGNMENT TITLE</em>";
        pTopic.classList.remove("filled");
        pTopic.classList.add("italic");
    }

    // Update course code
    const pCourse = document.getElementById("p_course");
    if (course) {
        pCourse.innerHTML = "Course Code : " + course;
        pCourse.classList.add("filled");
    } else {
        pCourse.innerHTML = "<em>Course Code : —</em>";
        pCourse.classList.remove("filled");
    }

    // Update teacher
    const pTeacher = document.getElementById("p_teacher");
    if (teacher) {
        pTeacher.innerHTML = teacher;
        pTeacher.classList.add("filled");
    } else {
        pTeacher.innerHTML = "<em>Teacher Name</em>";
        pTeacher.classList.remove("filled");
    }

    // Update designation
    const pDesignation = document.getElementById("p_designation");
    if (designation) {
        pDesignation.innerHTML = designation;
        pDesignation.classList.add("filled");
    } else {
        pDesignation.innerHTML = "<em>Designation</em>";
        pDesignation.classList.remove("filled");
    }

    // Update teacher dept & college
    document.getElementById("p_tdept").textContent = tdept || "Department Of Business Administration";
    document.getElementById("p_tcollege").textContent = college || "Dhaka City College";

    // Update student name
    const pSname = document.getElementById("p_sname");
    if (sname) {
        pSname.innerHTML = sname;
        pSname.classList.add("filled");
    } else {
        pSname.innerHTML = "<em>Student Name</em>";
        pSname.classList.remove("filled");
    }

    // Update roll, section, batch, semester
    document.getElementById("p_roll").textContent = "Roll : " + (roll || "—");
    document.getElementById("p_sec").textContent = "Section : " + (sec || "—");
    document.getElementById("p_batch").textContent = "Batch : " + (batch || "—");
    document.getElementById("p_sem").textContent = "Semester : " + (sem || "—");

    // Update student dept & college
    document.getElementById("p_sdept").textContent = sdept || "Department Of Business Administration";
    document.getElementById("p_scollege").textContent = college || "Dhaka City College";

    // Update date
    const pDate = document.getElementById("p_date");
    if (date) {
        const dateObj = new Date(date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formatted = dateObj.toLocaleDateString('en-US', options);
        pDate.innerHTML = "Date Of Submission : " + formatted;
        pDate.classList.add("filled");
    } else {
        pDate.innerHTML = "<em>Date Of Submission : —</em>";
        pDate.classList.remove("filled");
    }

    // Update font size
    const coverPage = document.getElementById("coverPage");
    coverPage.classList.remove("font-small", "font-medium", "font-large");
    coverPage.classList.add("font-" + fontSize);

    // Update border
    const coverBorder = document.getElementById("coverBorder");
    coverBorder.classList.remove("single-border", "no-border");
    if (borderStyle === "single") {
        coverBorder.classList.add("single-border");
    } else if (borderStyle === "none") {
        coverBorder.classList.add("no-border");
    }
}

// ============ CLEAR INDIVIDUAL FIELD ============
function clearField(id) {
    const el = document.getElementById(id);
    el.value = "";
    el.classList.remove("valid", "error");

    // Close suggestions
    if (id === "f_subject") {
        closeSuggestions("subject_suggestions");
        document.getElementById("f_course").value = "";
    }
    if (id === "f_teacher") {
        closeSuggestions("teacher_suggestions");
        document.getElementById("f_designation").value = "";
    }

    upd();
}

// ============ CLEAR ALL ============
function clrAll() {
    clearCourse();
    clearTeacher();

    const fields = ["f_sname", "f_roll", "f_sec", "f_batch", "f_sem", "f_date", "f_topic"];
    fields.forEach(function(id) {
        const e = document.getElementById(id);
        if (e) {
            e.value = "";
            e.classList.remove("valid", "error");
            e.style.borderColor = "";
        }
    });

    document.getElementById("f_tdept").value = "Department Of Business Administration";
    document.getElementById("f_sdept").value = "Department Of Business Administration";

    upd();
}

function clearCourse() {
    document.getElementById("f_subject").value = "";
    document.getElementById("f_course").value = "";
    closeSuggestions("subject_suggestions");
}

function clearTeacher() {
    document.getElementById("f_teacher").value = "";
    document.getElementById("f_designation").value = "";
    closeSuggestions("teacher_suggestions");
}

// ============ SUGGESTIONS ============
function closeSuggestions(containerId) {
    document.getElementById(containerId).innerHTML = "";
}

// Subject suggestions
document.getElementById("f_subject").addEventListener("input", function() {
    const val = this.value.trim().toLowerCase();
    const container = document.getElementById("subject_suggestions");

    if (val.length < 1) {
        container.innerHTML = "";
        return;
    }

    const matches = subjects.filter(s =>
        s.name.toLowerCase().includes(val) || s.code.includes(val)
    );

    if (matches.length === 0) {
        container.innerHTML = "";
        return;
    }

    let html = '<div class="suggestions-list">';
    matches.forEach(s => {
        html += `<div class="suggestion-item" onclick="selectSubject('${s.name}', '${s.code}')">${s.name} <span style="color:#888;font-size:11px;">(${s.code})</span></div>`;
    });
    html += '</div>';
    container.innerHTML = html;
});

function selectSubject(name, code) {
    document.getElementById("f_subject").value = name;
    document.getElementById("f_course").value = code;
    closeSuggestions("subject_suggestions");
    upd();
}

// Teacher suggestions
document.getElementById("f_teacher").addEventListener("input", function() {
    const val = this.value.trim().toLowerCase();
    const container = document.getElementById("teacher_suggestions");

    if (val.length < 1) {
        container.innerHTML = "";
        return;
    }

    const matches = teachers.filter(t =>
        t.name.toLowerCase().includes(val)
    );

    if (matches.length === 0) {
        container.innerHTML = "";
        return;
    }

    let html = '<div class="suggestions-list">';
    matches.forEach(t => {
        html += `<div class="suggestion-item" onclick="selectTeacher('${t.name}', '${t.designation}')">${t.name} <span style="color:#888;font-size:11px;">(${t.designation})</span></div>`;
    });
    html += '</div>';
    container.innerHTML = html;
});

function selectTeacher(name, designation) {
    document.getElementById("f_teacher").value = name;
    document.getElementById("f_designation").value = designation;
    closeSuggestions("teacher_suggestions");
    upd();
}

// Close suggestions when clicking outside
document.addEventListener("click", function(e) {
    if (!e.target.closest("#f_subject") && !e.target.closest("#subject_suggestions")) {
        closeSuggestions("subject_suggestions");
    }
    if (!e.target.closest("#f_teacher") && !e.target.closest("#teacher_suggestions")) {
        closeSuggestions("teacher_suggestions");
    }
});

// ============ ADVANCED SETTINGS TOGGLE ============
function toggleAdvanced() {
    const body = document.getElementById("advancedBody");
    const arrow = document.getElementById("advancedArrow");

    body.classList.toggle("show");
    arrow.classList.toggle("rotated");
}

function markError(id) {
    const el = document.getElementById(id);
    el.style.borderColor = "#e53935";
    el.classList.add("error");

    setTimeout(() => {
        el.style.borderColor = "";
        el.classList.remove("error");
    }, 3000);
}

// ============ DOWNLOAD PDF (MOBILE/DESKTOP FIXED) ============
async function downloadPDF() {
    // 1. Validation
    const sname = document.getElementById("f_sname").value.trim();
    const roll = document.getElementById("f_roll").value.trim();
    const sec = document.getElementById("f_sec").value.trim();
    const batch = document.getElementById("f_batch").value.trim();
    const date = document.getElementById("f_date").value;

    let valid = true;

    if (!sname) { markError("f_sname"); valid = false; }
    if (!roll) { markError("f_roll"); valid = false; }
    if (!sec) { markError("f_sec"); valid = false; }
    if (!batch) { markError("f_batch"); valid = false; }
    if (!date) { markError("f_date"); valid = false; }

    if (!valid) {
        alert("Please fill in all required fields marked with *");
        return;
    }

    // 2. Loading State
    const btn = document.getElementById("downloadBtn");
    const origText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    btn.disabled = true;

    const originalElement = document.getElementById("coverPage");

    // 3. FIX: Create an invisible off-screen container.
    // This stops mobile scroll positions from cutting off the canvas
    const cloneContainer = document.createElement("div");
    cloneContainer.style.position = "fixed"; // Fixed positioning avoids scroll calculations
    cloneContainer.style.top = "0";
    cloneContainer.style.left = "0";
    cloneContainer.style.width = "595px";
    cloneContainer.style.height = "842px";
    cloneContainer.style.zIndex = "-9999"; 
    cloneContainer.style.background = "#ffffff";

    // 4. FIX: Clone the cover page to strip away the mobile live-preview "scale()" transforms
    const clone = originalElement.cloneNode(true);
    clone.style.transform = "none";
    clone.style.margin = "0";
    
    cloneContainer.appendChild(clone);
    document.body.appendChild(cloneContainer);

    const fileName = sname ? "DCC_" + sname.replace(/\s+/g, "_") + ".pdf" : "DCC_Cover_Page.pdf";

    // 5. PDF Options
    const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,       // Critical for the Wikipedia Logo
            allowTaint: true,
            scrollY: 0,          // CRITICAL FIX: Ignores mobile scrolling
            scrollX: 0,
            windowWidth: 595,
            windowHeight: 842
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    // 6. Generate PDF from the pristine clone
    try {
        await html2pdf().set(opt).from(clone).save();
    } catch (error) {
        console.error("PDF generation failed:", error);
        alert("An error occurred during download. If you are on a strict mobile browser, use the 'Print' button to save as PDF.");
    } finally {
        // Clean up the clone and reset button
        document.body.removeChild(cloneContainer);
        btn.innerHTML = origText;
        btn.disabled = false;
    }
}

// ============ PRINT ============
function printCover() {
    const coverPage = document.getElementById("coverPage");
    const originalTransform = coverPage.style.transform;
    coverPage.style.transform = "none";

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>DCC Cover Page</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { display: flex; justify-content: center; }
                @page { size: A4; margin: 0; }

                .cover-page {
                    width: 210mm;
                    min-height: 297mm;
                    background: #fff;
                }

                .cover-border {
                    margin: 20px;
                    padding: 30px 40px;
                    min-height: calc(297mm - 40px);
                    border: 3px double #1a1a2e;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cover-border.single-border { border: 2px solid #1a1a2e; }
                .cover-border.no-border { border: none; }

                .college-name {
                    font-family: 'Times New Roman', serif;
                    font-size: 28px;
                    font-weight: 700;
                    color: #1a1a2e;
                    letter-spacing: 4px;
                    text-align: center;
                    margin-bottom: 15px;
                    text-transform: uppercase;
                }

                .logo-container { margin-bottom: 20px; }
                .college-logo { width: 100px; height: 100px; object-fit: contain; }

                .cover-section {
                    text-align: center;
                    margin-bottom: 20px;
                    width: 100%;
                }

                .cover-label-blue {
                    color: #1565c0;
                    font-size: 14px;
                    font-weight: 700;
                    margin-bottom: 4px;
                }

                .cover-label-blue.underline { text-decoration: underline; }

                .cover-value {
                    font-size: 13px;
                    color: #333;
                    line-height: 1.8;
                }

                .date-section {
                    margin-top: auto;
                    padding-top: 20px;
                }
            </style>
        </head>
        <body>
            ${coverPage.outerHTML}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.onload = function() {
        printWindow.print();
        printWindow.close();
    };

    coverPage.style.transform = originalTransform;
}

// ============ ZOOM / RESPONSIVE PREVIEW ============
function adjustZoom() {
    const wrapper = document.getElementById("previewWrapper");
    const coverPage = document.getElementById("coverPage");
    const zoomLabel = document.getElementById("zoomLabel");

    if (!wrapper || !coverPage) return;

    const wrapperWidth = wrapper.clientWidth;
    const pageWidth = 595;
    
    // Calculate scale factor (leaving some padding)
    let scale = Math.min((wrapperWidth - 30) / pageWidth, 1);
    scale = Math.max(scale, 0.40); // minimum scale limit

    coverPage.style.transform = `scale(${scale})`;
    coverPage.style.transformOrigin = "top center";

    if (zoomLabel) {
        zoomLabel.textContent = Math.round(scale * 100) + "% zoom";
    }
}

// ============ INITIALIZATION ============
window.addEventListener("load", function() {
    upd();
    adjustZoom();
});

// Debounce resize
let resizeTimeout;
window.addEventListener("resize", function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustZoom, 100);
});