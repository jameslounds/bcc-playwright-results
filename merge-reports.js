const { mergeHTMLReports } = require("playwright-merge-html-reports");

const { readdir } = require("fs/promises");

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

(async () => {
  const reportDirs = (await getDirectories("unmerged-reports")).map(
    (dirname) => process.cwd() + "/unmerged-reports/" + dirname
  );
  mergeHTMLReports(reportDirs, {
    outputFolderName: "report",
    overwriteExisting: true,
  });
})();
