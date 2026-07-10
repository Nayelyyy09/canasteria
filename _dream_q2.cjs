const sqlite = require('node:sqlite');
const db = new sqlite.DatabaseSync('C:\\Users\\Usuario\\.local\\share\\mimocode\\mimocode.db');

// Get more user messages with specific directives
const query = `SELECT session_id, substr(body, 1, 500) as preview
FROM history_fts
WHERE kind = 'user_text'
  AND (body LIKE '%quita el C.N%' OR body LIKE '%Todas las imagenes%' OR body LIKE '%debe verse%' OR body LIKE '%uniforme%' OR body LIKE '%comprimido%' OR body LIKE '%flash%' OR body LIKE '%rapida%' OR body LIKE '%no debe haber%' OR body LIKE '%Revisa bien%')
ORDER BY time_created DESC
LIMIT 20`;

const results = db.prepare(query).all();
results.forEach(r => {
  console.log(`\n[Session: ${r.session_id}]`);
  console.log(r.preview);
  console.log('---');
});

// Also check for sessions in this project directory
console.log('\n\n=== PROJECT SESSIONS ===');
const projSessions = db.prepare(`SELECT id, slug, title, directory, time_created FROM session WHERE directory LIKE '%canastanavidena-2%' ORDER BY time_created DESC`).all();
projSessions.forEach(s => {
  console.log(`${s.id} | ${s.slug} | ${s.title} | ${s.directory} | ${new Date(s.time_created).toISOString()}`);
});
