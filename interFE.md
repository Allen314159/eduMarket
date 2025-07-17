Đề bài kiểm tra Front-end (FE) về sàn giáo dục thương mại điện tử sử dụng AI
Mô tả:
Bạn sẽ xây dựng một giao diện Front-end cho sàn giáo dục thương mại điện tử tích hợp AI, nơi người dùng có thể tìm kiếm, khám phá và yêu thích các khoá học hoặc sản phẩm giáo dục (ví dụ: lớp học trực tuyến, giáo trình, tài liệu).
Dự án này hướng đến mô phỏng trải nghiệm người dùng thực tế, giúp người học dễ dàng lựa chọn sản phẩm phù hợp, có gợi ý thông minh (AI), quản lý danh sách yêu thích và xem chi tiết sản phẩm.
Ứng viên có thể sử dụng React tập trung vào thiết kế UI hiện đại, tối ưu UX và đảm bảo responsive trên mọi thiết bị.
Yêu cầu chức năng
1. Hiển thị danh sách sản phẩm
●	Hiển thị danh sách sản phẩm (mock data hoặc gọi API giả).
●	Mỗi sản phẩm gồm: tên, giá, ảnh, mô tả ngắn, nút "Xem chi tiết".
2. Tìm kiếm và lọc
●	Có thanh tìm kiếm theo tên sản phẩm.
●	Có bộ lọc giá (ví dụ: <500K, 500K–1 triệu, >1 triệu).
3. Gợi ý thông minh (AI)
●	Thêm nút "Gợi ý sản phẩm phù hợp".
●	Khi bấm, FE gọi API /api/suggestions?userId=xxx, giả lập trả về danh sách sản phẩm gợi ý (có thể hardcode).
●	Gợi ý dựa trên "hành vi người dùng" (ví dụ: đã xem, đã thích).
4. Modal chi tiết sản phẩm
●	Khi bấm "Xem chi tiết", mở modal hiển thị đầy đủ thông tin sản phẩm (ảnh lớn, mô tả dài, đánh giá,...).
5. Yêu thích
●	Cho phép người dùng đánh dấu sản phẩm yêu thích.
●	Có trang riêng hiển thị danh sách sản phẩm đã yêu thích.
Yêu cầu kỹ thuật
●	Sử dụng React 
●	State quản lý bằng useState, useEffect
●	Có thể dùng Axios để mock API
●	Viết code sạch, cấu trúc rõ ràng, component hóa

Điểm cộng
●	Tích hợp thêm "Lịch sử xem" (sản phẩm người dùng đã click)
●	Loading skeleton khi gọi API gợi ý
●	Xử lý lỗi khi API fail (ví dụ hiển thị thông báo "Không thể lấy gợi ý lúc này")
●	Viết README hướng dẫn build và run
●	Tích hợp chức năng gợi ý nâng cao (ví dụ: dựa trên sản phẩm trong giỏ hàng)
Yêu cầu UX/UI
●	Thiết kế hiện đại, tối ưu trải nghiệm người dùng.
●	Responsive, hoạt động tốt trên mọi thiết bị (desktop, tablet, mobile).
●	Có hiệu ứng hover, transition mượt mà.
●	Màu sắc và font chữ đồng bộ, phù hợp với thương hiệu sàn thương mại điện tử.
●	Yêu thích phải rõ ràng (ví dụ: thông báo toast hoặc popup nhỏ).
Gợi ý mở rộng (phần AI)
Bạn có thể thêm phần "Chatbot AI tư vấn sản phẩm" (không bắt buộc):
●	Giao diện chat, gợi ý sản phẩm dựa trên từ khóa nhập (ví dụ: "Tôi muốn học tiếng anh với người mỹ").
●	Mock logic trả lời bằng AI.
Tham khảo:
●	Shopee
●	Italki
●	Wyzant
Nộp bài
●	Gửi link repo Github và demo trên Vercel/Netlify.

