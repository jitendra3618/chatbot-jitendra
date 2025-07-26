
from fastapi import FastAPI
from pydantic import BaseModel
from models import create_chat_session, add_message
from chat_logic import handle_chat

app = FastAPI()

class ChatRequest(BaseModel):
    user_id: str
    message: str
    conversation_id: str = None

@app.post("/api/chat")
def chat_endpoint(chat: ChatRequest):
    if not chat.conversation_id:
        chat.conversation_id = create_chat_session(chat.user_id)
    
    add_message(chat.conversation_id, "user", chat.message)
    reply = handle_chat(chat.message)
    add_message(chat.conversation_id, "bot", reply)
    
    return {"conversation_id": chat.conversation_id, "response": reply}
