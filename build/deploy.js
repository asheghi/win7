/* eslint-disable no-console, import/no-extraneous-dependencies */
const process = require('process');
const ghpages = require('gh-pages');

console.log('Publishing to Github-Pages ...');
ghpages.publish('dist', (err) => {
  if (err) {
    console.error('Deploy Failed');
    console.error(err);
    process.exit(1);
  } else {
    console.log('Successfully Deployed to Github-Pages');
    process.exit(0);
  }
});
