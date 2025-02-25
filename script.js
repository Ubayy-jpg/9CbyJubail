// Halaman Utama
document.addEventListener("DOMContentLoaded", function () {
  const btnYa = document.getElementById("btn-ya");
  const btnTidak = document.getElementById("btn-tidak");
  const popupPenolakan = document.getElementById("popup-penolakan");
  const popupPassword = document.getElementById("popup-password");
  const closePenolakan = document.getElementById("close-penolakan");
  const closePassword = document.getElementById("close-password");
  const btnSubmit = document.getElementById("btn-submit");
  const inputPassword = document.getElementById("input-password");
  const pesanError = document.getElementById("pesan-error");

  // Tampilkan pop-up password jika jawaban "Ya"
  btnYa.addEventListener("click", function () {
    popupPassword.style.display = "block";
  });

  // Tampilkan pop-up penolakan jika jawaban "Tidak"
  btnTidak.addEventListener("click", function () {
    popupPenolakan.style.display = "block";
    const pesanPenolakan = document.getElementById("pesan-penolakan");
    const teksAcak = "Kamu bukan bagian 9C";
    let i = 0;
    const interval = setInterval(() => {
      if (i < teksAcak.length) {
        pesanPenolakan.textContent += teksAcak[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  });

  // Tutup pop-up penolakan
  closePenolakan.addEventListener("click", function () {
    popupPenolakan.style.display = "none";
  });

  // Tutup pop-up password
  closePassword.addEventListener("click", function () {
    popupPassword.style.display = "none";
  });

  // Validasi password
  btnSubmit.addEventListener("click", function () {
    const password = inputPassword.value.trim();
    if (password === "JubailHebat") { // Ganti dengan password yang diinginkan
      window.location.href = "menu.html";
    } else {
      pesanError.textContent = "Password salah! Coba lagi.";
    }
  });
});

// Halaman Menu
document.addEventListener("DOMContentLoaded", function () {
  const popupPembuat = document.getElementById("popup-pembuat");
  const closePembuat = document.getElementById("close-pembuat");

  // Tampilkan pop-up pembuat web
  popupPembuat.style.display = "block";

  // Tutup pop-up pembuat web
  closePembuat.addEventListener("click", function () {
    popupPembuat.style.display = "none";
  });

  // Hamburger Menu
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  const menuItems = document.querySelector(".menu-items");

  hamburgerIcon.addEventListener("click", function () {
    menuItems.style.display = menuItems.style.display === "flex" ? "none" : "flex";
  });
});