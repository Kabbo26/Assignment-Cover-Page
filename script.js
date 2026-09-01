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



// Semester auto-detection from course code
function getSemesterFromCode(code) {
    const semesterMap = {
        '510101': '01', '510103': '01', '510105': '01', '510107': '01', '211501': '01',
        '510109': '02', '510111': '02', '510113': '02', '510115': '02', '510117': '02',
        '520119': '03', '520121': '03', '520123': '03', '520125': '03', '520127': '03',
        '520129': '04', '520131': '04', '520133': '04', '520135': '04', '520137': '04',
        '530139': '05', '530141': '05', '530143': '05', '530145': '05', '530147': '05',
        '530149': '06', '530151': '06', '530153': '06', '530155': '06', '530157': '06', '530158': '06',
    };
    // Major subjects are 7th and 8th semester
    if (code.startsWith('542')) return '07/08';
    return semesterMap[code] || '';
}

// ============ DOM ELEMENTS ============
const dom = {
    subjectName: document.getElementById('subjectName'),
    courseCode: document.getElementById('courseCode'),
    assignmentTitle: document.getElementById('assignmentTitle'),
    teacherName: document.getElementById('teacherName'),
    designation: document.getElementById('designation'),
    teacherDept: document.getElementById('teacherDept'),
    studentName: document.getElementById('studentName'),
    roll: document.getElementById('roll'),
    section: document.getElementById('section'),
    batch: document.getElementById('batch'),
    semester: document.getElementById('semester'),
    session: document.getElementById('session'),
    studentDept: document.getElementById('studentDept'),
    submissionDate: document.getElementById('submissionDate'),
    // Dropdowns
    subjectDropdown: document.getElementById('subjectDropdown'),
    codeDropdown: document.getElementById('codeDropdown'),
    teacherDropdown: document.getElementById('teacherDropdown'),
    // Preview elements
    cvLogo: document.getElementById('cvLogo'),
    cvCollege: document.getElementById('cvCollege'),
    cvDeptTitle: document.getElementById('cvDeptTitle'),
    cvAssignOn: document.getElementById('cvAssignOn'),
    cvAssignTitle: document.getElementById('cvAssignTitle'),
    cvCourseName: document.getElementById('cvCourseName'),
    cvCourseCode: document.getElementById('cvCourseCode'),
    cvBatchRow: document.getElementById('cvBatchRow'),
    cvBatch: document.getElementById('cvBatch'),
    cvSemester: document.getElementById('cvSemester'),
    cvSession: document.getElementById('cvSession'),
    cvTeacherName: document.getElementById('cvTeacherName'),
    cvDesignation: document.getElementById('cvDesignation'),
    cvStudentName: document.getElementById('cvStudentName'),
    cvRoll: document.getElementById('cvRoll'),
    cvSection: document.getElementById('cvSection'),
    cvSessionBy: document.getElementById('cvSessionBy'),
    cvDate: document.getElementById('cvDate'),
    cvSeparatorLine: document.getElementById('cvSeparatorLine'),
    cvLineContainer: document.getElementById('cvLineContainer'),
    // Advanced
    pageBorder: document.getElementById('pageBorder'),
    coverPage: document.getElementById('coverPage'),
};

