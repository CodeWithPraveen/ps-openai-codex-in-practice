import os

from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

MODEL = "gpt-3.5-turbo-0613"

# Hard-coded request parameters
MAX_TOKENS = 512
TEMPERATURE = 0.7
TOP_P = 1.0
FREQUENCY_PENALTY = 0.0
PRESENCE_PENALTY = 0.0
