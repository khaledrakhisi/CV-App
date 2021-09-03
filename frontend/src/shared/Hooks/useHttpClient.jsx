import { useCallback, useEffect, useRef, useState } from "react";

function useHttpClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (Url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);
      try {
        const response = await fetch(Url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();
        //   console.log(responseData);

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          throw new Error(responseData.msg);
        }

        setIsLoading(false);
        //   console.log(responseData);
        return responseData;
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setErrorMessage(
          err.message || "An Error Happend.Please check the console log."
        );
        throw err;
      }
    }, []);
  //   sendReuest();

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((item) => item.abort());
    };
  }, []);

  const clearError = () => {
    setErrorMessage(null);
  };

  return { isLoading, errorMessage, sendRequest, clearError };
}

export default useHttpClient;
