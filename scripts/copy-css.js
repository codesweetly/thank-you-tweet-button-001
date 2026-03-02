const fs = require("fs");

["cjs", "esm"].forEach((dir) =>
  fs.copyFileSync("./src/index.css", `./dist/${dir}/index.css`),
);

console.log("CSS copied successfully!");
