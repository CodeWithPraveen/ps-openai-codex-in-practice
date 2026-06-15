import json

from .client import (
    client,
    FREQUENCY_PENALTY,
    MAX_TOKENS,
    MODEL,
    PRESENCE_PENALTY,
    TEMPERATURE,
    TOP_P,
)
from .tools import FUNCTIONS, get_order_status, process_refund

SYSTEM_PROMPT = (
    "You are a customer support assistant for Globomantics, an e-commerce company. "
    "Help customers with their order status and refund requests. "
    "Be polite, concise, and always address the customer by name if they provide it. "
    "If a customer asks about something other than orders and refunds, politely redirect them."
)


def _dispatch_function(name: str, arguments: str) -> dict:
    args = json.loads(arguments)
    if name == "get_order_status":
        return get_order_status(**args)
    if name == "process_refund":
        return process_refund(**args)
    return {"error": f"unknown function: {name}"}


def run_support_session(messages: list[dict]) -> str:
    """Run one turn of the support assistant. `messages` is the conversation history so far."""
    full_messages = [{"role": "system", "content": SYSTEM_PROMPT}] + messages

    response = client.chat.completions.create(
        model=MODEL,
        messages=full_messages,
        functions=FUNCTIONS,
        function_call="auto",
        max_tokens=MAX_TOKENS,
        temperature=TEMPERATURE,
        top_p=TOP_P,
        frequency_penalty=FREQUENCY_PENALTY,
        presence_penalty=PRESENCE_PENALTY,
    )

    message = response.choices[0].message

    if message.function_call:
        tool_result = _dispatch_function(
            message.function_call.name,
            message.function_call.arguments,
        )
        follow_up_messages = full_messages + [
            {
                "role": "assistant",
                "content": message.content,
                "function_call": {
                    "name": message.function_call.name,
                    "arguments": message.function_call.arguments,
                },
            },
            {
                "role": "function",
                "name": message.function_call.name,
                "content": json.dumps(tool_result),
            },
        ]
        follow_up = client.chat.completions.create(
            model=MODEL,
            messages=follow_up_messages,
            max_tokens=MAX_TOKENS,
            temperature=TEMPERATURE,
            top_p=TOP_P,
        )
        return follow_up.choices[0].message.content

    return message.content
