export default {
  "./**/*.{cjs,css,html,js,json,md,mjs,mts,ts,tsx}": (files) => {
    const commands = [
      `node node_modules/.bin/prettier --cache --write ${files.join(" ")}`,
    ];
    if (files.some((file) => file.endsWith("package.json"))) {
      commands.push("node node_modules/.bin/sort-package-json");
    }
    return commands;
  },
};
