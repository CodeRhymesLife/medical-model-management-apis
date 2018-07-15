import loadJsonFile from 'load-json-file';

export default loadJsonFile.sync(`${__dirname}/settings.json`);
