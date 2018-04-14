const util = require('util');

function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // Create a header string for the generated file:
    var fileList = 'In this build:\n\n';

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    for (var filename in compilation.assets) {
      fileList += ('- '+ filename +'\n');
    }

    fileList += '\n\nMore Info:\n\n';

    for (var filename in compilation.assets) {
      fileList += ('- '+ filename + ':\n');
      fileList += util.inspect(compilation.assets[filename]) +'\n\n';
    }

    // Insert this list into the webpack build as a new file asset:
    compilation.assets['filelist.txt'] = {
      source: function() {
        return fileList;
      },
      size: function() {
        return fileList.length;
      }
    };

    let compilationJson = util.inspect(compilation);

    compilation.assets['compilation.json'] = {
      source: () => compilationJson,
      size: () => compilationJson.length,
    };

    callback();
  });
};

module.exports = FileListPlugin;