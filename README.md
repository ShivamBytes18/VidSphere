<!-- #  VidSphere – FullStack Video Sharing Platform

A full-stack YouTube-like application built with the **MERN stack** that supports video uploads, authentication, subscriptions, likes, and watch history — designed with production-level architecture and modern UI.

---

#  Features

##  Authentication (Production-Level)

* JWT-based authentication
* Access Token + Refresh Token system
* Secure HTTP-only cookies
* Auto login (via refresh token)
* Protected routes (frontend + backend)

---

##  User Features

* Register with avatar & cover image
* Login / Logout
* Update profile & password
* View channel profile
* Subscribe / Unsubscribe to users

---

## 🎥 Video Features

* Upload videos with thumbnail
* View all videos (homepage)
* Watch video (with recommendations)
* Like / Unlike videos 
* Toggle publish status
* Delete / Update own videos

---

##  History & Personalization

* Watch history tracking
* “My Videos” dashboard
* Subscriptions feed

---

##  UI/UX

* Modern dark theme (YouTube-inspired)
* Hover scale effects on videos
* Smooth transitions & animations
* Responsive layout
* Sidebar navigation with interactive buttons

---

#  Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Other Tools

* Cloudinary (media storage)
* Multer (file upload)
* JWT (authentication)
* Cookie-parser
* CORS

---

#  Project Structure

```
MyTube/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── index.js
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
```

---

#  Installation & Setup

##  Clone the repo

```bash
git clone https://github.com/your-username/mytube.git
cd mytube
```

---

##  Backend Setup

```bash
cd Backend
npm install
```

### Create `.env`

```
PORT=8000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_secret
REFRESH_TOKEN_SECRET=your_secret
CORS_ORIGIN=http://localhost:5173
```

### Run backend

```bash
npm run dev
```

---

##  Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

#  Authentication Flow

1. User logs in
2. Server generates:

   * Access Token (short-lived)
   * Refresh Token (long-lived)
3. Tokens stored in **HTTP-only cookies**
4. Every request:

   * Access token verified
5. If expired:

   * Refresh token generates new access token

---

#  API Endpoints

## User Routes

* POST `/api/v1/users/register`
* POST `/api/v1/users/login`
* POST `/api/v1/users/logout`
* GET `/api/v1/users/current-user`
* PATCH `/api/v1/users/update-account`

---

## Video Routes

* GET `/api/v1/videos`
* POST `/api/v1/videos/upload`
* GET `/api/v1/videos/:id`
* PATCH `/api/v1/videos/:id`
* DELETE `/api/v1/videos/:id`

---

## Other

* POST `/api/v1/videos/like/:id`
* POST `/api/v1/videos/watch/:id`
* GET `/api/v1/videos/my-videos`
* GET `/api/v1/users/history`

---

#  Key Learnings

* Implemented **production-level authentication**
* Solved **CORS + cookies + JWT issues**
* Built scalable backend architecture
* Designed responsive UI with modern UX patterns


---

#  Contributing

Pull requests are welcome. For major changes, open an issue first.

---

#  License

This project is open-source and free to use.

---

#  Author

**Shivam Upadhyay**
BTech Student 
Full Stack Developer with Ai Integration

---

 If you like this project, give it a star on GitHub! -->


# 🎥 VidSphere

VidSphere is a full-stack video sharing platform inspired by YouTube, built using the MERN stack. Users can create an account, upload videos with thumbnails, watch videos, manage their own content, like videos, and view watch history.

---

## 🚀 Live Demo

### 🌐 Frontend
https://vidsphere-front.onrender.com

### ⚙️ Backend API
https://vidsphere-oj07.onrender.com/api/v1

---

## ✨ Features

- 🔐 JWT Authentication (Access & Refresh Tokens)
- 👤 User Registration & Login
- 📤 Video Upload with Thumbnail
- ☁️ Cloudinary Integration
- 📺 Watch Videos
- ❤️ Like / Unlike Videos
- 🕒 Watch History
- 👤 User Profile
- 🎬 My Videos
- 🎯 Random Recommended Videos
- 📱 Responsive UI

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

---

## 📂 Project Structure

```
VidSphere
│
├── Frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── api
│
├── Backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middlewares
│   ├── utils
│   └── db
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/VidSphere.git
cd VidSphere
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=8000
MONGODB_URI=YOUR_MONGODB_URI

ACCESS_TOKEN_SECRET=YOUR_ACCESS_SECRET
REFRESH_TOKEN_SECRET=YOUR_REFRESH_SECRET

ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET

CORS_ORIGIN=http://localhost:5173
```

---

## 📡 API Base URL

```
https://vidsphere-oj07.onrender.com/api/v1
```

Example:

```
POST /users/login
POST /users/register
POST /videos/upload
GET  /videos
GET  /videos/my-videos
```

---

## 📸 Screenshots

> Add screenshots of:
- Home Page
- Login
- Signup
- Upload Video
- Watch Page
- Profile

---

## 🚀 Deployment

**Frontend**

https://vidsphere-front.onrender.com

**Backend**

https://vidsphere-oj07.onrender.com/api/v1

---

## 👨‍💻 Author

**Shivam Upadhyay**

GitHub: https://github.com/ShivamBytes18

LinkedIn: https://www.linkedin.com/in/shivam-upadhyay-0811182aa

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.