from pathlib import Path
import json
from google_auth_oauthlib.flow import InstalledAppFlow

ROOT = Path(__file__).resolve().parents[1]
CREDENTIALS = ROOT / 'credentials.json'
TOKEN = ROOT / 'gmail_token.json'
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

client_config = json.loads(CREDENTIALS.read_text(encoding='utf-8'))
# Some Google Desktop OAuth clients are public clients and omit client_secret.
# google-auth-oauthlib expects the key to exist, so provide an empty value.
if 'installed' in client_config and 'client_secret' not in client_config['installed']:
    client_config['installed']['client_secret'] = ''

flow = InstalledAppFlow.from_client_config(client_config, SCOPES)
creds = flow.run_local_server(
    host='localhost',
    port=0,
    open_browser=True,
    prompt='consent',
    authorization_prompt_message='Please authorize Gmail send access in the browser: {url}'
)
TOKEN.write_text(creds.to_json(), encoding='utf-8')
print(json.dumps({'status':'authenticated','token_path':str(TOKEN),'scopes':creds.scopes}, indent=2))
