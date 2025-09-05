A secure and modern **URL Shortener Web Application** built with **Node.js, Express, MongoDB, and EJS**.  
The project not only allows users to shorten URLs but also integrates **authentication with JWT (JSON Web Tokens)** for a secure, personalized experience.  

---

## ✨ Features

### 🔐 Authentication & Security
- **User Signup & Login**  
  Users can create accounts and securely log in.  
- **JWT-based Authentication**  
  When a user logs in, a **JWT token** is generated and stored in cookies.  
  - Protects against session hijacking.  
  - Ensures only authenticated users can access the dashboard.   

### 🔗 URL Shortening
- Users can enter any valid URL and get a **shortened link**.  
- The generated short URL redirects to the original link.  
- Each short URL is **unique** and tied to the logged-in user.  
- **Click tracking**: Every visit to a short URL increases its **click counter**.  
- Each entry includes:  
  - Short URL  
  - Original (long) URL  
  - Click count  
  - Date created  

### 🎨 Modern UI
- Clean, responsive **glassmorphism design**.  
- Mobile-friendly with smooth hover and focus effects.  

## 🛠️ Tech Stack
- **Frontend**: EJS, HTML5, CSS3 (Glassmorphism, Responsive UI)  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT (JSON Web Tokens), Cookies  
- **Other**: UUID for generating short IDs  
