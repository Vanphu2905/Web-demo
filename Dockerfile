# Sử dụng image chính thức của Nginx để phục vụ web
FROM nginx:alpine

# Copy toàn bộ nội dung của thư mục hiện tại (ứng dụng web của bạn) vào thư mục mặc định của Nginx
# Giả sử thư mục web chứa các file index.html, style.css và script.js
COPY . /usr/share/nginx/html/

# Mở port 80 cho server web
EXPOSE 80

# Chạy Nginx trong chế độ foreground
CMD ["nginx", "-g", "daemon off;"]
