const sqlite = require('node:sqlite');
const db = new sqlite.DatabaseSync('C:\\Users\\Usuario\\.local\\share\\mimocode\\mimocode.db');

// Get user messages with directive keywords
const query = `SELECT session_id, substr(body, 1, 600) as preview
FROM history_fts
WHERE kind = 'user_text'
  AND (body LIKE '%siempre%' OR body LIKE '%nunca%' OR body LIKE '%recuerda%' OR body LIKE '%importante%' OR body LIKE '%no quiero%' OR body LIKE '%quita%' OR body LIKE '%deja%' OR body LIKE '%solo%' OR body LIKE '%100%' OR body LIKE '%otra vez%' OR body LIKE '%cada vez%' OR body LIKE '%no me inventes%' OR body LIKE '%TODAS%' OR body LIKE '%NO %' OR body LIKE '%una vez%' OR body LIKE '%repitas%')
ORDER BY time_created DESC
LIMIT 30`;

const results = db.prepare(query).all();
results.forEach(r => {
  console.log(`\n[Session: ${r.session_id}]`);
  console.log(r.preview);
  console.log('---');
});
