import express from "express";
import compression from "compression";
import React from "react";
import ReactDOMServer from "react-dom/server";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import App from "./../src/App";
import theme from "./../src/theme";

function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Server side rendering - Platzi</title>
        <style id="jss-server-side">${css}</style>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Examén de ssr para Platzi con react y express"/>
        <meta name="keywords" content="ssr, platzi, ssr con react, express"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head>
      <body>
        <script async src="build/bundle.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();

  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    )
  );

  const css = sheets.toString();

  res.send(renderFullPage(html, css));
}

const app = express();

app.use(compression())
app.use("/build", express.static("build"));

app.use(handleRender);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
