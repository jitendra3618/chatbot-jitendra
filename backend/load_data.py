
import csv
from database import db

def load_csv(file_name, collection):
    with open(file_name, encoding="utf-8") as f:
        reader = csv.DictReader(f)
        data = list(reader)
        db[collection].delete_many({})
        db[collection].insert_many(data)
        print(f"Loaded {len(data)} records into {collection}")

load_csv("data/products.csv", "products")
load_csv("data/orders.csv", "orders")
load_csv("data/order_items.csv", "order_items")
