/* eslint @typescript-eslint/no-var-requires: 0 */
const express = require("express");
const path = require("path");
const serveStatic = require("serve-static");

const app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;

app.listen(port);
console.log("server started " + port);
/* eslint @typescript-eslint/no-var-requires: 1 */
