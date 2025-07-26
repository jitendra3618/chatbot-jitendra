
from database import db
from datetime import datetime
from bson import ObjectId

def create_chat_session(user_id):
    session = {
        "user_id": user_id,
        "messages": [],
        "created_at": datetime.utcnow()
    }
    result = db.chat_sessions.insert_one(session)
    return str(result.inserted_id)

def add_message(conversation_id, role, content):
    db.chat_sessions.update_one(
        {"_id": ObjectId(conversation_id)},
        {"$push": {"messages": {"role": role, "content": content, "timestamp": datetime.utcnow()}}}
    )

def get_session(conversation_id):
    return db.chat_sessions.find_one({"_id": ObjectId(conversation_id)})
