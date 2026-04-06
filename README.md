#  VidSphere – FullStack Video Sharing Platform

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

 If you like this project, give it a star on GitHub!
