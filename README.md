1.	Introduction:

1.1	Overview
Trong thời đại công nghệ hiện đại, mạng xã hội đã trở thành một phần quan trọng không thể thiếu trong cuộc sống hàng ngày của chúng ta. Với sự lan rộng mạnh mẽ của internet và các nền tảng trực tuyến, việc kết nối và tương tác thông qua mạng xã hội đã trở thành một xu hướng phổ biến ngày nay. Trong báo cáo này, bọn em muốn giới thiệu về một trang web mạng xã hội do chính bọn em làm ra, nơi người dùng có thể kết nối, chia sẻ và tương tác với nhau. 
Trang web mạng xã hội mà bọn em đề cập là một nền tảng trực tuyến cho phép người dùng xây dựng mối quan hệ và chia sẻ kinh nghiệm. Nền tảng này cung cấp một không gian dễ dàng sử dụng để người dùng chia sẻ nội dung, bài viết, hình ảnh, video và thậm chí cả suy nghĩ cá nhân của họ với mọi người trên mạng.

1.2	Component
Trang web được xây dựng gồm 2 phần Front end được xây dựng bằng ReactJS và phần Backend là một RESTful API cho phép phần front end sử dụng thông qua API.
 
-	Front-End: ReactJS, TailwindCSS
-	Back-End: ExpressJS
-	Database: MongoDB
-	
![image](https://github.com/Serikaaa/Circulus/assets/96558358/89beda92-1e4f-4b19-abde-52011e71a062)

1.3	Use case:
Các chức năng dành cho user:

![image](https://github.com/Serikaaa/Circulus/assets/96558358/fd49e85e-abd4-4c3b-8ebc-19c8a75e1b5c)

2.	Website Development:
2.1 Sign up
Cho phép người dùng đăng ký thông tin: tên người dùng, mật khẩu, email. Các thông tin sẽ được mã hóa và gửi tới server và được lưu trữ trên MongoDB theo định dạng sau:

![image](https://github.com/Serikaaa/Circulus/assets/96558358/d51e1961-fe6c-46ca-8241-f5d1768cac7c)
 
Người dùng nhập các thông tin cần thiết để đăng ký tài khoản. Các trường thông tin bao gồm:
•	Username: tên đăng nhập của người dùng.
•	Email : email của người dùng.
•	Password : mật khẩu của người dùng. ( sẽ được mã hóa )

 ![image](https://github.com/Serikaaa/Circulus/assets/96558358/3a016c6c-3826-4fbd-a71c-7529a52ad65d)

2.2 Sign in
Nguời dùng đăng nhập dựa trên các thông tin đã đăng ký. Sau khi đăng nhập thành công, server sẽ cung cấp một access token cho người dùng mỗi phiên truy cập để xác thực và tương tác với server. Sau khi đăng nhập thành công, trang chủ sẽ hiện lên.

![image](https://github.com/Serikaaa/Circulus/assets/96558358/47a1d777-9d49-4519-8cca-fb441e951969)

Nhập username và password đã tạo ở phần Sign up vào và tiếp tục sử dụng trang web.

2.3 Sign out
Người dùng đăng xuất khỏi tài khoản hiện có đồng thời ẩn các chức năng quản trị. Access token lúc này sẽ bị xóa và trang web sẽ quay về trang login.

2.4 Home page
Sau khi login thành công thì home page sẽ hiện ra trang home.

![image](https://github.com/Serikaaa/Circulus/assets/96558358/ebb630db-be6c-4f86-ba4c-705c1265dd49)


Ở trang home, chúng ta có thể đăng bài viết lên cho người khác xem.

 ![image](https://github.com/Serikaaa/Circulus/assets/96558358/0f8d6592-c395-4afe-bfdb-184cf7df24a5)

Tuy nhiên, ở trang home này ta chỉ có thể xem được bài viết của mình và của những người mà mình đã follow. Đây là 1 ví dụ khi ta follow user2. 

![image](https://github.com/Serikaaa/Circulus/assets/96558358/26d51354-9e23-43af-98a5-0f7713ffb4e5)

2.5 Explore page
Ở trang explore này, ta có thể xem tất cả bài post của mọi người sử dụng website ở đây.  

![image](https://github.com/Serikaaa/Circulus/assets/96558358/127af477-3aa8-4f71-bb5f-43939222e333)

Ngoài ra, ta còn có thể thả tym cho các bài post đã được đăng.

![image](https://github.com/Serikaaa/Circulus/assets/96558358/6d0b83ea-f781-4d64-ab1a-15b97a009993)

Ta có thể click vào tên của user để vào trang cá nhân của họ, để có thể follow, xem các bài viết của người dùng đó.

 ![image](https://github.com/Serikaaa/Circulus/assets/96558358/2e08df0e-f537-4192-899e-aabdfe4cc8a2)

	2.5 Profile page:
Ở phần này, ta sẽ xem được profile cá nhân của mình.

![image](https://github.com/Serikaaa/Circulus/assets/96558358/b98f7d5d-e48e-4a03-a5dc-8d8b06ba8860)

Ta cũng có thể chỉnh sửa avatar profile hoặc xóa account của mình bằng cách nhấn vào nút "Edit profile ".

![image](https://github.com/Serikaaa/Circulus/assets/96558358/846a6e21-f769-4174-a266-d5b1dd3e6866)
 
Ta chọn Choose File để up ảnh lên hoặc Delete account để xóa account của mình.

2.6 Search Function

Ở phần này, chúng ta có thể search tên người dùng.

![image](https://github.com/Serikaaa/Circulus/assets/96558358/6e676344-af68-4157-8d68-8af154809067)

 
