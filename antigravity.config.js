module.exports = {
  project: {
    id: "hcm-cultural-space",
    version: "1.0.0",
    openSource: true
  },
  // Khai báo kết nối trực quan cho người không biết code
  cmsBridge: {
    enabled: true,
    engine: "firebase-firestore",
    adminPath: "/admin.html",
    // Các khu vực dữ liệu động cho phép cập nhật qua giao diện Dashboard
    dynamicCollections: [
      { id: "contributions", label: "Bài đóng góp của Đảng viên" },
      { id: "digital-books", label: "Tủ sách điện tử" },
      { id: "news-events", label: "Tin tức & Hoạt động Chi bộ" }
    ]
  },
  theme: {
    fontFamily: "Be Vietnam Pro",
    palette: {
      primary: "#D62D20",   // Đỏ cờ Tổ quốc
      secondary: "#FFD700", // Vàng ngôi sao
      background: "#FAFAFA"
    }
  }
};