// ============ DROPDOWN LOGIC ============
function createDropdown(inputEl, dropdownEl, dataList, type) {
    let selectedIndex = -1;

    inputEl.addEventListener('input', function () {
        const val = this.value.toLowerCase().trim();
        dropdownEl.innerHTML = '';
        selectedIndex = -1;

        if (val.length === 0) {
            // Show all items
            dataList.forEach((item, idx) => {
                const div = createDropdownItem(item, type, idx);
                dropdownEl.appendChild(div);
            });
        } else {
            const filtered = dataList.filter(item => {
                if (type === 'subject') {
                    return item.name.toLowerCase().includes(val) || item.code.includes(val);
                } else if (type === 'code') {
                    return item.code.includes(val) || item.name.toLowerCase().includes(val);
                } else {
                    return item.name.toLowerCase().includes(val);
                }
            });
            filtered.forEach((item, idx) => {
                const div = createDropdownItem(item, type, idx);
                dropdownEl.appendChild(div);
            });
        }

        dropdownEl.classList.add('active');
    });

    inputEl.addEventListener('focus', function () {
        if (dropdownEl.children.length === 0) {
            dataList.forEach((item, idx) => {
                const div = createDropdownItem(item, type, idx);
                dropdownEl.appendChild(div);
            });
        }
        dropdownEl.classList.add('active');
    });

    inputEl.addEventListener('keydown', function (e) {
        const items = dropdownEl.querySelectorAll('.dropdown-item');
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex >= 0 && items[selectedIndex]) {
                items[selectedIndex].click();
            }
        } else if (e.key === 'Escape') {
            dropdownEl.classList.remove('active');
        }
    });

    function updateSelection(items) {
        items.forEach((item, idx) => {
            item.classList.toggle('active', idx === selectedIndex);
        });
        if (items[selectedIndex]) {
            items[selectedIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    function createDropdownItem(item, type, idx) {
        const div = document.createElement('div');
        div.classList.add('dropdown-item');

        if (type === 'subject') {
            div.innerHTML = `${item.name} <span class="item-code">${item.code}</span>`;
            div.addEventListener('click', () => selectSubject(item));
        } else if (type === 'code') {
            div.innerHTML = `${item.code} <span class="item-code">${item.name}</span>`;
            div.addEventListener('click', () => selectSubject(item));
        } else if (type === 'teacher') {
            div.innerHTML = `${item.name} <span class="item-code">${item.designation}</span>`;
            div.addEventListener('click', () => selectTeacher(item));
        }

        return div;
    }

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
        if (!inputEl.contains(e.target) && !dropdownEl.contains(e.target)) {
            dropdownEl.classList.remove('active');
        }
    });
}

function selectSubject(subject) {
    dom.subjectName.value = subject.name;
    dom.courseCode.value = subject.code;
    dom.subjectDropdown.classList.remove('active');
    dom.codeDropdown.classList.remove('active');

    // Auto-fill semester
    const sem = getSemesterFromCode(subject.code);
    if (sem) {
        dom.semester.value = sem;
    }

    updatePreview();
}

function selectTeacher(teacher) {
    dom.teacherName.value = teacher.name;
    dom.designation.value = teacher.designation;
    dom.teacherDropdown.classList.remove('active');
    updatePreview();
}

// Initialize dropdowns
createDropdown(dom.subjectName, dom.subjectDropdown, subjects, 'subject');
createDropdown(dom.courseCode, dom.codeDropdown, subjects, 'code');
createDropdown(dom.teacherName, dom.teacherDropdown, teachers, 'teacher');

// ============ CLEAR FIELD ============
function clearField(fieldId) {
    const el = document.getElementById(fieldId);
    el.value = '';
    if (fieldId === 'subjectName') {
        dom.courseCode.value = '';
        dom.semester.value = '';
    }
    if (fieldId === 'courseCode') {
        dom.subjectName.value = '';
        dom.semester.value = '';
    }
    if (fieldId === 'teacherName') {
        dom.designation.value = '';
    }
    updatePreview();
}

function clearAll() {
    const inputs = document.querySelectorAll('.form-card input[type="text"], .form-card input[type="date"]');
    inputs.forEach(input => {
        if (input.id === 'teacherDept' || input.id === 'studentDept') {
            input.value = 'Department Of Business Administration';
        } else {
            input.value = '';
        }
    });
    dom.designation.value = '';
    updatePreview();
}

