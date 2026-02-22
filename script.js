const HARGA = {
    ayamBakar: 22000,
    ayamGoreng: 18000,
    fillet100: 20000,
    fillet200: 30000,
    fillet500: 60000
};

const WA_NUMBER = "6289603459011"; // GANTI NOMOR WA

document.querySelectorAll("input[type='number']")
    .forEach(el => el.addEventListener("input", hitungTotal));

document.getElementById("metode")
    .addEventListener("change", cekMetode);

function hitungTotal() {
    const total =
        ayamBakar.value * HARGA.ayamBakar +
        ayamGoreng.value * HARGA.ayamGoreng +
        fillet100.value * HARGA.fillet100 +
        fillet200.value * HARGA.fillet200 +
        fillet500.value * HARGA.fillet500;

    totalHarga.innerText = "Total: Rp" + total.toLocaleString("id-ID");
}

function cekMetode() {
    gratisOngkir.style.display =
        metode.value === "Kirim" ? "block" : "none";
}

function openPopup() {
    errorMsg.style.display = "none";
    hitungTotal();

    if (
        ayamBakar.value == 0 &&
        ayamGoreng.value == 0 &&
        fillet100.value == 0 &&
        fillet200.value == 0 &&
        fillet500.value == 0
    ) {
        tampilError("Silakan pilih minimal 1 menu.");
        return;
    }

    if (metode.value === "") {
        tampilError("Silakan pilih metode Ambil atau Kirim.");
        return;
    }

    if (alamat.value.trim() === "") {
        tampilError("Alamat wajib diisi.");
        return;
    }

    if (jam.value === "") {
        tampilError("Jam ambil wajib diisi.");
        return;
    }

    popupOverlay.style.display = "flex";
}

function tampilError(pesan) {
    errorMsg.innerText = pesan;
    errorMsg.style.display = "block";
}

function closePopup() {
    popupOverlay.style.display = "none";
}

function sendWA() {
    const pesan = `
Halo Harbymo Original Grill

Pesanan:
- Ayam Bakar: ${ayamBakar.value}
- Ayam Goreng: ${ayamGoreng.value}
- Fillet 100g: ${fillet100.value}
- Fillet 200g: ${fillet200.value}
- Fillet 500g: ${fillet500.value}

Metode: ${metode.value}
Nama: ${nama.value || "-"}
Alamat: ${alamat.value}
Jam Ambil: ${jam.value}

${totalHarga.innerText}
`;

    window.open(
        `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );

    closePopup();
}