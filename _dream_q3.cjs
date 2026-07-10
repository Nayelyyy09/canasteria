const sqlite = require('node:sqlite');
const db = new sqlite.DatabaseSync('C:\\Users\\Usuario\\.local\\share\\mimocode\\mimocode.db');

// Search for tool_error results - these reveal gotchas
const errors = db.prepare(`SELECT session_id, substr(body, 1, 400) as preview
FROM history_fts
WHERE kind = 'tool_error'
ORDER BY time_created DESC
LIMIT 15`).all();
console.log('=== TOOL ERRORS ===');
errors.forEach(r => {
  console.log(`\n[Session: ${r.session_id}]`);
  console.log(r.preview);
  console.log('---');
});

// Search for assistant text that contains "Cooporativas" or "corporativas" 
console.log('\n\n=== COOPO/CORPO MENTIONS ===');
const corpos = db.prepare(`SELECT session_id, substr(body, 1, 400) as preview
FROM history_fts
WHERE kind = 'assistant_text'
  AND (body LIKE '%Cooporativas%' OR body LIKE '%cooporativas%')
ORDER BY time_created DESC
LIMIT 10`).all();
corpos.forEach(r => {
  console.log(`\n[Session: ${r.session_id}]`);
  console.log(r.preview);
  console.log('---');
});
