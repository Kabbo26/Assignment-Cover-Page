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
    // Get all form values
    const topic = val("f_topic");
    const subject = val("f_subject");
    const course = val("f_course");
    const batch = val("f_batch");
    const sem = val("f_sem");
    const session = val("f_session");
    const teacher = val("f_teacher");
    const designation = document.getElementById("f_designation").value;
    const tdept = val("f_tdept");
    const sname = val("f_sname");
    const roll = val("f_roll");
    const sec = val("f_sec");
    const ssession = val("f_ssession");
    const date = document.getElementById("f_date").value;
    const college = val("f_college");
    const deptHeader = val("f_dept_header");
    const program = val("f_program");

    // Auto-fill student session from batch session
    if (session && !document.getElementById("f_ssession").value.trim()) {
        document.getElementById("p_ssession").textContent = session;
    }

    // Update college name
    setText("p_college", college || "DHAKA CITY COLLEGE");

    // Update department header
    setText("p_dept_header", (deptHeader || "DEPARTMENT OF BUSINESS ADMINISTRATION").toUpperCase());

    // Update assignment topic
    const pTopic = document.getElementById("p_topic");
    if (topic) {
        pTopic.textContent = topic;
        pTopic.classList.remove("placeholder");
    } else {
        pTopic.textContent = "Assignment Title";
        pTopic.classList.add("placeholder");
    }

    // Update course name
    const pSubject = document.getElementById("p_subject");
    if (subject) {
        pSubject.textContent = subject;
        pSubject.classList.remove("empty-field");
    } else {
        pSubject.textContent = "—";
        pSubject.classList.add("empty-field");
    }

    // Update course code
    const pCourse = document.getElementById("p_course");
    if (course) {
        pCourse.textContent = course;
        pCourse.classList.remove("empty-field");
    } else {
        pCourse.textContent = "—";
        pCourse.classList.add("empty-field");
    }

    // Update batch line
    updateBatchLine(program, batch, sem, session);

    // Update teacher
    const pTeacher = document.getElementById("p_teacher");
    if (teacher) {
        pTeacher.textContent = teacher;
        pTeacher.classList.remove("empty-field");
    } else {
        pTeacher.textContent = "Teacher Name";
        pTeacher.classList.add("empty-field");
    }

    // Update designation
    const pDesignation = document.getElementById("p_designation");
    if (designation) {
        pDesignation.textContent = designation;
        pDesignation.classList.remove("empty-field");
    } else {
        pDesignation.textContent = "Designation";
        pDesignation.classList.add("empty-field");
    }

    // Update teacher dept & college
    setText("p_tdept", tdept || "Department of Business Administration");
    setText("p_tcollege", college || "Dhaka City College");

    // Update student name
    const pSname = document.getElementById("p_sname");
    if (sname) {
        pSname.textContent = sname;
        pSname.classList.remove("empty-field");
    } else {
        pSname.textContent = "Student Name";
        pSname.classList.add("empty-field");
    }

    // Update roll
    const pRoll = document.getElementById("p_roll");
    pRoll.textContent = roll || "—";

    // Update section
    const pSec = document.getElementById("p_sec");
    pSec.textContent = sec || "—";

    // Update student session
    const pSsession = document.getElementById("p_ssession");
    const studentSession = ssession || session;
    pSsession.textContent = studentSession || "—";

    // Update date
    const pDate = document.getElementById("p_date");
    if (date) {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
        const month = months[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        pDate.textContent = "Date of Submission: " + day + " " + month + " " + year;
        pDate.classList.remove("placeholder");
    } else {
        pDate.textContent = "Date of Submission: —";
        pDate.classList.add("placeholder");
    }
}

// Helper: get trimmed value
function val(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
}

// Helper: set text content
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

// Update batch line
function updateBatchLine(program, batch, sem, session) {
    const container = document.getElementById("p_batch_line");
    if (!container) return;

    const prog = program || "BBA";
    const b = batch || "__";
    const s = sem || "__";
    const sess = session || "__-__";

    container.innerHTML = `<span class="bold-label">${prog}</span> BATCH – <span class="underline-text">${b}</span> Semester – <span class="underline-text">${s}</span> Session: ${sess}`;
}

