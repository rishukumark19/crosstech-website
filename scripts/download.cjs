const https = require('https');
const fs = require('fs');

https.get('https://ui.aceternity.com/registry/github-globe.json', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('globe-registry.json', data);
    console.log('Downloaded.');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
