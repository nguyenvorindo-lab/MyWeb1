
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
