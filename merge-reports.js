const { mergeHTMLReports } = require("playwright-merge-html-reports");

mergeHTMLReports(
  [
    process.cwd() + "/unmerged-reports/u-value-webkit",
    process.cwd() + "/unmerged-reports/u-value-firefox",
    process.cwd() + "/unmerged-reports/u-value-chromium",

    //   "./reports/beam-calc-webkit.html",
    //   "./reports/beam-calc-firefox.html",
    //   "./reports/beam-calc-chromium.html",
  ],
  { outputFolderName: "report", overwriteExisting: true }
);
