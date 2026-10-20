const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function resolvePath(reqUrl) {
  let urlPath = decodeURI(reqUrl.split('?')[0]);
  if (urlPath === '/' || urlPath === '' || urlPath === '/beranda' || urlPath === '/beranda.html') {
    return path.join(ROOT_DIR, 'src', 'pages', 'index.html');
  }

  // Handle asset requests regardless of subfolder prefix (e.g. /posts/assets/... or /pages/css/...)
  const assetTypes = ['/assets/', '/css/', '/js/'];
  for (const aType of assetTypes) {
    const idx = urlPath.indexOf(aType);
    if (idx !== -1) {
      const relAsset = urlPath.slice(idx);
      const fullAsset = path.join(ROOT_DIR, 'src', relAsset);
      if (fs.existsSync(fullAsset) && fs.statSync(fullAsset).isFile()) {
        return fullAsset;
      }
    }
  }

  // Direct match in root
  let direct = path.join(ROOT_DIR, urlPath);
  if (fs.existsSync(direct) && fs.statSync(direct).isFile()) {
    return direct;
  }

  // Match in src/
  let srcPath = path.join(ROOT_DIR, 'src', urlPath);
  if (fs.existsSync(srcPath) && fs.statSync(srcPath).isFile()) {
    return srcPath;
  }

  // Resolve HTML by basename (supports /menu, /menu.html, /pages/menu.html, /posts/menu.html, etc.)
  let cleanName = path.basename(urlPath);
  if (!cleanName.endsWith('.html') && !cleanName.includes('.')) {
    cleanName += '.html';
  }

  // Check in src/pages/
  let pagePath = path.join(ROOT_DIR, 'src', 'pages', cleanName);
  if (fs.existsSync(pagePath) && fs.statSync(pagePath).isFile()) {
    return pagePath;
  }

  // Check in src/posts/
  let postPath = path.join(ROOT_DIR, 'src', 'posts', cleanName);
  if (fs.existsSync(postPath) && fs.statSync(postPath).isFile()) {
    return postPath;
  }

  // Check in root or src directly
  let rootHtml = path.join(ROOT_DIR, cleanName);
  if (fs.existsSync(rootHtml) && fs.statSync(rootHtml).isFile()) {
    return rootHtml;
  }

  let srcHtml = path.join(ROOT_DIR, 'src', cleanName);
  if (fs.existsSync(srcHtml) && fs.statSync(srcHtml).isFile()) {
    return srcHtml;
  }

  return null;
}

const server = http.createServer((req, res) => {
  const filePath = resolvePath(req.url);

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + req.url);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Server Error: ' + err.code);
      return;
    }

    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'X-Content-Type-Options': 'nosniff'
    };

    // Cache static binary assets (images, fonts) for speed, but keep HTML/CSS/JS fresh for instant updates
    if (ext === '.webp' || ext === '.woff2' || ext === '.ttf') {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    } else {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      headers['Pragma'] = 'no-cache';
      headers['Expires'] = '0';
    }

    // Support Gzip compression for text assets
    const acceptEncoding = req.headers['accept-encoding'] || '';
    if (acceptEncoding.includes('gzip') && (contentType.includes('text') || contentType.includes('javascript') || contentType.includes('json'))) {
      zlib.gzip(content, (gzipErr, compressed) => {
        if (gzipErr) {
          res.writeHead(200, headers);
          res.end(content);
        } else {
          headers['Content-Encoding'] = 'gzip';
          res.writeHead(200, headers);
          res.end(compressed);
        }
      });
    } else {
      res.writeHead(200, headers);
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`DOMBASTIS KITCHEN high-performance server running at http://localhost:${PORT}`);
});
