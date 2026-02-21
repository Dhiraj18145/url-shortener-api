# 🔗 URL Shortener API (Production-Ready Backend)

A production-style URL Shortener Backend built using Node.js, Express, and MongoDB.  
This application converts long URLs into short unique links, supports analytics tracking, expiry handling, and includes security features like rate limiting and validation.

---

## 🚀 Features

- 🔹 Convert long URLs into short unique links
- 🔹 Unique short code generation using nanoid
- 🔹 Click analytics tracking
- 🔹 URL expiry system (custom expiry support)
- 🔹 Duplicate URL prevention
- 🔹 URL validation middleware
- 🔹 Rate limiting for API security
- 🔹 Proper HTTP status codes (400, 404, 410, 429, 500)
- 🔹 MVC Architecture
- 🔹 Clean and structured backend design

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- nanoid
- express-rate-limit
- dotenv

---

## 📂 Project Structure

```
url-shortener/
│
├── config/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── server.js
├── package.json
└── .env
```

---

## 📌 API Endpoints

### 1️⃣ Create Short URL

**POST** `/shorten`

Request Body:

```json
{
  "originalUrl": "https://google.com",
  "expiryDays": 1
}
```

Response:

```json
{
  "shortUrl": "http://localhost:5000/abc123",
  "expiresAt": "2026-02-21T..."
}
```

---

### 2️⃣ Redirect to Original URL

**GET** `/:shortCode`

Example:
```
http://localhost:5000/abc123
```

- Redirects to original URL
- Increases click count
- Returns 410 if expired

---

### 3️⃣ Get URL Analytics

**GET** `/stats/:shortCode`

Response:

```json
{
  "originalUrl": "https://google.com",
  "shortCode": "abc123",
  "clickCount": 1,
  "createdAt": "2026-02-20T..."
}
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/url-shortener-api.git
cd url-shortener-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create .env File

Create a `.env` file in the root folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

### 4️⃣ Run the Server

```bash
npm run dev
```

Server will start at:
```
http://localhost:5000
```

---

## 🧠 Concepts Demonstrated

- RESTful API design
- Middleware-based validation
- Database schema design
- Unique ID generation
- Expiry logic handling
- Analytics tracking
- Rate limiting (Security)
- Proper HTTP status handling
- MVC architecture

---

## 🎯 Future Improvements

- Redis caching for performance
- User authentication system
- Admin dashboard
- Auto-delete expired URLs using cron job
- Deployment to cloud (Render / Railway / AWS)

---

## 👨‍💻 Author

Developed as a backend-focused project to demonstrate real-world API development skills.

---

⭐ If you like this project, feel free to star the repository!
