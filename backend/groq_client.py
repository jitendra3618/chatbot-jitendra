
import requests

GROQ_API_KEY = "YOUR_GROQ_API_KEY"
API_URL = "https://api.groq.com/openai/v1/chat/completions"

def call_llm(prompt):
    headers = {"Authorization": f"Bearer {GROQ_API_KEY}"}
    body = {
        "model": "mixtral-8x7b-32768",
        "messages": [{"role": "user", "content": prompt}]
    }
    res = requests.post(API_URL, json=body, headers=headers)
    return res.json()["choices"][0]["message"]["content"]