// ============ LIVE PREVIEW UPDATE ============
function updatePreview() {
    // Assignment Title
    const title = dom.assignmentTitle.value.trim();
    dom.cvAssignTitle.innerHTML = title
        ? `<em class="filled-text">${escapeHtml(title)}</em>`
        : `<em class="placeholder-text">ASSIGNMENT TITLE</em>`;

    // Course Name
    const courseName = dom.subjectName.value.trim();
    dom.cvCourseName.innerHTML = courseName
        ? `<em class="filled-text">${escapeHtml(courseName)}</em>`
        : `<em class="placeholder-text">Name Of The Course</em>`;
    dom.cvCourseName.className = courseName ? 'filled-text' : 'placeholder-text';

    // Course Code
    const code = dom.courseCode.value.trim();
    dom.cvCourseCode.textContent = code || '——';
    dom.cvCourseCode.className = code ? 'filled-text' : 'placeholder-text';

    // Batch
    const batch = dom.batch.value.trim();
    dom.cvBatch.textContent = batch || '——';
    dom.cvBatch.className = batch ? '' : 'placeholder-text';

    // Semester
    const semester = dom.semester.value.trim();
    dom.cvSemester.textContent = semester || '——';
    dom.cvSemester.className = semester ? '' : 'placeholder-text';

    // Session
    const session = dom.session.value.trim();
    dom.cvSession.textContent = session || '——';
    dom.cvSession.className = session ? '' : 'placeholder-text';
    dom.cvSessionBy.textContent = session || '——';
    dom.cvSessionBy.className = session ? '' : 'placeholder-text';

    // Teacher
    const teacher = dom.teacherName.value.trim();
    dom.cvTeacherName.innerHTML = teacher
        ? `<em class="filled-text" style="color:#b8860b">${escapeHtml(teacher)}</em>`
        : `<em class="placeholder-text">TEACHER'S NAME</em>`;

    // Designation
    const desig = dom.designation.value;
    dom.cvDesignation.innerHTML = desig
        ? `<em class="filled-text" style="color:#666">${escapeHtml(desig)}</em>`
        : `<em class="placeholder-text">Designation</em>`;

    // Student
    const student = dom.studentName.value.trim();
    dom.cvStudentName.innerHTML = student
        ? `<em class="filled-text" style="color:#b8860b">${escapeHtml(student)}</em>`
        : `<em class="placeholder-text">Student's Name</em>`;

    // Roll
    const roll = dom.roll.value.trim();
    dom.cvRoll.textContent = roll || '——';
    dom.cvRoll.className = roll ? '' : 'placeholder-text';

    // Section
    const sec = dom.section.value.trim();
    dom.cvSection.textContent = sec || '——';
    dom.cvSection.className = sec ? '' : 'placeholder-text';

    // Date
    const dateVal = dom.submissionDate.value;
    if (dateVal) {
        const d = new Date(dateVal);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formatted = d.toLocaleDateString('en-US', options);
        dom.cvDate.innerHTML = `<strong>Date of Submission:</strong> ${formatted}`;
        dom.cvDate.style.color = '#333';
        dom.cvDate.style.fontStyle = 'italic';
    } else {
        dom.cvDate.innerHTML = `<em class="placeholder-text">Date of Submission: ——</em>`;
        dom.cvDate.style.color = '';
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Attach event listeners for live preview
const allInputs = document.querySelectorAll('.form-card input, .form-card select');
allInputs.forEach(input => {
    input.addEventListener('input', updatePreview);
    input.addEventListener('change', updatePreview);
});

// ============ ADVANCED SETTINGS ============
function toggleAdvanced() {
    const body = document.getElementById('advancedBody');
    const arrow = document.getElementById('advancedArrow');
    body.classList.toggle('open');
    arrow.classList.toggle('open');
}

// Border toggles
document.getElementById('toggleBorder').addEventListener('change', updateBorder);
document.getElementById('borderStyle').addEventListener('change', updateBorder);
document.getElementById('borderWidth').addEventListener('change', updateBorder);
document.getElementById('borderColor').addEventListener('input', updateBorder);
document.getElementById('borderRadius').addEventListener('change', updateBorder);
document.getElementById('borderPadding').addEventListener('change', updateBorder);

function updateBorder() {
    const show = document.getElementById('toggleBorder').checked;
    const optionsDiv = document.getElementById('borderOptions');

    if (!show) {
        dom.pageBorder.style.border = 'none';
        optionsDiv.style.opacity = '0.4';
        optionsDiv.style.pointerEvents = 'none';
    } else {
        const style = document.getElementById('borderStyle').value;
        const width = document.getElementById('borderWidth').value;
        const color = document.getElementById('borderColor').value;
        const radius = document.getElementById('borderRadius').value;
        const padding = document.getElementById('borderPadding').value;

        dom.pageBorder.style.border = `${width} ${style} ${color}`;
        dom.pageBorder.style.borderRadius = radius;
        dom.pageBorder.style.padding = padding;
        optionsDiv.style.opacity = '1';
        optionsDiv.style.pointerEvents = 'auto';
    }

    document.getElementById('borderColorLabel').textContent = document.getElementById('borderColor').value;
}

// Line toggles
document.getElementById('toggleLine').addEventListener('change', updateLine);
document.getElementById('lineStyle').addEventListener('change', updateLine);
document.getElementById('lineWidth').addEventListener('change', updateLine);
document.getElementById('lineColor').addEventListener('input', updateLine);
document.getElementById('lineLength').addEventListener('change', updateLine);

function updateLine() {
    const show = document.getElementById('toggleLine').checked;
    const optionsDiv = document.getElementById('lineOptions');

    if (!show) {
        dom.cvLineContainer.style.display = 'none';
        optionsDiv.style.opacity = '0.4';
        optionsDiv.style.pointerEvents = 'none';
    } else {
        dom.cvLineContainer.style.display = 'flex';
        const style = document.getElementById('lineStyle').value;
        const width = document.getElementById('lineWidth').value;
        const color = document.getElementById('lineColor').value;
        const length = document.getElementById('lineLength').value;

        dom.cvSeparatorLine.style.borderTop = `${width} ${style} ${color}`;
        dom.cvSeparatorLine.style.width = length;
        optionsDiv.style.opacity = '1';
        optionsDiv.style.pointerEvents = 'auto';
    }

    document.getElementById('lineColorLabel').textContent = document.getElementById('lineColor').value;
}

// Element toggles
document.getElementById('toggleLogo').addEventListener('change', function () {
    dom.cvLogo.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('toggleCollege').addEventListener('change', function () {
    dom.cvCollege.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('toggleDeptTitle').addEventListener('change', function () {
    dom.cvDeptTitle.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('toggleAssignOn').addEventListener('change', function () {
    dom.cvAssignOn.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('toggleBatchRow').addEventListener('change', function () {
    dom.cvBatchRow.style.display = this.checked ? 'flex' : 'none';
});

// ============ PDF DOWNLOAD ============
let pdfObjectUrl = null; // tracks the current blob URL so we can release it

async function downloadPDF() {
    const btn = document.getElementById('downloadBtn');
    btn.classList.add('loading');
    btn.disabled = true;
    btn.textContent = 'Generating...';

    const element = document.getElementById('coverPage');
    const scrollContainer = document.getElementById('previewScroll');

    // Remember everything we're about to temporarily change so we can restore it
    const prevTransform = element.style.transform;
    const prevTransformOrigin = element.style.transformOrigin;
    const prevMarginBottom = element.style.marginBottom;
    const prevScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;

    try {
        // Make sure web fonts have finished loading before we snapshot the page
        if (document.fonts && document.fonts.ready) {
            await document.fonts.ready;
        }

        // .a4-page normally lives inside a scrolled + zoomed preview
        // (transform: scale + a negative margin-bottom to compensate for the
        // zoom, plus overflow-y: auto on its parent). Capturing it as-is can
        // produce a blank or mis-cropped render, so reset the zoom/scroll to
        // show the page at true, full size before capturing.
        element.style.transform = 'none';
        element.style.transformOrigin = 'top left';
        element.style.marginBottom = '0';
        if (scrollContainer) scrollContainer.scrollTop = 0;

        // Force the browser to apply the style changes above before we measure
        // or capture anything.
        void element.offsetHeight;

        // Wait for every image inside the page (e.g. the logo) to actually
        // finish loading — capturing before images are ready is another
        // common cause of a blank/incomplete PDF.
        const images = Array.from(element.querySelectorAll('img'));
        await Promise.all(images.map(img => {
            if (img.complete && img.naturalWidth > 0) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve; // don't block forever on a broken image
            });
        }));

        // Rasterize the page ourselves with html2canvas (bundled and exposed
        // globally by html2pdf.bundle.min.js), instead of going through
        // html2pdf's own from()/toPdf() wrapper. This gives us the exact
        // same image both for the on-screen preview AND the PDF, and lets us
        // size the PDF page to match the image pixel-for-pixel, so there's
        // never a mismatch or a stray extra page.
      // Ensure your element has an ID, or add a specific class to target it in onclone
  // never a mismatch or a stray extra page.

       const canvas = await html2canvas(element, {
    scale: 1,
    useCORS: true,
    logging: false,
    letterRendering: true,
    backgroundColor: '#ffffff',
    // Add these two lines to fix the blank render issue:
    scrollX: 1,
    scrollY: 1,

});



        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        // Build a single-page PDF whose page size is exactly the canvas's
        // own pixel dimensions, and draw the image to fill that same size.
        // Because both numbers come from the same canvas, there is no
        // unit-conversion mismatch — the previous version's blank-corner and
        // stray-second-page bugs both came from the page size and the image
        // size being computed differently.
        const jsPDF = window.jspdf ? window.jspdf.jsPDF : window.jsPDF;
        const pdf = new jsPDF({
            unit: 'px',
            format: [canvas.width, canvas.height],
            orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
        });

        pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height, undefined, 'FAST');
        const pdfBlob = pdf.output('blob');

        if (pdfObjectUrl) {
            URL.revokeObjectURL(pdfObjectUrl); // release the previous PDF, if any
        }

        pdfObjectUrl = URL.createObjectURL(pdfBlob);

        // PDFs generally don't render inside an <iframe> on mobile browsers
        // (and unreliably even on desktop), so preview the same image we
        // just used to build the PDF instead — it's visually identical to
        // the PDF page and works everywhere with no plugin required.
        document.getElementById('pdfPreviewImage').src = imgData;

        const filename = generateFilename();
        const previewDownloadLink = document.getElementById('pdfPreviewDownloadLink');
        previewDownloadLink.href = pdfObjectUrl;
        previewDownloadLink.download = filename;

        document.getElementById('pdfPreviewModal').classList.add('active');
    } catch (err) {
        console.error('PDF generation failed:', err);
        alert('PDF generation failed. Please try again.');
    } finally {
        // Restore the preview to exactly how it was before we touched it
        element.style.transform = prevTransform;
        element.style.transformOrigin = prevTransformOrigin;
        element.style.marginBottom = prevMarginBottom;
        if (scrollContainer) scrollContainer.scrollTop = prevScrollTop;

        btn.classList.remove('loading');
        btn.disabled = false;
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download PDF`;
    }
}

function closePdfPreview() {
    document.getElementById('pdfPreviewModal').classList.remove('active');
}

function generateFilename() {
    const student = dom.studentName.value.trim() || 'Cover';
    const subject = dom.subjectName.value.trim() || 'Assignment';
    const clean = (str) => str.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '_');
    return `${clean(student)}_${clean(subject)}_Cover.pdf`;
}

// ============ PRINT ============
function printCover() {
    const printModal = document.getElementById('printModal');
    const printSizeVal = document.getElementById('printSize').value;
    document.getElementById('modalPrintSize').value = printSizeVal;
    printModal.classList.add('active');
}

function closePrintModal() {
    document.getElementById('printModal').classList.remove('active');
}

function executePrint() {
    closePrintModal();

    const size = document.getElementById('modalPrintSize').value;

    // Create print-specific style
    const printStyle = document.createElement('style');
    printStyle.id = 'dynamic-print-style';

    const sizeMap = {
        'A3': { width: '297mm', height: '420mm' },
        'A4': { width: '210mm', height: '297mm' },
        'A5': { width: '148mm', height: '210mm' },
        'Letter': { width: '8.5in', height: '11in' },
        'Legal': { width: '8.5in', height: '14in' },
        'Tabloid': { width: '11in', height: '17in' },
        'Executive': { width: '7.25in', height: '10.5in' },
    };

    const dims = sizeMap[size] || sizeMap['A4'];

    printStyle.textContent = `
        @media print {
            @page {
                size: ${dims.width} ${dims.height};
                margin: 0;
            }

            body * {
                visibility: hidden;
            }

            #coverPage, #coverPage * {
                visibility: visible;
            }

            #coverPage {
                position: fixed;
                left: 0;
                top: 0;
                width: ${dims.width};
                height: ${dims.height};
                transform: none !important;
                box-shadow: none !important;
                margin: 0;
                padding: 0;
                min-height: ${dims.height};
            }

            .a4-page {
                width: ${dims.width} !important;
                min-height: ${dims.height} !important;
                box-shadow: none !important;
                transform: none !important;
            }

            .page-border {
                position: absolute;
                top: 10px;
                left: 10px;
                right: 10px;
                bottom: 10px;
            }

            .header, .form-panel, .preview-topbar, .action-bar, .modal-overlay, .advanced-card {
                display: none !important;
            }
        }
    `;

    document.head.appendChild(printStyle);

    // Store and reset transform
    const coverPage = document.getElementById('coverPage');
    const originalTransform = coverPage.style.transform;
    coverPage.style.transform = 'none';

    setTimeout(() => {
        window.print();

        // Restore after print
        setTimeout(() => {
            coverPage.style.transform = originalTransform;
            const dynStyle = document.getElementById('dynamic-print-style');
            if (dynStyle) dynStyle.remove();
        }, 500);
    }, 200);
}

// Close modal on overlay click
document.getElementById('printModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closePrintModal();
    }
});

document.getElementById('pdfPreviewModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closePdfPreview();
    }
});

// ============ INITIAL SETUP ============
updatePreview();
updateBorder();
updateLine();

// Handle responsive zoom label
function updateZoomLabel() {
    const width = window.innerWidth;
    const label = document.getElementById('zoomLabel');
    if (width <= 600) {
        label.textContent = '40% zoom';
    } else if (width <= 1100) {
        label.textContent = '55% zoom';
    } else {
        label.textContent = '75% zoom';
    }
}

updateZoomLabel();
window.addEventListener('resize', updateZoomLabel);

// Prevent form submission on enter
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        e.preventDefault();
    }
});

console.log('DCC Cover Generator loaded successfully.');