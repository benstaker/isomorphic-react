import { createServer } from 'http';
import ReactDOMServer from 'react-dom/server';
import AppServer from './components/AppServer';
import ejs from 'ejs';
import fs from 'fs';

const serverPort = process.env.SERVER_PORT || 8055;

console.log(`Starting server on port ${serverPort}`);
createServer((req, res) => {
  const context = {};
  const html = ReactDOMServer.renderToString(AppServer(req, context));

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    const htmlContent = fs.readFileSync(__dirname + '/index.ejs', 'utf8');
    const htmlRenderized = ejs.render(htmlContent, {
      filename: 'index.ejs',
      htmlWebpackPlugin: {
        options: {
          markup: html,
        }
      }
    });
    res.write(htmlRenderized);
    res.end();
  }
}).listen(serverPort);
