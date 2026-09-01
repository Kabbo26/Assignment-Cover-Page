// ============ DATA ============
const subjects = [
    { name: "Introduction to Business", code: "510101" },
    { name: "Business Communication & Report Writing", code: "510103" },
    { name: "Business Accounting", code: "510105" },
    { name: "Business Mathematics", code: "510107" },
    { name: "History of Emergence of Independent Bangladesh (In Bangla)", code: "211501" },
    { name: "Principles of Management", code: "510109" },
    { name: "Taxation in Bangladesh", code: "510111" },
    { name: "Computer and Information Technology", code: "510113" },
    { name: "Theory and Practice of Banking", code: "510115" },
    { name: "Micro Economics", code: "510117" },
    { name: "Business Statistics-I", code: "520119" },
    { name: "Organization Behavior", code: "520121" },
    { name: "Legal Environment of Business", code: "520123" },
    { name: "E-Commerce", code: "520125" },
    { name: "Macro Economics", code: "520127" },
    { name: "Risk Management & Insurance", code: "520129" },
    { name: "Business Statistics-II", code: "520131" },
    { name: "Human Resource Management", code: "520133" },
    { name: "Export-Import Management", code: "520135" },
    { name: "Supply Chain Management", code: "520137" },
    { name: "Principles of Finance", code: "530139" },
    { name: "Principles of Marketing", code: "530141" },
    { name: "Cost Accounting", code: "530143" },
    { name: "Tourism & Hospitality Management", code: "530145" },
    { name: "Entrepreneurship & Small Business Management", code: "530147" },
    { name: "Financial Management", code: "530149" },
    { name: "Marketing Management", code: "530151" },
    { name: "Management Accounting", code: "530153" },
    { name: "Enterprise Resource Planning", code: "530155" },
    { name: "Research Methodology", code: "530157" },
    { name: "Viva-Voce", code: "530158" },
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

// Semester mapping based on course code prefix
const semesterMap = {
    '5101': '01', '2115': '01',
    '5101': '02',
    '5201': '03',
    '5201': '04',
    '5301': '05',
    '5301': '06',
};

function getSemesterFromCode(code) {
    if (!code || code.length < 6) return '';
    const prefix = code.substring(0, 4);
    const num = parseInt(code.substring(4));
    
    // 1st semester: 510101-510107, 211501
    if ((prefix === '5101' && num >= 1 && num <= 7) || code === '211501') return '01';
    // 2nd semester: 510109-510117
    if (prefix === '5101' && num >= 9 && num <= 17) return '02';
    // 3rd semester: 520119-520127
    if (prefix === '5201' && num >= 19 && num <= 27) return '03';
    // 4th semester: 520129-520137
    if (prefix === '5201' && num >= 29 && num <= 37) return '04';
    // 5th semester: 530139-530147
    if (prefix === '5301' && num >= 39 && num <= 47) return '05';
    // 6th semester: 530149-530158
    if (prefix === '5301' && num >= 49 && num <= 58) return '06';
    // Major subjects: 7th & 8th semester
    if (prefix === '5425' || prefix === '5426' || prefix === '5423' || prefix === '5424') {
        if (num <= 10) return '07';
        return '08';
    }
    return '';
}

// ============ DOM ELEMENTS ============
const $ = id => document.getElementById(id);

const els = {
    subjectName: $('subjectName'),
    courseCode: $('courseCode'),
    assignmentTitle: $('assignmentTitle'),
    teacherName: $('teacherName'),
    designation: $('designation'),
    teacherDept: $('teacherDept'),
    studentName: $('studentName'),
    roll: $('roll'),
    section: $('section'),
    batch: $('batch'),
    semester: $('semester'),
    session: $('session'),
    studentDept: $('studentDept'),
    submissionDate: $('submissionDate'),
    borderStyle: $('borderStyle'),
    borderColor: $('borderColor'),
    printSize: $('printSize'),
};

// ============ AUTOCOMPLETE SETUP ============
function setupAutocomplete(input, listEl, data, type) {
    let activeIndex = -1;

    input.addEventListener('input', function() {
        const val = this.value.toLowerCase().trim();
        listEl.innerHTML = '';
        activeIndex = -1;

        if (!val) {
            listEl.classList.remove('show');
            return;
        }

        let filtered;
        if (type === 'subject') {
            filtered = data.filter(s => s.name.toLowerCase().includes(val));
        } else if (type === 'code') {
            filtered = data.filter(s => s.code.includes(val) || s.name.toLowerCase().includes(val));
        } else if (type === 'teacher') {
            filtered = data.filter(t => t.name.toLowerCase().includes(val));
        }

        if (filtered.length === 0) {
            listEl.classList.remove('show');
            return;
        }

        filtered.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = 'autocomplete-item';

            if (type === 'subject') {
                div.innerHTML = `<div>${highlightMatch(item.name, val)}</div><div class="item-code">Code: ${item.code}</div>`;
            } else if (type === 'code') {
                div.innerHTML = `<div>${highlightMatch(item.code, val)}</div><div class="item-code">${item.name}</div>`;
            } else if (type === 'teacher') {
                div.innerHTML = `<div>${highlightMatch(item.name, val)}</div><div class="item-designation">${item.designation}</div>`;
            }

            div.addEventListener('click', () => {
                if (type === 'subject') {
                    els.subjectName.value = item.name;
                    els.courseCode.value = item.code;
                    const sem = getSemesterFromCode(item.code);
                    if (sem) els.semester.value = sem;
                } else if (type === 'code') {
                    els.courseCode.value = item.code;
                    els.subjectName.value = item.name;
                    const sem = getSemesterFromCode(item.code);
                    if (sem) els.semester.value = sem;
                } else if (type === 'teacher') {
                    els.teacherName.value = item.name;
                    els.designation.value = item.designation;
                }
                listEl.classList.remove('show');
                updatePreview();
            });

            listEl.appendChild(div);
        });

        listEl.classList.add('show');
    });

    input.addEventListener('keydown', function(e) {
        const items = listEl.querySelectorAll('.autocomplete-item');
        if (!listEl.classList.contains('show') || items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeIndex = Math.min(activeIndex + 1, items.length - 1);
            updateActiveItem(items, activeIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeIndex = Math.max(activeIndex - 1, 0);
            updateActiveItem(items, activeIndex);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && items[activeIndex]) {
                items[activeIndex].click();
            }
        } else if (e.key === 'Escape') {
            listEl.classList.remove('show');
        }
    });

    input.addEventListener('focus', function() {
        if (this.value.trim() && listEl.children.length > 0) {
            listEl.classList.add('show');
        }
    });
}

