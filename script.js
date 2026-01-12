function findCertificate() {
    let bibInput = document.getElementById('bibInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!bibInput) {
        resultDiv.innerHTML = `<p style="color:red;">Please enter a BIB number.</p>`;
        return;
    }

    // Encode spaces for URL
    const encodedBib = encodeURIComponent(bibInput);  // "A 001" -> "A%20001"
    const fileName = `${encodedBib}.pdf`;

    // Show download link
    resultDiv.innerHTML = `
        <p>Certificate for <strong>${bibInput}</strong>:</p>
        <a href="${fileName}" target="_blank">
            <button>View / Download</button>
        </a>
    `;
}
