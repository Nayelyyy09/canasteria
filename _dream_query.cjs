const Database = require('C:/Users/Usuario/AppData/Local/Temp/mimocode-db-query/node_modules/better-sqlite3');
const db = new Database('C:\\Users\\Usuario\\.local\\share\\mimocode\\mimocode.db', {readonly:true});

const cmd = process.argv[2];
const arg = process.argv[3];

if (cmd === 'recent-sessions') {
  const rows = db.prepare(`SELECT id, title, time_created FROM session WHERE title NOT LIKE 'checkpoint-writer%' AND directory LIKE '%canastanavidena%' ORDER BY time_created DESC LIMIT 30`).all();
  rows.forEach(r => {
    const d = new Date(r.time_created);
    console.log(d.toISOString().split('T')[0] + ' | ' + r.id + ' | ' + (r.title||'').substring(0,80));
  });
} else if (cmd === 'user-messages') {
  const rows = db.prepare(`SELECT m.id, substr(json_extract(m.data, '$.content'), 1, 400) as preview FROM message m WHERE m.session_id = ? AND json_extract(m.data, '$.role') = 'user' ORDER BY m.time_created`).all(arg);
  rows.forEach(r => console.log(r.id + ' | ' + r.preview));
} else if (cmd === 'session-parts') {
  const limit = process.argv[4] || '200';
  const rows = db.prepare(`SELECT m.id as msg_id, m.agent_id, json_extract(p.data, '$.type') as part_type, json_extract(p.data, '$.tool') as tool, substr(p.data, 1, 600) as preview FROM message m JOIN part p ON p.message_id = m.id WHERE m.session_id = ? AND json_extract(m.data, '$.role') = 'assistant' ORDER BY m.time_created, p.time_created LIMIT ?`).all(arg, parseInt(limit));
  rows.forEach(r => console.log(r.msg_id + ' | agent=' + (r.agent_id||'main') + ' | type=' + r.part_type + ' | tool=' + (r.tool||'') + ' | ' + r.preview.substring(0, 250)));
} else if (cmd === 'search-user') {
  const rows = db.prepare(`SELECT s.id as sid, s.title, substr(json_extract(m.data, '$.content'), 1, 400) as text FROM message m JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'user' AND json_extract(m.data, '$.content') LIKE '%' || ? || '%' ORDER BY m.time_created DESC LIMIT 20`).all(arg);
  rows.forEach(r => console.log(r.sid + ' | ' + (r.title||'').substring(0,40) + ' | ' + r.text.substring(0, 300)));
} else if (cmd === 'search-text') {
  const rows = db.prepare(`SELECT s.id as sid, s.title, substr(json_extract(p.data, '$.text'), 1, 500) as text FROM part p JOIN message m ON m.id = p.message_id JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'assistant' AND json_extract(p.data, '$.type') = 'text' AND json_extract(p.data, '$.text') LIKE '%' || ? || '%' ORDER BY m.time_created DESC LIMIT 20`).all(arg);
  rows.forEach(r => console.log(r.sid + ' | ' + (r.title||'').substring(0,40) + ' | ' + r.text.substring(0, 300)));
} else if (cmd === 'count') {
  const r = db.prepare('SELECT count(*) as cnt FROM session').get();
  console.log('Total:', r.cnt);
  const r2 = db.prepare("SELECT count(*) as cnt FROM session WHERE title NOT LIKE 'checkpoint-writer%'").get();
  console.log('Real:', r2.cnt);
}

db.close();
