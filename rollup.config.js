// import { nodeResolve } from "@rollup/plugin-node-resolve";
const commonjs = require("@rollup/plugin-commonjs");
const json = require("@rollup/plugin-json");
const fs = require("fs");
const path = require("path");

const files = [
  {
    input: "dist/src/index.js",
    output: {
      file: "temp/index.js",
      format: "cjs",
      exports: "auto",
    },
    plugins: [
      commonjs({
        ignoreDynamicRequires: true,
      }),
      json(),
    ],
  },
];

module.exports = files;
