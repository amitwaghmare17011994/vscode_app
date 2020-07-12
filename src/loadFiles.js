const path = require("path");
const fs = require("fs");

export const loadFiles = (cb) => {
  const directoryPath = path.join(__dirname, "Components");
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    cb(files);
  });
};
