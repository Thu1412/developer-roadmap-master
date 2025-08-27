// File: generateHtaccessPerFolder.js
// Chạy: node generateHtaccessPerFolder.js

import fs from 'fs';
import path from 'path';

const rootDir = path.resolve('./');

const folders = fs.readdirSync(rootDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
  .map(dirent => dirent.name);

folders.forEach(folder => {
  const folderPath = path.join(rootDir, folder);
  const htaccessContent = `DirectoryIndex index.html\n`;
  fs.writeFileSync(path.join(folderPath, '.htaccess'), htaccessContent, 'utf-8');
  console.log(`✅ .htaccess created in ${folder}`);
});
