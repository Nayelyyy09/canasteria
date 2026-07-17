const Database = require('C:/Users/Usuario/AppData/Local/Temp/mimocode-db-query/node_modules/better-sqlite3');
const db = new Database('C:\\Users\\Usuario\\.local\\share\\mimocode\\mimocode.db', {readonly:true});

const cmd = process.argv[2];
const arg = process.argv[3];
const arg2 = process.argv[4];

if (cmd === 'user-parts') {
  // Get user message text from the part table
  const rows = db.prepare(`SELECT m.id as mid, s.id as sid, s.title, json_extract(p.data, '$.type') as ptype, substr(p.data, 1, 500) as pdata FROM part p JOIN message m ON m.id = p.message_id JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'user' AND s.id = ? ORDER BY m.time_created, p.time_created LIMIT 50`).all(arg);
  rows.forEach(r => console.log(r.mid + ' | type=' + r.ptype + ' | ' + r.pdata.substring(0, 400)));
} else if (cmd === 'search-user-parts') {
  // Search user text in parts
  const pattern = process.argv[3];
  const rows = db.prepare(`SELECT s.id as sid, s.title, json_extract(p.data, '$.type') as ptype, substr(p.data, 1, 600) as pdata FROM part p JOIN message m ON m.id = p.message_id JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'user' ORDER BY m.time_created DESC`).all();
  const re = new RegExp(pattern, 'i');
  rows.forEach(r => {
    const pd = JSON.parse(r.pdata);
    let text = pd.text || '';
    if (re.test(text)) {
      console.log(r.sid + ' | ' + (r.title||'').substring(0,40) + ' | ' + text.substring(0, 300));
    }
  });
} else if (cmd === 'recent-sessions-7d') {
  // Sessions in last 7 days (7 * 24 * 60 * 60 * 1000 = 604800000)
  const cutoff = Date.now() - 604800000;
  const rows = db.prepare(`SELECT id, title, time_created FROM session WHERE time_created > ? AND title NOT LIKE 'checkpoint-writer%' AND directory LIKE '%canastanavidena%' ORDER BY time_created DESC`).all(cutoff);
  rows.forEach(r => {
    const d = new Date(r.time_created);
    console.log(d.toISOString().split('T')[0] + ' | ' + r.id + ' | ' + (r.title||'').substring(0,80));
  });
}

db.close();
