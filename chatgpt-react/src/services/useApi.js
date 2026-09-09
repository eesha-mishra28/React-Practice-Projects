import {useState} from 'react';
const useApi = (apicall) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const execute = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apicall(...args);
      setData(result);
    }
    catch (err) {
      setError(err.stack);
    }
    finally{
      setLoading(false);
    }
  };
  return {data, loading, error, execute};

}

export default useApi;