import GET from './API-GET';

const getWorkerData = () => GET('?results=20');

const APIConfig = {
  getWorkerData,
};

export default APIConfig;