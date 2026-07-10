const sqlite = require('node:sqlite');
const db = new sqlite.DatabaseSync('C:\\Users\\Usuario\\.local\\share\\mimocode\\mimocode.db');

// Get schema
const tables = db.prepare("SELECT name, sql FROM sqlite_master WHERE type='table'").all();
tables.forEach(t => console.log(t.name + ': ' + t.sql));

console.log('\n--- SESSIONS ---');
try {
  const sessions = db.prepare('SELECT * FROM session ORDER BY time_created DESC LIMIT 20').all();
  sessions.forEach(s => console.log(JSON.stringify(s)));
} catch(e) { console.log('session table error:', e.message); }
