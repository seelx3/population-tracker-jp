export default {
  "./**/*.{cjs,css,html,js,json,md,mjs,mts,ts,tsx,yml}": (files) => {
    const commands = [
      `node node_modules/.bin/prettier --cache --write ${files.join(" ")}`,
      `node node_modules/.bin/eslint --cache --fix ${files.join(" ")}`,
      `node node_modules/.bin/eslint --cache ${files.join(" ")}`,
    ];
    if (files.some((file) => file.endsWith("package.json"))) {
      commands.push("node node_modules/.bin/sort-package-json");
    }
    return commands;
  },
};
