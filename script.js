let data = JSON.parse(localStorage.getItem("pasien")) || [];

const form = document.getElementById("form");
const tabel = document.getElementById("dataPasien");

function tampilkanData() {
  tabel.innerHTML = "";
  data.forEach((item, index) => {
    tabel.innerHTML += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.umur}</td>
        <td>${item.diagnosa}</td>
        <td>
          <button onclick="editData(${index})">Edit</button>
          <button onclick="hapusData(${index})">Hapus</button>
        </td>
      </tr>
    `;
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const umur = document.getElementById("umur").value;
  const diagnosa = document.getElementById("diagnosa").value;

  data.push({ nama, umur, diagnosa });
  localStorage.setItem("pasien", JSON.stringify(data));

  form.reset();
  tampilkanData();
});

function hapusData(index) {
  data.splice(index, 1);
  localStorage.setItem("pasien", JSON.stringify(data));
  tampilkanData();
}

function editData(index) {
  const pasien = data[index];

  document.getElementById("nama").value = pasien.nama;
  document.getElementById("umur").value = pasien.umur;
  document.getElementById("diagnosa").value = pasien.diagnosa;

  hapusData(index);
}

tampilkanData();