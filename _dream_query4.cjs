const Database = require('C:/Users/Usuario/AppData/Local/Temp/mimocode-db-query/node_modules/better-sqlite3');
const db = new Database('C:\\Users\\Usuario\\.local\\share\\mimocode\\mimocode.db', {readonly:true});

const cmd = process.argv[2];
const arg = process.argv[3];

if (cmd === 'search-user-text-all') {
  // Search user text in parts - extract text without parsing full JSON
  const pattern = arg;
  const re = new RegExp(pattern, 'i');
  const rows = db.prepare(`SELECT s.id as sid, s.title, json_extract(p.data, '$.text') as ptext FROM part p JOIN message m ON m.id = p.message_id JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'user' AND json_extract(p.data, '$.type') = 'text' ORDER BY m.time_created DESC`).all();
  rows.forEach(r => {
    if (r.ptext && re.test(r.ptext)) {
      console.log(r.sid + ' | ' + (r.title||'').substring(0,40) + ' | ' + r.ptext.substring(0, 300));
    }
  });
} else if (cmd === 'assistant-text-all') {
  // Search assistant text in parts
  const pattern = arg;
  const re = new RegExp(pattern, 'i');
  const rows = db.prepare(`SELECT s.id as sid, s.title, json_extract(p.data, '$.text') as ptext FROM part p JOIN message m ON m.id = p.message_id JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'assistant' AND json_extract(p.data, '$.type') = 'text' AND s.title NOT LIKE 'checkpoint-writer%' ORDER BY m.time_created DESC`).all();
  rows.forEach(r => {
    if (r.ptext && re.test(r.ptext)) {
      console.log(r.sid + ' | ' + (r.title||'').substring(0,40) + ' | ' + r.ptext.substring(0, 400));
      console.log('');
    }
  });
} else if (cmd === 'write-changes') {
  // Search for write/edit tool calls
  const rows = db.prepare(`SELECT s.id as sid, s.title, json_extract(p.data, '$.tool') as tool, substr(json_extract(p.data, '$.state.input'), 1, 300) as input_preview FROM part p JOIN message m ON m.id = p.message_id JOIN session s ON s.id = m.session_id WHERE json_extract(m.data, '$.role') = 'assistant' AND json_extract(p.data, '$.type') = 'tool' AND json_extract(p.data, '$.tool') IN ('write', 'edit') AND s.title NOT LIKE 'checkpoint-writer%' AND s.id = ? ORDER BY m.time_created, p.time_created`).all(arg);
  rows.forEach(r => console.log(r.tool + ' | ' + r.input_preview));
}

db.close();
