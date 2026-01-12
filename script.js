function findCertificate() {
    const bib = document.getElementById('bibInput').value.trim().replace(/\s/g, '');
    const resultDiv = document.getElementById('result');

    if (!bib) {
        resultDiv.innerHTML = `<p style="color:red;">Please enter a BIB number.</p>`;
        return;
    }

    // Assume filenames are like A001.pdf, B023.pdf etc.
    const fileName = `${bib}.pdf`;

    // Check if the file exists (GitHub Pages can't check directly, so we assume user enters correctly)
    const linkHTML = `
        <p>Certificate for <strong>${bib}</strong>:</p>
        <a href="${fileName}" target="_blank" download>
            <button>View / Download</button>
        </a>
    `;

    resultDiv.innerHTML = linkHTML;
}
