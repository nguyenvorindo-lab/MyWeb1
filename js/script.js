const siteName = "Basketball Life";
let topic = "Bóng Rổ - Lối Sống Và Đam Mê";
let imageCount = 4;
let isReady = true;

console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?:", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);

const mainTitle = document.getElementById("main-title");

if (mainTitle) {
  mainTitle.textContent = "Bóng Rổ - Đam Mê Bứt Phá Mỗi Ngày!";
}

const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
  helloBtn.addEventListener("click", function () {
    helloResult.textContent = "Cảm ơn bạn đã ghé thăm MyWeb của Nguyễn Võ Rin Đô!";
  });
}

const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {
  toggleAboutBtn.addEventListener("click", function () {
    aboutContent.classList.toggle("hidden");
  });
}

const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
  });
}
