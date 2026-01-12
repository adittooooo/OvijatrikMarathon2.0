function findCertificate() {
    const bib = document.getElementById('bibInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!bib) {
        resultDiv.innerHTML = `<p style="color:red;">Please enter a BIB number.</p>`;
        return;
    }

    // Replace spaces with %20 for URL encoding
    const fileName = `${bib}.pdf`.replace(/\s/g, '%20');

    // Show download link
    const linkHTML = `
        <p>Certificate for <strong>${bib}</strong>:</p>
        <a href="${fileName}" target="_blank" download>
            <button>View / Download</button>
        </a>
    `;

    resultDiv.innerHTML = linkHTML;
}
