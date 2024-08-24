window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
};

ScrollReveal().reveal(".box", {
  duration: 1000, // Durasi animasi dalam milidetik
  origin: "bottom", // Asal animasi (bottom, top, left, right)
  distance: "50px", // Jarak gerakan animasi
  easing: "ease-in-out", // Easing animasi
  reset: true, // Apakah animasi akan diulang saat elemen keluar dan masuk kembali ke viewport
  interval: 200, // Interval waktu antar elemen dalam milidetik
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".tentang-content, .pelayanan-content, .footer", {
  origin: "left",
});
ScrollReveal().reveal(".home-content, .tab, .cards-content", { origin: "top" });
ScrollReveal().reveal(".home-btn, .tim-content", { origin: "bottom" });
ScrollReveal().reveal(".tentang-img, .portofolio-content", { origin: "right" });

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Sembunyikan semua tab
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Hapus kelas 'active' dari semua tab
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Tampilkan tab yang dipilih dan tambahkan kelas 'active' ke tombol tab yang dipilih
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Buka tab pertama secara default
document.getElementsByClassName("tablinks")[0].click();
