## JWT FRONT
Tampilan Depan Untuk Aplikasi JWT Authen menggunakan BE : Laravel dan FE : React Secara Terpisah

SCREENSHOOT APLIKASI :
--------------------------------------------------------------------------------------------------
1. Login Screen
   
![Tampilan Login](https://github.com/user-attachments/assets/1edd5a09-3136-4bd3-b286-d3f108b29282)
2. Register Screen

![Tampilan Register](https://github.com/user-attachments/assets/b8a600e8-ba8d-472f-ba16-90a01a766b85)

3. Dashboard Sederhana

![Tampilan Dashboard](https://github.com/user-attachments/assets/abec6fa0-bf0e-4a86-9369-7ac772381bff)

## Cara Pakai Aplikasi 
> Clone Repository Aplikasi Ini Dan Jalankan
```
npm install
npm run dev
```
Maka ia akan Berjalan di port 5173

**NOTED** :
Jika API Nggak bisa di gunakan tolong sesuaikan lagi settingan di `login.jsx` dan `register.jsx` pada bagian :

```login.jsx
const response = await axios.post("http://jwt-auth.test/api/login", {
        email: email,
        password: password,
});
```
```register.jsx
const response = await axios.post('http://jwt-auth.test/api/register', {
        name: name,
        email: email,
        password: password
});
```

Ganti `"http://jwt-auth.test/api/login"` dan sesuaikan dengan Web server yg di pakai misal pakai Php artisan serve
maka ganti jadi `localhost:8000/api/login` begitu pula yg register juga sama cuma di bagian `/api/login` menjadi `/api/register`

Selamat Mencoba dan Thankyou.
