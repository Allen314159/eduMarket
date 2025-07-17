# EduMarket - AI-Powered Educational E-commerce Platform

Một nền tảng thương mại điện tử giáo dục tích hợp AI, cho phép người dùng tìm kiếm, khám phá và yêu thích các khóa học hoặc sản phẩm giáo dục.

## 🚀 Tính năng chính

- **Hiển thị danh sách sản phẩm**: Danh sách khóa học với thông tin chi tiết
- **Tìm kiếm và lọc**: Tìm kiếm theo tên, lọc theo giá và danh mục
- **Gợi ý thông minh AI**: Gợi ý khóa học phù hợp dựa trên hành vi người dùng
- **Modal chi tiết sản phẩm**: Hiển thị đầy đủ thông tin khóa học
- **Quản lý yêu thích**: Đánh dấu và quản lý khóa học yêu thích
- **Lịch sử xem**: Theo dõi khóa học đã xem gần đây
- **Responsive Design**: Tối ưu cho mọi thiết bị
- **Loading Skeleton**: Trải nghiệm loading mượt mà
- **Toast Notifications**: Thông báo tương tác người dùng

## 🛠️ Công nghệ sử dụng

- **React 18** với TypeScript
- **Tailwind CSS** cho styling
- **Axios** cho mock API
- **React Hot Toast** cho notifications
- **Lucide React** cho icons
- **Local Storage** cho lưu trữ dữ liệu

## 📦 Cài đặt và chạy dự án

### 1. Clone repository
```bash
git clone <your-repo-url>
cd educational-ecommerce
```

### 2. Cài đặt dependencies
```bash
npm install
```

### 3. Chạy development server
```bash
npm start
```

Ứng dụng sẽ mở tại [http://localhost:3000](http://localhost:3000)

### 4. Build cho production
```bash
npm run build
```

## 🏗️ Cấu trúc dự án

```
src/
├── components/          # React components
│   ├── Header.tsx       # Header navigation
│   ├── ProductCard.tsx  # Product card component
│   ├── ProductModal.tsx # Product detail modal
│   ├── SearchBar.tsx    # Search and filter bar
│   └── Skeleton.tsx     # Loading skeletons
├── pages/              # Page components
│   ├── HomePage.tsx     # Main product listing page
│   ├── FavoritesPage.tsx # Favorites management
│   └── HistoryPage.tsx  # View history page
├── services/           # API services
│   └── api.ts          # Mock API with Axios
├── hooks/              # Custom React hooks
│   └── index.ts        # Favorites and history hooks
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles with Tailwind
```

## 🎨 UI/UX Features

- **Modern Design**: Giao diện hiện đại với gradient và shadows
- **Responsive**: Hoạt động tốt trên desktop, tablet, mobile
- **Smooth Animations**: Transition và hover effects mượt mà
- **Loading States**: Skeleton loading cho trải nghiệm tốt
- **Error Handling**: Xử lý lỗi và thông báo rõ ràng
- **Accessibility**: Thiết kế thân thiện với người dùng

## 🤖 AI Features

- **Smart Suggestions**: Gợi ý khóa học dựa trên hành vi người dùng
- **Personalized Recommendations**: Đề xuất cá nhân hóa
- **Learning Path Analysis**: Phân tích hành vi học tập

## 📱 Pages

1. **Home Page**: Trang chủ với danh sách khóa học và tìm kiếm
2. **Favorites Page**: Quản lý khóa học yêu thích
3. **History Page**: Lịch sử xem khóa học

## 🔧 Scripts

- `npm start` - Chạy development server
- `npm build` - Build cho production
- `npm test` - Chạy tests
- `npm run eject` - Eject từ Create React App

## 🌐 Demo

Dự án có thể được deploy lên:
- **Vercel**: [Link deploy]
- **Netlify**: [Link deploy]
- **GitHub Pages**: [Link deploy]

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Developed with ❤️ for educational purposes.

---

**Note**: Đây là project demo sử dụng mock data. Trong môi trường production, cần tích hợp với API backend thực tế.
