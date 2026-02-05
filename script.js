document.getElementById("masuk").addEventListener("click", function () {
    window.location.href = "index 1.html";
});
function showAlert(nama) {
    alert("Halo, saya " + nama + ". Terima kasih sudah mengunjungi portfolio saya!");
    
    // Cek nama untuk menentukan halaman
    if (nama === "agita") {
        window.location.href = "agita/agita.html";
    } else if (nama === "Kasih") {
        window.location.href = "dasboard kasih.html";
    } else {
        alert("Halaman tidak ditemukan!");
    }
}
const audio = document.getElementById('audioAqiqah');
            audio.play().catch(err => {
                console.log("Autoplay gagal, user perlu interaksi langsung: ", err);
            });
