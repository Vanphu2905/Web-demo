# Deploy_WebWeather

Ứng dụng Web Weather cho phép người dùng kiểm tra thời tiết ở một thành phố và quốc gia nhất định. Người dùng chỉ cần nhập tên thành phố và quốc gia, và ứng dụng sẽ trả về thông tin thời tiết hiện tại, bao gồm nhiệt độ, mô tả thời tiết và độ ẩm.

Ứng dụng này sử dụng API OpenWeatherMap để xử lý các yêu cầu và trả về kết quả thời tiết từ API.

## Cài đặt và Chạy Ứng dụng với Docker

### Yêu cầu

- Docker: Đảm bảo bạn đã cài đặt Docker trên máy của mình. Bạn có thể tải Docker tại: https://www.docker.com/get-started

### Các bước cài đặt và sử dụng

1. **Clone repository về máy tính của bạn:**
   git clone <repository-url>
2. **Di chuyển vào thư mục chứa mã nguồn**
   cd Deploy_WebWeather
3. **Build web bằng dockerfile với lệnh**
   docker build -t Deploy_WebWeather .
   docker run -p 8080:8080 Deploy_WebWeather
4. **Run web với lệnh**
      docker run -p 8080:8080 Deploy_WebWeather
5. **Truy cập trình duyệt và kiểm tra**
   http://localhost:8080
