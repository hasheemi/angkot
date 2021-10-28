let input = document.getElementById("input");
let info = document.getElementById("text-info");
let container = document.getElementById("container");
let pendapatan = 0;
var penumpang = [];
let jumlah = document.getElementById("jumlah-p");
let uang = document.getElementById("pendapatan");
function tambah(penumpang) {
  tampil2();
  let userdata = input.value;

  penumpang.push(userdata);

  info.innerHTML = '<span class="yes">' + userdata + " data berhasil ditambahkan </span>";
  container.innerHTML = "";
  container.innerHTML += `
     <div class="orang tetap">
        <h3>sukiman</h3>
        <p class="role">status : sopir</p>
      </div>
      <div class="orang tetap">
        <h3>fadli</h3>
        <p class="role">status : kernet</p>
      </div>

    `;
  tampil2();
  return penumpang;

  // if (penumpang.length == 0) {
  //   penumpang.push(userdata);
  //   console.log(penumpang);
  //   info.innerHTML = '<span class="yes">' + userdata + " data berhasil ditambahkan </span>";
  //   container.innerHTML = "";
  //   container.innerHTML += `
  //    <div class="orang tetap">
  //       <h3>sukiman</h3>
  //       <p class="role">status : sopir</p>
  //     </div>
  //     <div class="orang tetap">
  //       <h3>fadli</h3>
  //       <p class="role">status : kernet</p>
  //     </div>

  //   `;
  //   tampil2();
  //   return penumpang;
  // } else {
  //   for (i = 0; i < 16; i++) {
  //     // if (penumpang[i] == null) {
  //     //   penumpang[i] = userdata;
  //     //   tampil2();
  //     //   console.log(penumpang);
  //     //   return penumpang;}
  //     if (i < 16) {
  //       penumpang.push(userdata);
  //       console.log(penumpang);
  //       info.innerHTML = '<span class="yes">' + userdata + " data berhasil ditambahkan </span>";
  //       container.innerHTML = "";
  //       container.innerHTML += `
  //    <div class="orang tetap">
  //       <h3>sukiman</h3>
  //       <p class="role">status : sopir</p>
  //     </div>
  //     <div class="orang tetap">
  //       <h3>fadli</h3>
  //       <p class="role">status : kernet</p>
  //     </div>

  //   `;
  //       tampil2();
  //       return penumpang;
  //     }
  //     //    else if (i > 16) {
  //     //   info.innerHTML = " angkot sudah penuh";
  //     //   return false;
  //     // }
  //     else {
  //       info.innerHTML = "sudah penuh";
  //     }
  //   }
  // }
}

function tampil2() {
  for (let index = 0; index < penumpang.length; index++) {
    console.log(penumpang[index]);
    // container.innerHTML = "";
    var op = penumpang[index];
    container.innerHTML +=
      '<div class="orang penumpang"><h3>' + op + '</h3><div class="footer"><p class="role">status : penumpang</p><button class="turun" onclick="hapus(' + index + ')"><i class="bi bi-arrow-right"></i></button></div>';
  }
  jumlah.innerHTML = "ada " + penumpang.length + " penumpang";
}
function hapus(nomor) {
  let bayar = parseInt(prompt("masukkan uang seiklasnya"));
  pendapatan += bayar;
  console.log(pendapatan);
  penumpang.splice(nomor, 1);
  uang.innerHTML = "pendapatan Rp " + pendapatan + "";
  container.innerHTML = "";
  container.innerHTML += `
     <div class="orang tetap">
        <h3>sukiman</h3>
        <p class="role">status : sopir</p>
      </div>
      <div class="orang tetap">
        <h3>fadli</h3>
        <p class="role">status : kernet</p>
      </div>
     
    `;
  tampil2();
}
