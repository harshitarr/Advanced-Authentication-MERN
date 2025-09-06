# Advanced Authentication System (MERN Stack)

##  Project Overview

This project is a secure authentication system built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It provides robust user authentication and authorization features with **email-based verification** and **password reset functionality**.

The system includes:
- User Signup with **6-digit email verification code**
- Login with **JWT authentication**
- Forgot & Reset Password with **email confirmation**
- **Mailtrap Integration** for testing emails (welcome, verification, password reset)
- **Postman API Testing** for endpoints



## ✨ Features
- User Signup with email & password  
- 6-digit verification code for account activation  
- Welcome email after successful signup  
- Login system with JWT-based authentication  
- Forgot Password functionality  
- Reset Password via secure email link  
- Email notifications (Mailtrap):  
  - Signup welcome email  
  - Verification code email  
  - Reset password email  
  - Successful password reset confirmation  
- 🛠 Postman collection for testing all API endpoints  



## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind/Material UI (if used)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JWT, bcrypt  
- **Email Service:** Nodemailer + Mailtrap  
- **API Testing:** Postman  

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/harshitarr/Advanced-Authentication-MERN.git
cd Advanced-Authentication-MERN
```

### 2.Install Dependencies
### Install backend dependencies
```bash
npm install
```
### Install frontend dependencies
```bash
cd frontend
npm install
```
### 3.Create a .env file in the core 
```bash
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development
MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/
CLIENT_URL= http://localhost:5173
```

### 4.Run this App
### Running backend
```bash
npm run dev
```

### Running Frontend

```bash
cd frontend
npm run dev
```
*Note:Run both of them simultaneously in two termials*




