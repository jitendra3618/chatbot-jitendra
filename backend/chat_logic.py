
from database import db
from groq_client import call_llm

def handle_chat(user_input):
    if "top 5" in user_input.lower() and "sold" in user_input.lower():
        pipeline = [
            {"$group": {"_id": "$product_id", "total": {"$sum": 1}}},
            {"$sort": {"total": -1}}, {"$limit": 5}
        ]
        result = list(db.order_items.aggregate(pipeline))
        product_ids = [r["_id"] for r in result]
        names = db.products.find({"product_id": {"$in": product_ids}})
        return "Top 5 most sold products:\n" + "\n".join([n["product_name"] for n in names])

    elif "status" in user_input.lower() and "order" in user_input.lower():
        order_id = ''.join(filter(str.isdigit, user_input))
        order = db.orders.find_one({"order_id": order_id})
        if order:
            return f"Order {order_id} is {order.get('status', 'unknown')}."
        else:
            return "Order ID not found."

    elif "how many" in user_input.lower() and "in stock" in user_input.lower():
        name = user_input.split("how many")[1].split("in stock")[0].strip()
        product = db.products.find_one({"product_name": {"$regex": name, "$options": "i"}})
        if product:
            return f"{product['product_name']} has {product['stock']} items left."
        return "Product not found."

    else:
        return call_llm(user_input)
