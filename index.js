const core = require('@actions/core');
const standardVersion = require('standard-version');

async function run() {
  try {
    await standardVersion({});
  } catch (error) {
    core.setFailed(error.stack);
  }
}

run();
