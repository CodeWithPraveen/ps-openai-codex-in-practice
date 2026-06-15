import json
from unittest.mock import MagicMock, patch

from support_service.assistant import run_support_session


def _make_response(content: str | None = None, function_call=None):
    message = MagicMock()
    message.content = content
    message.function_call = function_call
    choice = MagicMock()
    choice.message = message
    response = MagicMock()
    response.choices = [choice]
    return response


def test_simple_reply():
    with patch("support_service.assistant.client") as mock_client:
        mock_client.chat.completions.create.return_value = _make_response(
            content="Hello! How can I help you today?"
        )
        result = run_support_session([{"role": "user", "content": "Hi there"}])
    assert "help" in result.lower()


def test_order_status_tool_call():
    fc = MagicMock()
    fc.name = "get_order_status"
    fc.arguments = json.dumps({"order_id": "ORD-99999"})

    first_response = _make_response(function_call=fc)
    second_response = _make_response(content="Your order ORD-99999 is currently shipped.")

    with patch("support_service.assistant.client") as mock_client:
        mock_client.chat.completions.create.side_effect = [first_response, second_response]
        result = run_support_session(
            [{"role": "user", "content": "What's the status of order ORD-99999?"}]
        )
    assert "ORD-99999" in result