// ============ CLEAR INDIVIDUAL FIELD ============
function clearField(id) {
    const el = document.getElementById(id);
    el.value = "";
    el.classList.remove("valid", "error");
    el.style.borderColor = "";

    if (id === "f_subject") {
        closeSuggestions("subject_suggestions");
        document.getElementById("f_course").value = "";
    }
    if (id === "f_teacher") {
        closeSuggestions("teacher_suggestions");
        document.getElementById("f_designation").value = "";
    }
    if (id === "f_course") {
        // just clear
    }
    if (id === "f_topic") {
        // just clear
    }

    upd();
}

// ============ CLEAR ALL ============
function clrAll() {
    const allFields = [
        "f_topic", "f_subject", "f_course",
        "f_batch", "f_sem", "f_session",
        "f_teacher", "f_sname", "f_roll", "f_sec", "f_ssession",
        "f_date"
    ];

    allFields.forEach(function(id) {
        const e = document.getElementById(id);
        if (e) {
            e.value = "";
            e.classList.remove("valid", "error");
            e.style.borderColor = "";
        }
    });

    document.getElementById("f_designation").value = "";
    document.getElementById("f_tdept").value = "Department of Business Administration";
    document.getElementById("f_college").value = "Dhaka City College";
    document.getElementById("f_dept_header").value = "Department of Business Administration";
    document.getElementById("f_program").value = "BBA";

    closeSuggestions("subject_suggestions");
    closeSuggestions("teacher_suggestions");

    upd();
}

// ============ SUGGESTIONS ============
function closeSuggestions(containerId) {
    const el = document.getElementById(containerId);
    if (el) el.innerHTML = "";
}

