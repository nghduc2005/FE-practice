// tailwind.config.js
module.exports = {
  content: [
    "./public/**/*.html",  // Quét tất cả file HTML trong public
    "./src/**/*.{js,ts}",  // Quét tất cả file JS/TS trong src
  ], // các file mà tailwind sẽ quét class
  theme: { //cấu hình trên theme chính
    extend: { // thêm vào theme mặc định
    },
  },
  darkMode: 'class', // hoặc 'media'
  plugins: [], //plugin ngoài hoặc tự viết
};