🎬 MovieHub – Movie Ticket Booking System

A full-stack Movie Ticket Booking System built using React.js, FastAPI, and MySQL.

MovieHub allows users to browse movies, explore theatres and show timings, select available seats, book movie tickets, view booking details, and manage their bookings. It also provides an admin interface for managing movies, locations, theatres, and show timings.

🚀 Features

👤 User Features

* User Registration and Login
* Browse available movies
* View movie details
* Explore locations and theatres
* View available show timings
* Select movie seats
* Check seat availability
* View booking summary
* Payment page
* Booking confirmation
* View upcoming and completed bookings
* Cancel bookings
* View user profile

🛡️Admin Features

* Admin Login
* Add new movies
* Edit movie details
* Delete movies
* Manage locations
* Add and manage theatres
* Filter theatres based on location
* Add show timings
* View show timings
* Delete show timings
* Manage movie booking information

🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3
* Bootstrap
* React Router

### Backend

* Python
* FastAPI
* Uvicorn
* SQLAlchemy
* PyMySQL
* python-dotenv

### Database

* MySQL

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman

---

## 🏗️ Project Architecture

```text
MovieBookingSystem/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── database.py
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── jsconfig.json
└── README.md
```

---

## 🔄 Application Flow

```text
User
 │
 ├── Register / Login
 │
 ├── Browse Movies
 │
 ├── Select Movie
 │
 ├── Select Theatre & Show
 │
 ├── Select Seats
 │
 ├── Booking Summary
 │
 ├── Payment
 │
 └── Booking Confirmation
```

---

## 🔐 Authentication

MovieHub provides authentication for both users and administrators.

* User registration
* User login
* Protected user features
* Admin authentication
* Role-based access to administrative features

---

## 🎟️ Booking System

The booking system manages:

* Movie selection
* Theatre selection
* Show timings
* Seat selection
* Seat availability
* Booking confirmation
* Booking history
* Booking cancellation

The backend checks existing confirmed bookings to prevent already-booked seats from being selected again.

---

## 🗄️ Database

**MySQL** is used as the relational database for storing application data such as:

* Users
* Movies
* Locations
* Theatres
* Show timings
* Bookings
* Seat information

The backend communicates with MySQL using **SQLAlchemy** and **PyMySQL**.

Database credentials are stored locally using environment variables and are not committed to the repository.

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure the following are installed:

* Python 3.x
* Node.js
* npm
* MySQL
* Git

### 1. Clone the Repository

git clone https://github.com/Tejeshwar2504/MovieHub-Movie-Ticket-Booking-System.git
cd MovieHub-Movie-Ticket-Booking-System

### 2. Backend Setup

Open Command Prompt or Terminal:

cd Backend

Create a virtual environment:

python -m venv venv

Activate the virtual environment on Windows:

venv\Scripts\activate

Install the required Python packages:

pip install -r requirements.txt

Configure the required database environment variables in a local `.env` file.

Example:

DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_NAME=moviehub

> Do not commit the `.env` file to GitHub.

Start the FastAPI server:

python -m uvicorn main:app --reload

The backend will run at:

http://127.0.0.1:8000/

### 3. Frontend Setup

Open another terminal:

cd frontend

Install dependencies:

npm install

Start the React development server:

npm run dev

The frontend will run at:

http://localhost:5173/

## 🧪 API Testing

The FastAPI backend provides REST APIs for different modules, including:

* Authentication
* Movies
* Locations
* Theatres
* Show Timings
* Bookings

FastAPI also provides interactive API documentation.

Once the backend is running, API documentation can be accessed at:

http://127.0.0.1:8000/docs

## 📱 Main Application Pages

### User Pages

* Home
* Movies
* Movie Details
* Theatres
* Seat Booking
* Booking Summary
* Payment
* Booking Success
* My Bookings
* Profile
* Login
* Register

### Admin Pages

* Admin Login
* Admin Movies
* Location Management
* Theatre Management
* Show Timing Management

## 🎯 Project Objectives

The main objectives of MovieHub are:

* Build a real-world full-stack web application
* Implement a complete movie ticket booking workflow
* Develop and consume REST APIs
* Integrate React.js with FastAPI
* Perform MySQL database operations
* Implement authentication and protected routes
* Manage movie seats and bookings
* Develop an admin management system
* Practice CRUD operations across the application

## 🔮 Future Enhancements

* Online payment gateway integration
* Email booking confirmation
* QR code generation for tickets
* Movie search and advanced filtering
* User reviews and ratings
* Movie recommendation system
* Online deployment
* Cloud database integration
* Admin dashboard with booking analytics

## 👨‍💻 Developer

**Tejeshwar G.**

B.E. Computer Science and Engineering
Specialization: Artificial Intelligence & Machine Learning

## ⭐ Project Highlights

MovieHub demonstrates practical experience in:

**React.js • FastAPI • MySQL • REST APIs • Authentication • CRUD Operations • Seat Booking • Full-Stack Development**


⭐ If you find this project useful, consider giving the repository a star!
