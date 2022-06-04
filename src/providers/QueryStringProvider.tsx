import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface QueryStringData {
  queryString: string;
  getQueryParameter: (key: string) => string | null;
  setQueryParameter: (key: string, value: string | null) => void;
}

const QueryStringContext = createContext<QueryStringData>(
  {} as QueryStringData,
);

const QueryStringProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const [queryParameters, setQueryParameters] = useState(
    new URLSearchParams(location.search),
  );
  const [queryString, setQueryString] = useState(queryParameters.toString());

  const getQueryParameter = useCallback(
    key => queryParameters.get(key),
    [queryParameters],
  );

  useEffect(() => {
    const off = history.listen(newLocation => {
      const params = new URLSearchParams(newLocation.search);
      setQueryParameters(params);
      setQueryString(params.toString());
    });
    return () => {
      off();
    };
  }, [history]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setQueryParameters(params);
    setQueryString(params.toString());
  }, [location.search]);

  useEffect(() => {
    history.replace({
      search: `?${queryString}`,
    });
  }, [history, queryString]);

  const setQueryParameter = useCallback((key, value) => {
    setQueryParameters(q => {
      if (value === null) {
        q.delete(key);
      } else if (q.has(key)) {
        q.set(key, value);
      } else {
        q.append(key, value);
      }
      setQueryString(q.toString());
      return q;
    });
  }, []);

  return (
    <QueryStringContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ queryString, getQueryParameter, setQueryParameter }}
    >
      {children}
    </QueryStringContext.Provider>
  );
};

const useQueryString = (): QueryStringData => {
  return useContext(QueryStringContext);
};

export { QueryStringProvider, useQueryString };
