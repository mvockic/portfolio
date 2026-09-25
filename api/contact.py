import os
import re

import requests
from flask import Flask, jsonify, request

RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
CONTACT_TO_EMAIL = os.environ.get("CONTACT_TO_EMAIL")
CONTACT_FROM_EMAIL = os.environ.get("CONTACT_FROM_EMAIL")

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")

app = Flask(__name__)


@app.post("/api/contact")
def contact():
    data = request.get_json(silent=True) or {}

    # Honeypot: bots fill every field, real users never see/fill this one.
    if data.get("website"):
        return jsonify(ok=True)

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or not email or not message:
        return jsonify(ok=False, error="Name, email, and message are all required."), 400
    if not EMAIL_RE.match(email):
        return jsonify(ok=False, error="That email address doesn't look valid."), 400

    try:
        resp = requests.post(
            "https://api.resend.com/emails",
            headers={"Authorization": f"Bearer {RESEND_API_KEY}"},
            json={
                "from": CONTACT_FROM_EMAIL,
                "to": [CONTACT_TO_EMAIL],
                "reply_to": email,
                "subject": f"Portfolio contact from {name}",
                "text": f"From: {name} <{email}>\n\n{message}",
            },
            timeout=10,
        )
        resp.raise_for_status()
    except requests.RequestException:
        return jsonify(ok=False, error="Couldn't send your message right now. Please try again later."), 500

    return jsonify(ok=True)
