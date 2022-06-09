const Metalsmith = require("metalsmith"),
  markdown = require("metalsmith-markdown"),
  layouts = require("metalsmith-layouts"),
  permalinks = require("@metalsmith/permalinks"),
  collections = require("metalsmith-collections"),
  metadata = require("metalsmith-collection-metadata");

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
      config: "*.md",
    })
  )
  .use(markdown())
  .use(permalinks())
  .use(
    metadata({
      config: {
        // titles: { title1: "config", title2: "config2" },
        adobeApps: [
          "ACROBAT",
          "AE",
          "AN",
          "AU",
          "DW",
          "ID",
          "AI",
          "LR",
          "PS",
          "PR",
          "SUB",
          "XD",
          "OTHER"
        ],
        pricing: ["foss", "free", "paid"],
      },
    })
  )
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
