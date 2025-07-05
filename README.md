# Produty – Simple Product CRUD App

## 📘 Description

**Produty** is a lightweight and intuitive CRUD (Create, Read, Delete) web application designed to manage product data effortlessly. It provides a clean and user-friendly interface for core operations on products, ideal for learning full-stack development or building quick prototypes.

### ✅ Features
- **🆕 Create products** with name, price, and description
- **📋 View all products** in a neat list or table
- **❌ Delete products** with a single click
- **🔐 No authentication**, keeping it minimal and accessible
- Structured for rapid setup and easy experimentation

---

## 🛠️ Tech Stack
*(Adjust this list to reflect your actual implementation)*
- **Frontend**: React (or plain HTML/CSS/JS)
- **Backend**: Node.js + Express (or Python Flask, Django, etc.)
- **Database**: MongoDB / MySQL / SQLite
- **ORM / ODM**: Mongoose / Sequelize / TypeORM
- **Others**: Axios for HTTP requests, Bootstrap/Tailwind for UI (if used)

---

## 🚀 Quick Start

1. **Clone the repo**
    ```bash
    git clone https://github.com/ShreyashGitHubb/Produty.git
    cd Produty
    ```

2. **Install dependencies**
    ```bash
    # Try this 
    npm install

    # if above not work 
    npm install --legacy-peer-deps

    ```

3. **Configure environment**
    - Copy `.env.example` to `.env`
    - Set your environment variables, e.g.:
    ## 🛠️ Environment Variables (.env)

Make a `.env` file in the root of your project and include the following keys:

```env
# DATABASE CONNECTION STRINGS
DATABASE_URL=           # Your primary DB connection string
DIRECT_URL=             # Optional: direct access URL for the database (used by ORMs)

# CLERK AUTH KEYS
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=   # Public key used in frontend
CLERK_SECRET_KEY=                    # Private key for server-side Clerk operations

# GOOGLE GEMINI
GEMINI_API_KEY=         # Your Google Gemini AI API key

# RESEND (EMAIL SERVICE)
RESEND_API_KEY=         # API key to send transactional emails via Resend

# ARCJET (SECURITY/PROXY SERVICE)
ARCJET_KEY=             # API key for Arcjet edge middleware or protection services
```
4. **Run the project**
    - **Use This**:
      ```bash
      npm run dev
      ```

5. **Test it out**
    - Open `http://localhost:3000` (frontend) or use Postman / curl on `http://localhost:5000/products`

---

## 🤝 Contributing

1. Fork the repo.
2. Create your feature branch:
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add some feature"
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```
5. Open a Pull Request. I'll review it!

---

## 📝 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

### 😊 Thanks for checking out Produty!
