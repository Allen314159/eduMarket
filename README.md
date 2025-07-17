# EduMarket - Nền tảng học tập trực tuyến với AI

Chào mừng bạn đến với EduMarket! 👋

Đây là một dự án web application mà tôi đã phát triển - một nền tảng thương mại điện tử chuyên về giáo dục, tích hợp công nghệ AI để gợi ý khóa học phù hợp. Ý tưởng xuất phát từ việc muốn tạo ra một không gian học tập hiện đại, nơi người dùng có thể dễ dàng tìm kiếm và khám phá các khóa học theo sở thích cá nhân.

## ✨ Tại sao tôi tạo ra dự án này?

Trong thời đại số hóa, việc học tập trực tuyến ngày càng phổ biến. Tuy nhiên, với hàng ngàn khóa học có sẵn, việc tìm ra khóa học phù hợp với bản thân lại trở nên khó khăn. Vì thế, tôi quyết định xây dựng EduMarket - một nền tảng không chỉ hiển thị danh sách khóa học, mà còn có thể hiểu và gợi ý dựa trên hành vi người dùng.

## 🎯 Tính năng 

### 🔍 **Tìm kiếm thông minh**
- Tìm kiếm theo tên khóa học, giảng viên, hoặc chủ đề
- Lọc theo giá cả và danh mục
- Kết quả hiển thị tức thì khi bạn gõ

### 🤖 **AI Suggestions - Tính năng đặc biệt**
- Phân tích hành vi người dùng
- Gợi ý khóa học phù hợp với sở thích
- Cá nhân hóa trải nghiệm học tập

### ❤️ **Quản lý yêu thích**
- Lưu các khóa học bạn quan tâm
- Xem lại danh sách yêu thích dễ dàng
- Thống kê về hành trình học tập

### 📖 **Lịch sử xem**
- Theo dõi các khóa học đã xem
- Sắp xếp theo thời gian gần nhất
- Không bỏ lỡ khóa học nào đã quan tâm

## 🛠️ Công nghệ tôi sử dụng

Tôi chọn stack công nghệ hiện đại để đảm bảo hiệu suất và trải nghiệm tốt nhất:

- **React 18** + **TypeScript** - Cho UI mượt mà và type safety
- **Tailwind CSS** - Styling nhanh chóng và responsive
- **Framer Motion** - Animations đẹp mắt
- **Lucide React** - Icons hiện đại
- **React Hot Toast** - Thông báo thân thiện
- **Axios** - HTTP client cho API calls

## � Hướng dẫn chạy dự án

### Yêu cầu hệ thống
- Node.js phiên bản 16.0 trở lên
- npm hoặc yarn package manager
- Git (để clone project)

### Bước 1: Clone project về máy
```bash
git clone https://github.com/your-username/edumarket.git
cd edumarket
```

### Bước 2: Cài đặt dependencies
```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install
```

### Bước 3: Chạy development server
```bash
# Với npm
npm start

# Với yarn
yarn start
```

Sau khi chạy lệnh, mở trình duyệt và truy cập: `http://localhost:3000`

### Bước 4: Build cho production (optional)
```bash
# Với npm
npm run build

# Với yarn
yarn build
```

Folder `build` sẽ chứa các file đã được tối ưu hóa cho production.

## 📁 Cấu trúc code như thế nào?

Tôi tổ chức code theo cấu trúc rõ ràng, dễ maintain:

```
src/
├── components/          # Các component tái sử dụng
│   ├── Header.tsx       # Navigation header
│   ├── HeroSection.tsx  # Landing section với hiệu ứng
│   ├── ProductCard.tsx  # Card hiển thị khóa học
│   ├── ProductModal.tsx # Modal chi tiết khóa học
│   ├── SearchBar.tsx    # Thanh tìm kiếm và filter
│   ├── Footer.tsx       # Footer của website
│   └── Skeleton.tsx     # Loading placeholders
├── pages/              # Các trang chính
│   ├── HomePage.tsx     # Trang chủ
│   ├── FavoritesPage.tsx # Trang yêu thích
│   └── HistoryPage.tsx  # Trang lịch sử
├── services/           # API services
│   └── api.ts          # Mock API và data handling
├── hooks/              # Custom hooks
│   └── index.ts        # Hooks cho favorites và history
├── types/              # TypeScript definitions
│   └── index.ts        # Interface cho data
└── App.tsx             # Main component
```

## 🎨 Thiết kế UI/UX

Tôi thiết kế giao diện theo hướng modern và user-friendly:

- **Clean & Minimalist**: Tập trung vào nội dung chính
- **Responsive Design**: Hoạt động tốt trên mọi thiết bị
- **Dark Theme**: Hero section với gradient tối đẹp mắt
- **Smooth Animations**: Transitions mượt mà
- **Loading States**: Skeleton loading để UX tốt hơn

## 🐛 Troubleshooting

### Lỗi thường gặp:

**1. Port 3000 đã được sử dụng:**
```bash
# Tìm và kill process đang dùng port 3000
npx kill-port 3000
# Hoặc chạy trên port khác
PORT=3001 npm start
```

**2. Node modules bị lỗi:**
```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

**3. Lỗi TypeScript:**
```bash
# Kiểm tra và fix TypeScript errors
npm run type-check
```

## 🔮 Tương lai của dự án

Tôi có kế hoạch phát triển thêm những tính năng sau:

- 🔐 **User Authentication** - Đăng nhập/đăng ký
- 💳 **Payment Integration** - Tích hợp thanh toán
- � **Analytics Dashboard** - Thống kê chi tiết
- 🎥 **Video Preview** - Xem trước khóa học
- 💬 **Review System** - Đánh giá và bình luận
- 🌍 **Multi-language** - Hỗ trợ đa ngôn ngữ

## 🤝 Đóng góp

Nếu bạn muốn đóng góp cho dự án:

1. Fork repository
2. Tạo branch mới: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Tạo Pull Request

## 📧 Liên hệ

Nếu bạn có câu hỏi hoặc góp ý về dự án, hãy liên hệ:

- Email: support@gmail.com
- GitHub: [Your GitHub Profile]

## � License

Dự án này được phát hành dưới MIT License. Bạn có thể sử dụng, chỉnh sửa và phân phối tự do.

---

**Cảm ơn bạn đã quan tâm đến EduMarket! 🚀**

*Dự án này được phát triển với ❤️ và mong muốn góp phần cải thiện trải nghiệm học tập trực tuyến.*