function updateActiveItem(items, idx) {
    items.forEach(item => item.classList.remove('active'));
    if (items[idx]) {
        items[idx].classList.add('active');
        items[idx].scrollIntoView({ block: 'nearest' });
    }
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<strong style="color:#4f46e5">$1</strong>');
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Close autocomplete on outside click
document.addEventListener('click', function(e) {
    document.querySelectorAll('.autocomplete-list').forEach(list => {
        if (!list.parentElement.contains(e.target)) {
            list.classList.remove('show');
        }
    });
});

// Initialize autocompletes
setupAutocomplete(els.subjectName, $('subjectList'), subjects, 'subject');
setupAutocomplete(els.courseCode, $('codeList'), subjects, 'code');
setupAutocomplete(els.teacherName, $('teacherList'), teachers, 'teacher');

// ============ LIVE PREVIEW UPDATE ============
function updatePreview() {
    // Assignment title
    const titleEl = $('cvAssignmentTitle');
    if (els.assignmentTitle.value.trim()) {
        titleEl.innerHTML = `<em>${escapeHtml(els.assignmentTitle.value)}</em>`;
        titleEl.classList.add('filled');
    } else {
        titleEl.innerHTML = '<em>ASSIGNMENT TITLE</em>';
        titleEl.classList.remove('filled');
    }

    // Course name
    updatePlaceholder('cvCourseName', els.subjectName.value, 'Name Of The Course');

    // Course code
    updatePlaceholder('cvCourseCode', els.courseCode.value, '——');

    // Batch
    updatePlaceholder('cvBatch', els.batch.value, '—');

    // Semester
    updatePlaceholder('cvSemester', els.semester.value, '—');

    // Session
    updatePlaceholder('cvSession', els.session.value, '——');
    updatePlaceholder('cvSessionBottom', els.session.value, '——');

    // Teacher name
    const teacherEl = $('cvTeacherName');
    if (els.teacherName.value.trim()) {
        teacherEl.innerHTML = `<em>${escapeHtml(els.teacherName.value)}</em>`;
        teacherEl.classList.add('filled');
    } else {
        teacherEl.innerHTML = "<em>TEACHER'S NAME</em>";
        teacherEl.classList.remove('filled');
    }

    // Designation
    const desigEl = $('cvDesignation');
    if (els.designation.value) {
        desigEl.innerHTML = `<em>${escapeHtml(els.designation.value)}</em>`;
        desigEl.classList.add('filled');
    } else {
        desigEl.innerHTML = '<em>Designation</em>';
        desigEl.classList.remove('filled');
    }

    // Department text on cover
    const deptText = els.teacherDept.value || 'Business Administration';
    // Extract department name for italic display
    const deptShort = deptText.replace(/^Department\s*(Of|of)\s*/i, '');
    document.querySelector('.cv-dept-line').innerHTML = `Department of <em>${escapeHtml(deptShort)}</em>`;

    // Student name
    const studentEl = $('cvStudentName');
    if (els.studentName.value.trim()) {
        studentEl.innerHTML = `<em>${escapeHtml(els.studentName.value)}</em>`;
        studentEl.classList.add('filled');
    } else {
        studentEl.innerHTML = "<em>Student's Name</em>";
        studentEl.classList.remove('filled');
    }

    // Roll
    updatePlaceholder('cvRoll', els.roll.value, '——');

    // Section
    updatePlaceholder('cvSection', els.section.value, '—');

    // Department header
    $('cvDepartment').textContent = (els.teacherDept.value || 'DEPARTMENT OF BUSINESS ADMINISTRATION').toUpperCase();

    // Date
    const dateEl = $('cvDate');
    if (els.submissionDate.value) {
        const d = new Date(els.submissionDate.value);
        const formatted = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        dateEl.innerHTML = `<strong>Date of Submission:</strong> ${formatted}`;
    } else {
        dateEl.innerHTML = '<strong>Date of Submission:</strong> <span class="cv-placeholder">…………</span>';
    }

    // Border style
    updateBorderStyle();
}

function updatePlaceholder(id, value, placeholder) {
    const el = $(id);
    if (value && value.trim()) {
        el.textContent = value;
        el.classList.add('filled');
    } else {
        el.textContent = placeholder;
        el.classList.remove('filled');
    }
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function updateBorderStyle() {
    const border = $('pageBorder');
    const style = els.borderStyle.value;
    const color = els.borderColor.value;

    border.className = 'page-border';
    border.style.borderColor = color;

    const innerBorder = border.querySelector('.page-content');

    switch (style) {
        case 'double':
            border.style.border = `3px double ${color}`;
            innerBorder.style.border = `1.5px solid ${color}`;
            break;
        case 'single':
            border.style.border = `2px solid ${color}`;
            border.classList.add('single');
            innerBorder.style.border = 'none';
            break;
        case 'thick':
            border.style.border = `4px solid ${color}`;
            border.classList.add('thick');
            innerBorder.style.border = 'none';
            break;
        case 'none':
            border.style.border = 'none';
            border.classList.add('no-border');
            innerBorder.style.border = 'none';
            break;
    }
}

// Listen for all input changes
const allInputs = document.querySelectorAll('input, select');
allInputs.forEach(input => {
    input.addEventListener('input', updatePreview);
    input.addEventListener('change', updatePreview);
});

// ============ FIELD HELPERS ============
function clearField(id) {
    const el = $(id);
    el.value = '';
    el.focus();

    // If clearing subject, also clear code and semester
    if (id === 'subjectName') {
        els.courseCode.value = '';
        els.semester.value = '';
    }
    if (id === 'courseCode') {
        els.subjectName.value = '';
        els.semester.value = '';
    }
    if (id === 'teacherName') {
        els.designation.value = '';
    }

    updatePreview();
}

function clearAll() {
    allInputs.forEach(input => {
        if (input.type === 'color') return;
        if (input.id === 'teacherDept' || input.id === 'studentDept') {
            input.value = 'Department Of Business Administration';
            return;
        }
        if (input.id === 'borderStyle') {
            input.value = 'double';
            return;
        }
        if (input.id === 'printSize') {
            input.value = 'A4';
            return;
        }
        if (input.tagName === 'SELECT') {
            input.selectedIndex = 0;
            return;
        }
        input.value = '';
    });
    updatePreview();
    showToast('All fields cleared');
}

// ============ ADVANCED SETTINGS ============
function toggleAdvanced() {
    const body = $('advancedBody');
    const arrow = $('advancedArrow');
    body.classList.toggle('open');
    arrow.classList.toggle('open');
}

// ============ REFRESH PREVIEW ============
function refreshPreview() {
    updatePreview();
    showToast('Preview refreshed');
}

// ============ TOAST ============
function showToast(message) {
    const toast = $('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============ PDF DOWNLOAD ============
async function downloadPDF() {
    showToast('Generating PDF...');

    const element = $('coverPage');
    const studentName = els.studentName.value.trim() || 'Assignment';
    const subjectName = els.subjectName.value.trim() || 'Cover';
    const fileName = `${studentName}_${subjectName}_Cover.pdf`.replace(/\s+/g, '_');

    // Clone the element for PDF generation
    const clone = element.cloneNode(true);
    clone.style.transform = 'none';
    clone.style.width = '210mm';
    clone.style.minHeight = '297mm';
    clone.style.boxShadow = 'none';

    // Temporarily add to document
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'fixed';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.appendChild(clone);
    document.body.appendChild(tempDiv);

    const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: false,
            width: clone.offsetWidth,
            height: clone.offsetHeight,
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    try {
        await html2pdf().set(opt).from(clone).save();
        showToast('PDF downloaded successfully!');
    } catch (err) {
        console.error('PDF generation error:', err);
        showToast('Error generating PDF. Please try again.');
    } finally {
        document.body.removeChild(tempDiv);
    }
}

// ============ PRINT ============
function printCover() {
    $('printModal').classList.add('show');
    $('modalPrintSize').value = els.printSize.value;
}

function closePrintModal() {
    $('printModal').classList.remove('show');
}

function executePrint() {
    closePrintModal();

    const paperSize = $('modalPrintSize').value;
    const orientation = $('printOrientation').value;
    const coverPage = $('coverPage');

    // Paper size dimensions in mm
    const sizes = {
        'A3': { width: 297, height: 420 },
        'A4': { width: 210, height: 297 },
        'A5': { width: 148, height: 210 },
        'Letter': { width: 215.9, height: 279.4 },
        'Legal': { width: 215.9, height: 355.6 },
        'Tabloid': { width: 279.4, height: 431.8 },
        'Executive': { width: 184.15, height: 266.7 },
    };

    const size = sizes[paperSize] || sizes['A4'];
    const w = orientation === 'landscape' ? size.height : size.width;
    const h = orientation === 'landscape' ? size.width : size.height;

    // Create print window
    const printWindow = window.open('', '_blank', 'width=800,height=600');

    // Clone styles
    const styles = document.querySelectorAll('link[rel="stylesheet"], style');
    let styleHTML = '';
    styles.forEach(s => {
        styleHTML += s.outerHTML;
    });

    // Get the cover page HTML
    const coverClone = coverPage.cloneNode(true);
    coverClone.style.transform = 'none';
    coverClone.style.boxShadow = 'none';
    coverClone.style.width = w + 'mm';
    coverClone.style.minHeight = h + 'mm';
    coverClone.style.margin = '0 auto';

    // Fix inner containers
    const borderEl = coverClone.querySelector('.page-border');
    if (borderEl) {
        borderEl.style.minHeight = h + 'mm';
    }
    const contentEl = coverClone.querySelector('.page-content');
    if (contentEl) {
        contentEl.style.minHeight = (h - 16) + 'mm';
    }

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Print Cover Page</title>
            ${styleHTML}
            <style>
                @page {
                    size: ${w}mm ${h}mm;
                    margin: 0;
                }
                body {
                    margin: 0;
                    padding: 0;
                    background: white;
                }
                .a4-page {
                    transform: none !important;
                    box-shadow: none !important;
                    width: ${w}mm !important;
                    min-height: ${h}mm !important;
                    margin: 0 !important;
                }
                .page-border {
                    min-height: ${h}mm !important;
                }
                .page-content {
                    min-height: ${h - 16}mm !important;
                }
                .header, .form-panel, .preview-header, .action-bar,
                .advanced-card, .modal-overlay, .toast {
                    display: none !important;
                }
            </style>
        </head>
        <body>
            ${coverClone.outerHTML}
        </body>
        </html>
    `);

    printWindow.document.close();

    // Wait for images to load then print
    printWindow.onload = function() {
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    };

    showToast(`Printing in ${paperSize} ${orientation}...`);
}

// Close modal on overlay click
$('printModal').addEventListener('click', function(e) {
    if (e.target === this) closePrintModal();
});

// Close modal on Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePrintModal();
        document.querySelectorAll('.autocomplete-list').forEach(l => l.classList.remove('show'));
    }
});

// ============ INITIAL PREVIEW ============
updatePreview();

// ============ SAVE/RESTORE FORM DATA ============
function saveFormData() {
    const data = {};
    allInputs.forEach(input => {
        if (input.id) data[input.id] = input.value;
    });
    try {
        localStorage.setItem('dccCoverData', JSON.stringify(data));
    } catch(e) {}
}

function restoreFormData() {
    try {
        const data = JSON.parse(localStorage.getItem('dccCoverData'));
        if (!data) return;
        allInputs.forEach(input => {
            if (input.id && data[input.id] !== undefined && data[input.id] !== '') {
                // Don't restore defaults that might be stale
                if (input.id === 'borderStyle' || input.id === 'printSize' || input.id === 'borderColor') return;
                input.value = data[input.id];
            }
        });
        updatePreview();
    } catch(e) {}
}

// Save on input changes
allInputs.forEach(input => {
    input.addEventListener('input', saveFormData);
    input.addEventListener('change', saveFormData);
});

// Restore on load
restoreFormData();