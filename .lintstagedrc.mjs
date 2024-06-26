export default {
  "./**/*.{cjs,css,html,js,json,md,mjs,mts,ts,tsx,yml}": (files) => {
    const commands = [
      `node node_modules/.bin/prettier --cache --write ${files.join(" ")} --plugin=prettier-plugin-organize-imports`,
    ];
    if (files.some((file) => file.endsWith("package.json"))) {
      commands.push("node node_modules/.bin/sort-package-json");
    }
    return commands;
  },
};
