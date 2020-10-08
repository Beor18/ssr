import express from "express";
import compression from "compression";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./../src/App";

function renderFullPage(html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Server side rendering - Platzi</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        <meta name="description" content="Examén de ssr para Platzi con react y express"/>
        <meta name="keywords" content="ssr, platzi, ssr con react, express"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="build/css/main.css" />
      </head>
      <body>
        <script async src="build/bundle.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {

  const html = ReactDOMServer.renderToString(
    <App />
  );

  res.send(renderFullPage(html));
}

const app = express();

app.use(compression())
app.use("/build", express.static("build"));

app.use(handleRender);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
