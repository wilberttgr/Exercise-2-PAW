function kirimData() {
    var name = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
    var jumlahTiket = document.getElementById("jumlah-tiket").value;
    var alamat = document.getElementById("alamat").value;
    var pesan = document.getElementById("pesan").value;

    alert(
        "Nama : " + name +
        "\nTanggal Nonton : " + tanggal +
        "\nJumlah Tiket : " + jumlahTiket +
        "\nAlamat : " + alamat +
        "\nPesan Tambahan : " + pesan
    );
}

// Mengatur tanggal saat ini pada elemen input tanggal
var currentDate = new Date().toISOString().split("T")[0];
document.getElementById("tanggal").value = currentDate;
