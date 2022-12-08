// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/**
 * Class that represents the setting Environment for development.
 * 
 * @author Eduardo Nascimento
 */
 export const environment = {
  production: false,
  version: '1.0.0',
  title: 'Dataset generator tool in RDF Dataset for training information retrieval conversational systems',
  apiUrl: 'http://localhost:5000',
  database: 'Mondial',
  hasLogin: false,
  paths: {
  
  }
};
