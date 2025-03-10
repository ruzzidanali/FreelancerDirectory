# Freelancer Directory

This is a simple Freelancer Directory project built with:
- **Backend**: ASP.NET Core Web API
- **Frontend**: React + Vite
- **Database**: MSSQL
- **Package Manager**: npm

## Features
✅ View list of registered users  
✅ Register a new user  
✅ Update user details  
✅ Delete a user  

## Installation

### Backend (API)
1. Navigate to the `FreelancerDirectory` folder.
2. Run the API using:
The API runs on `http://localhost:5126`.

### Frontend (UI)
1. Navigate to the `client` folder:
2. Install dependencies:
3. Start the React app:
The UI runs on `http://localhost:5173`.

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/{id}` | Get user by ID |
| POST | `/api/users` | Add new user |
| PUT | `/api/users/{id}` | Update user |
| DELETE | `/api/users/{id}` | Delete user |

---

### **📌 Step 2: Add and Commit README.md**
Run the following in **PowerShell or Git Bash**:  

```sh
git add README.md
git commit -m "Added README.md"
git push origin main
