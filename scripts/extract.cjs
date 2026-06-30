const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\rishu\\.gemini\\antigravity-ide\\brain\\64a55624-064a-419f-8dcf-3a79ef3acdbc\\.system_generated\\steps\\134\\content.md', 'utf8');

// The file contains Next.js flight data strings which have the code embedded as escaped strings.
// Let's just find the code by looking for imports or typical three.js imports.
// "import React from 'react';\nimport { Canvas } from '@react-three/fiber'"
const match = content.match(/"import React[\s\S]*?from ['"]@react-three\/fiber['"][\s\S]*?export function Globe[\s\S]*?"/);

if (match) {
  let code = match[0];
  try {
    code = JSON.parse(code); // parse the JSON string to unescape newlines
    fs.writeFileSync('extracted-globe.tsx', code);
    console.log('Extracted successfully!');
  } catch(e) {
    console.error('Failed to parse:', e);
  }
} else {
  console.log('Code not found via regex.');
}
