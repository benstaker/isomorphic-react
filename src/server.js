import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './components/App'
import ejs from 'ejs';
import fs from 'fs';

createServer((req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}>
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    const htmlContent = fs.readFileSync(__dirname + '/views/index.ejs', 'utf8');
    const htmlRenderized = ejs.render(htmlContent, {filename: 'index.ejs', markup: html });
    res.write(htmlRenderized)
    res.end()
  }
}).listen(3000)
