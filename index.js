const core = require('@actions/core');
const standardVersion = require('standard-version');
const { getConfiguration } = require('standard-version/lib/configuration');


async function run() {
  try {
    await standardVersion(getConfiguration());
  } catch (error) {
    core.setFailed(error.stack);
  }
}

run();
