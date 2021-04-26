/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const fs = require('fs-extra');
const path = require('path');

async function getConfigurationByProject(projectDir) {
  const pathToConfigFile = path.resolve(
    `cypress/integration/${projectDir}/conf.json`
  );
  const confExists = await fs.pathExists(pathToConfigFile);
  const customConfig =
    (confExists && (await fs.readJson(pathToConfigFile))) || undefined;
  return customConfig;
}

// plugins file
module.exports = async (on, config) => {
  const projectDir = config.env.projectDir;
  // accept env value or use PL by default
  const env = config.env.env || 'PL';
  const comm = 'COMMON';
  const projectConf = Object.assign(
    {},
    await getConfigurationByProject(projectDir)
  );

  const finalConfig = Object.assign({}, config, projectConf[comm], projectConf[env], {
    integrationFolder:
      (projectDir && `cypress/integration/${projectDir}`) ||
      'cypress/integration/',
    environment: env
  });

  on("before:browser:launch", (browser = {}, launchOptions) => {
    if (browser.name === "chrome") {
      launchOptions.args.push("--disable-dev-shm-usage");
      return launchOptions;
    }
  });

  on('task', {
    log (message) {
      console.log(message)
      return null
    }
  });

  return finalConfig;
};
