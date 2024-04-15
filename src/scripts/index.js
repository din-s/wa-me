function generateWhatsAppLink() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const formattedNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const waLink = `https://wa.me/+91${formattedNumber}`;

    document.getElementById('result').innerHTML = `<a class="btn btn-success" href="${waLink}" target="_blank"><i class="bi bi-whatsapp" style="width=16px; height:16px"></i> Chat with ${formattedNumber}</a>`;
}