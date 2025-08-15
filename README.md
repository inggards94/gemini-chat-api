# Gemini Chatbot API

A simple chatbot web app using Node.js, Express, and Google Gemini API for AI responses. The frontend is built with vanilla JavaScript.

## Features
- Chat interface with user and AI messages
- Uses Google Gemini API for AI-generated responses
- Simple, production-ready frontend and backend

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/inggards94/gemini-chat-api.git
   cd gemini-chat-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your Google Gemini API credentials as required in your backend code.

### Running the App
Start the server:
```bash
npm run start
```

The app will be available at `http://localhost:3000` (or your configured port).

## API
### POST /api/chat
- **Request Body:**
  ```json
  {
    "messages": [
      { "role": "user", "content": "<user_message>" }
    ]
  }
  ```
- **Response:**
  ```json
  {
    "result": "<gemini_ai_response>"
  }
  ```

## Frontend Usage
- Enter your message in the input box and press Send.
- The chat box will show your message, a temporary "Thinking..." message, and then the AI's reply.

## License
MIT
