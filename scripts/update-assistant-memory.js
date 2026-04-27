#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function now() {
  const d = new Date();
  const pad = (n) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

const msg = process.argv.slice(2).join(' ').trim();
if (!msg) {
  console.error('Usage: node scripts/update-assistant-memory.js <message>');
  process.exit(1);
}

const file = path.resolve(__dirname, '..', 'assistant_memory.md');
const line = `- ${now()} — ${msg}\n`;

try {
  fs.appendFileSync(file, line, { encoding: 'utf8' });
  console.log('Appended to', file);
} catch (e) {
  console.error('Failed to append:', e.message);
  process.exit(2);
}
