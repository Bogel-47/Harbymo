/*********************************
 * KONFIGURASI HARGA
 *********************************/
const HARGA = {
    ayamBakar: 22000,
    ayamGoreng: 18000,
    fillet100: 20000,
    fillet200: 30000,
    fillet500: 60000
};

// GANTI DENGAN NOMOR WA BISNIS (FORMAT 62)
const NOMOR_WA = "6289603459011";

/*********************************
 * HITUNG TOTAL OTOMATIS
 *********************************/
function hitungTotal() {
    const bakar  = parseInt(document.getElementById("ayamBakar").value) || 0;
    const goreng = parseInt(document.getElementById("ayamGoreng").value) || 0;
    const f100   = parseInt(document.getElementById("ayamFillet100").value) || 0;
    const f200   = parseInt(document.getElementById("ayamFillet200").value) || 0;
    const f500   = parseInt(document.getElementById("ayamFillet").value) || 0;

    const total =
        (bakar  * HARGA.ayamBakar) +
        (goreng * HARGA.ayamGoreng) +
        (f100   * HARGA.fillet100) +
        (f200   * HARGA.fillet200) +
        (f500   * HARGA.fillet500);

    document.getElementById("totalHarga").innerText =
        "Total: Rp" + total.toLocaleString("id-ID");
}

/*********************************
 * BUKA POPUP KONFIRMASI
 *********************************/
function kirimWhatsApp() {
    document.getElementById("popupOverlay").style.display = "flex";
}

/*********************************
 * TUTUP POPUP
 *********************************/
function tutupPopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

/*********************************
 * LANJUTKAN PESAN → WHATSAPP
 *********************************/
function lanjutPesan() {
    tutupPopup();

    const bakar  = document.getElementById("ayamBakar").value || 0;
    const goreng = document.getElementById("ayamGoreng").value || 0;
    const f100   = document.getElementById("ayamFillet100").value || 0;
    const f200   = document.getElementById("ayamFillet200").value || 0;
    const f500   = document.getElementById("ayamFillet").value || 0;

    if (bakar == 0 && goreng == 0 && f100 == 0 && f200 == 0 && f500 == 0) {
        alert("Silakan pilih minimal 1 menu.");
        return;
    }

    const nama   = document.getElementById("nama").value || "-";
    const alamat = document.getElementById("alamat").value || "-";
    const jam    = document.getElementById("jam").value || "-";
    const total  = document.getElementById("totalHarga").innerText;

    const pesan = `Halo Harbymo Original Grill 👋
Saya ingin pesan (FRESH):

- Ayam Bakar      : ${bakar} ekor
- Ayam Goreng     : ${goreng} ekor
- Ayam Fillet 500g: ${f500} pack
- Ayam Fillet 200g: ${f200} pack
- Ayam Fillet 100g: ${f100} pack

${total}

Nama: ${nama}
Alamat: ${alamat}
Jam Ambil: ${jam}

Catatan:
Pengiriman hanya HARI MINGGU

Terima kasih 🙏`;

    const url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
}

/*********************************
 * EVENT LISTENER
 *********************************/
document.getElementById("ayamBakar").addEventListener("input", hitungTotal);
document.getElementById("ayamGoreng").addEventListener("input", hitungTotal);
document.getElementById("ayamFillet").addEventListener("input", hitungTotal);
document.getElementById("ayamFillet100").addEventListener("input", hitungTotal);
document.getElementById("ayamFillet200").addEventListener("input", hitungTotal);