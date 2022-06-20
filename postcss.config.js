const purgecss = require("@fullhuman/postcss-purgecss");

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({ preset: "default" }),
    process.env.NODE_ENV === "production" &&
    purgecss({
      content: ["**/*.html", "./lib/**/*.ts",  "./lib/*.ts", "./lib/*.tsx", "./lib/**/*.tsx"],
      css: ["./lib/**/*.css"],
      extractors: [
        {
          extractor: new TailwindExtractor,
          // Specify the file extensions to include when scanning
          extensions: ["html", "ts", "tsx", "css"]
        }
      ]
    })
  ]
};
