from __future__ import annotations
from pathlib import Path
from email.message import EmailMessage
import base64
import json
import sys
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

ROOT = Path(__file__).resolve().parents[1]
TOKEN = ROOT / 'gmail_token.json'
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

def send_email(to: str, subject: str, body: str, sender: str = 'orbytstechnologies@gmail.com') -> dict:
    creds = Credentials.from_authorized_user_file(str(TOKEN), SCOPES)
    service = build('gmail', 'v1', credentials=creds)
    msg = EmailMessage()
    msg['To'] = to
    msg['From'] = f'RankLift Local <{sender}>'
    msg['Subject'] = subject
    msg.set_content(body)
    raw = base64.urlsafe_b64encode(msg.as_bytes()).decode()
    sent = service.users().messages().send(userId='me', body={'raw': raw}).execute()
    return {'status':'sent', 'id': sent.get('id'), 'threadId': sent.get('threadId'), 'to': to, 'subject': subject}

if __name__ == '__main__':
    if len(sys.argv) < 4:
        print('Usage: python gmail_send.py TO SUBJECT BODY_FILE')
        sys.exit(2)
    body = Path(sys.argv[3]).read_text(encoding='utf-8')
    print(json.dumps(send_email(sys.argv[1], sys.argv[2], body), indent=2))
