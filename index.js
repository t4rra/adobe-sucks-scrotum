const Metalsmith = require("metalsmith"),
  markdown = require("metalsmith-markdown"),
  layouts = require("metalsmith-layouts"),
  permalinks = require("@metalsmith/permalinks"),
  collections = require("metalsmith-collections");

Metalsmith(__dirname)
  .metadata({
    sitename: "Adobe Sucks Scrotum",
    description: "Alternatives to Adobe's apps.",
    generator: "Metalsmith",
    url: "https://metalsmith.io/",
  })
  .source("./src")
  .destination("./build")
  .use(
    collections({
      altApps: "altApps/*.md",
      config: "index.md",
    })
  )
  .use(markdown())
  .use(permalinks())
  .use(
    layouts({
      engineOptions: {
        helpers: {
          formattedDate: function (date) {
            return new Date(date).toLocaleDateString();
          },
        },
      },
    })
  )
  .build(function (err, files) {
    if (err) throw err;
  });
