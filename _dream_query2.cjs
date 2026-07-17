const Database = require('C:/Users/Usuario/AppData/Local/Temp/mimocode-db-query/node_modules/better-sqlite3');
const db = new Database('C:\\Users\\Usuario\\.local\\share\\mimocode\\mimocode.db', {readonly:true});

const cmd = process.argv[2];
const arg = process.argv[3];

if (cmd === 'msg-schema') {
  // Show the data column structure for user messages
  const rows = db.prepare(`SELECT data FROM message WHERE session_id = ? AND json_extract(data, '$.role') = 'user' LIMIT 3`).all(arg);
  rows.forEach(r => console.log(r.data.substring(0, 500)));
} else if (cmd === 'user-text') {
  // Try different JSON paths for user message content
  const rows = db.prepare(`SELECT m.id, m.data FROM message m WHERE m.session_id = ? AND json_extract(m.data, '$.role') = 'user' LIMIT 5`).all(arg);
  rows.forEach(r => {
    const d = JSON.parse(r.data);
    console.log('---');
    console.log('Keys:', Object.keys(d).join(', '));
    if (d.content) console.log('content:', String(d.content).substring(0, 300));
    if (d.message) console.log('message:', String(d.message).substring(0, 300));
    if (d.text) console.log('text:', String(d.text).substring(0, 300));
    if (d.parts) console.log('parts:', JSON.stringify(d.parts).substring(0, 500));
  });
} else if (cmd === 'all-user-text') {
  // Get all user text across sessions
  const rows = db.prepare(`SELECT m.id, s.id as sid, s.title, m.data FROM message m JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'user' ORDER BY m.time_created DESC LIMIT 100`).all();
  rows.forEach(r => {
    const d = JSON.parse(r.data);
    let text = '';
    if (d.content) text = String(d.content);
    else if (d.message) text = String(d.message);
    else if (d.parts) text = d.parts.map(p => p.text || '').join(' ');
    if (text.trim()) {
      console.log(r.sid + ' | ' + (r.title||'').substring(0,40) + ' | ' + text.substring(0, 200));
    }
  });
} else if (cmd === 'search-all-user') {
  const pattern = process.argv[3];
  const rows = db.prepare(`SELECT s.id as sid, s.title, m.data FROM message m JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'user' ORDER BY m.time_created DESC`).all();
  const re = new RegExp(pattern, 'i');
  rows.forEach(r => {
    const d = JSON.parse(r.data);
    let text = '';
    if (d.content) text = String(d.content);
    else if (d.message) text = String(d.message);
    else if (d.parts) text = d.parts.map(p => p.text || '').join(' ');
    if (re.test(text)) {
      console.log(r.sid + ' | ' + (r.title||'').substring(0,40) + ' | ' + text.substring(0, 250));
    }
  });
} else if (cmd === 'search-all-assistant') {
  const pattern = process.argv[3];
  const rows = db.prepare(`SELECT s.id as sid, s.title, p.data FROM part p JOIN message m ON m.id = p.message_id JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'assistant' AND json_extract(p.data, '$.type') = 'text' ORDER BY m.time_created DESC`).all();
  const re = new RegExp(pattern, 'i');
  rows.forEach(r => {
    const pd = JSON.parse(r.data);
    if (pd.text && re.test(pd.text)) {
      console.log(r.sid + ' | ' + (r.title||'').substring(0,40) + ' | ' + pd.text.substring(0, 300));
    }
  });
}

db.close();
