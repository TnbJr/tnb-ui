const path = require('path');
const fs = require('fs');
const url = require('url');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appSrc: resolveApp('src'),
  styleGuide: resolveApp('src/styleguide/index.js'),
  globalStyles: resolveApp('src/stylesheets/_styles.scss'),
  fonts: resolveApp('src/assets/fonts')
}