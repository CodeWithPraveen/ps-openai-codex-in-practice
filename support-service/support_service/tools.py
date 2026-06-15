# Legacy function definitions using the deprecated 'functions' parameter format.
FUNCTIONS = [
    {
        "name": "get_order_status",
        "description": "Look up the current status of a customer order.",
        "parameters": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string",
                    "description": "The order identifier, e.g. ORD-12345.",
                }
            },
            "required": ["order_id"],
        },
    },
    {
        "name": "process_refund",
        "description": "Process a full refund for a customer order.",
        "parameters": {
            "type": "object",
            "properties": {
                "order_id": {
                    "type": "string",
                    "description": "The order identifier to refund.",
                },
                "reason": {
                    "type": "string",
                    "description": "The reason for the refund request.",
                },
            },
            "required": ["order_id", "reason"],
        },
    },
]


def get_order_status(order_id: str) -> dict:
    # Stub: replace with a real database or API call.
    return {
        "order_id": order_id,
        "status": "shipped",
        "carrier": "FedEx",
        "estimated_delivery": "2024-12-20",
    }


def process_refund(order_id: str, reason: str) -> dict:
    # Stub: replace with a real refund processing call.
    return {
        "order_id": order_id,
        "refund_status": "approved",
        "amount_usd": 49.99,
    }