// Subject suggestions
document.getElementById("f_subject").addEventListener("input", function() {
    const v = this.value.trim().toLowerCase();
    const container = document.getElementById("subject_suggestions");

    if (v.length < 1) {
        container.innerHTML = "";
        return;
    }

    const matches = subjects.filter(s =>
        s.name.toLowerCase().includes(v) || s.code.includes(v)
    );

    if (matches.length === 0) {
        container.innerHTML = "";
        return;
    }

    let html = '<div class="suggestions-list">';
    matches.forEach(s => {
        html += `<div class="suggestion-item" onclick="selectSubject('${escapeQuotes(s.name)}', '${s.code}')">${s.name} <span style="color:#888;font-size:11px;">(${s.code})</span></div>`;
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
    const v = this.value.trim().toLowerCase();
    const container = document.getElementById("teacher_suggestions");

    if (v.length < 1) {
        container.innerHTML = "";
        return;
    }

    const matches = teachers.filter(t =>
        t.name.toLowerCase().includes(v)
    );

    if (matches.length === 0) {
        container.innerHTML = "";
        return;
    }

    let html = '<div class="suggestions-list">';
    matches.forEach(t => {
        html += `<div class="suggestion-item" onclick="selectTeacher('${escapeQuotes(t.name)}', '${escapeQuotes(t.designation)}')">${t.name} <span style="color:#888;font-size:11px;">(${t.designation})</span></div>`;
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

// Escape quotes for onclick
function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
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

// ============ VALIDATION ============
function validateRequired() {
    const required = [
        { id: "f_topic", label: "Assignment Topic" },
        { id: "f_sname", label: "Student Name" },
        { id: "f_roll", label: "Roll No" },
        { id: "f_sec", label: "Section" },
        { id: "f_batch", label: "Batch" },
        { id: "f_sem", label: "Semester" },
        { id: "f_session", label: "Session" },
        { id: "f_date", label: "Date of Submission" }
    ];

    let valid = true;
    let missing = [];

    required.forEach(function(field) {
        const el = document.getElementById(field.id);
        const v = el.value.trim();
        if (!v) {
            markError(field.id);
            missing.push(field.label);
            valid = false;
        }
    });

    if (!valid) {
        alert("Please fill in the following required fields:\n• " + missing.join("\n• "));
    }

    return valid;
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

// ============ DOWNLOAD PDF ============
function downloadPDF() {
    if (!validateRequired()) return;

    const element = document.getElementById("coverPage");
    const originalTransform = element.style.transform;
    element.style.transform = "none";

    const studentName = val("f_sname") || "Cover_Page";
    const fileName = "DCC_" + studentName.replace(/\s+/g, "_") + ".pdf";

    const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        element.style.transform = originalTransform;
    }).catch(() => {
        element.style.transform = originalTransform;
    });
}

// ============ DOWNLOAD PDF (MOBILE FIXED) ============
async function downloadPDF() {
    // Validate required fields
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

    // Button loading state
    const btn = document.getElementById("downloadBtn");
    const origText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    btn.disabled = true;

    const originalElement = document.getElementById("coverPage");

    // FIX 1: Create an off-screen container at exactly top:0, left:0
    // This stops mobile scroll positions from generating blank pages
    const cloneContainer = document.createElement("div");
    cloneContainer.style.position = "absolute";
    cloneContainer.style.top = "0";
    cloneContainer.style.left = "0";
    cloneContainer.style.width = "595px";
    cloneContainer.style.height = "842px";
    cloneContainer.style.zIndex = "-9999"; 
    cloneContainer.style.background = "#fff";

    // FIX 2: Clone the cover page to strip away the mobile live-preview "scale()" transforms
    const clone = originalElement.cloneNode(true);
    clone.style.transform = "none";
    clone.style.margin = "0";
    
    cloneContainer.appendChild(clone);
    document.body.appendChild(cloneContainer);

    const opt = {
        margin: 0,
        filename: 'DCC_Cover_Page.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            scrollY: 0, // CRITICAL FIX: Ignores mobile scrolling
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

    // Generate PDF from the pristine clone
    try {
        await html2pdf().set(opt).from(clone).save();
    } catch (error) {
        console.error("PDF generation failed:", error);
        alert("An error occurred during download.");
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
                body {
                    display: flex;
                    justify-content: center;
                    font-family: 'Times New Roman', Times, serif;
                }
                @page { size: A4; margin: 0; }

                .cover-page {
                    width: 210mm;
                    min-height: 297mm;
                    background: #fff;
                    padding: 40px 60px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-family: 'Times New Roman', Times, serif;
                }

                .cover-logo-top { margin-bottom: 16px; }
                .college-logo { width: 80px; height: 80px; object-fit: contain; }

                .college-name {
                    font-size: 22px;
                    font-weight: 700;
                    color: #000;
                    letter-spacing: 2px;
                    text-align: center;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }

                .dept-name {
                    font-size: 16px;
                    font-weight: 700;
                    color: #000;
                    text-align: center;
                    margin-bottom: 24px;
                    text-transform: uppercase;
                }

                .cover-section { text-align: center; width: 100%; }

                .assignment-section { margin-bottom: 12px; }
                .assignment-on-label { font-size: 15px; font-weight: 700; margin-bottom: 4px; font-style: italic; }
                .assignment-topic { font-size: 14px; font-style: italic; }

                .course-section { margin-bottom: 8px; }
                .course-line { font-size: 14px; line-height: 1.9; }
                .bold-label { font-weight: 700; }

                .batch-section { margin-bottom: 30px; }
                .batch-line { font-size: 14px; font-weight: 700; }
                .underline-text { text-decoration: underline; }

                .submitted-to-section { margin-bottom: 28px; margin-top: 10px; }
                .section-heading { font-size: 20px; font-weight: 700; font-style: italic; margin-bottom: 8px; }
                .teacher-name { font-size: 14px; margin-bottom: 2px; }
                .teacher-info { font-size: 13px; line-height: 1.8; }

                .submitted-by-section { margin-bottom: 20px; }
                .student-name { font-size: 14px; margin-bottom: 4px; }
                .student-info { font-size: 13px; line-height: 1.8; }

                .date-section { margin-top: auto; padding-top: 30px; border-top: 1px solid #ccc; width: 80%; }
                .date-line { font-size: 13px; font-style: italic; }

                .empty-field { color: #bbb !important; font-style: italic !important; }
                .placeholder { color: #aaa; }
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
    let scale = Math.min((wrapperWidth - 40) / pageWidth, 1);
    scale = Math.max(scale, 0.35);

    coverPage.style.transform = "scale(" + scale + ")";
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

let resizeTimeout;
window.addEventListener("resize", function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(adjustZoom, 100);
});