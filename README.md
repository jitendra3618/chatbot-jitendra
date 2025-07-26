
# E-Commerce Customer Support Chatbot

This project is a full-stack customer support chatbot for an e-commerce clothing site. It answers user queries like:

- "What are the top 5 most sold products?"
- "Show me the status of order ID 12345."
- "How many Classic T-Shirts are left in stock?"

## 🔧 Tech Stack

- **Backend**: FastAPI, Python, MongoDB
- **Frontend**: React.js
- **LLM Integration**: Groq API (Mixtral-8x7b)
- **Data Source**: CSV files (`products.csv`, `orders.csv`, `order_items.csv`)

## 📁 Project Structure

```
ecommerce-chatbot-support/
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── chat_logic.py
│   ├── groq_client.py
│   ├── load_data.py
│   └── data/ (CSV files)
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Chat.js
│   │   └── styles.css
│   └── public/
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
└── README.md
```

## 🚀 How to Run

### 1. Load CSV Data
```bash
cd backend
python load_data.py
```

### 2. Run Backend (FastAPI)
```bash
uvicorn main:app --reload
```

### 3. Run Frontend (React)
```bash
cd frontend
npm install
npm start
```

### 4. Docker Setup
```bash
docker-compose up --build
```

## ✅ Milestones

- ✅ Milestone 1: Environment Setup
- ✅ Milestone 2: Database Setup and Data Ingestion
- ✅ Milestone 3: Data Schemas (MongoDB + Chat Sessions)
- ✅ Milestone 4: Core Chat API (POST /api/chat)
- ✅ Milestone 5: LLM Integration with Groq API
-  ✅ Milestone 6:Chat UI Components
 ✅ Milestone 7:Context API for state management
  ✅ Milestone 8:Conversation history side panel

## 🔑 Author

Jitendra Kumar

---
