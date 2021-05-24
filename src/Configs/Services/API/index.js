import GET from './API-GET';

const getWorkerData = () => GET('?results=100');

const APIConfig = {
  getWorkerData,
};

export default APIConfig;