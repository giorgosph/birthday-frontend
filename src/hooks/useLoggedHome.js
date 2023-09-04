import { useEffect } from 'react';

import useApi from './useApi';
import { GET_DATES_EP, WISH_EP } from '../utils/url';

const useLoggedHome = () => {
  const { handleCall, loading, data, error } = useApi();

  const getBirthDates = async () => await handleCall("get", GET_DATES_EP);

  const sendWish = async (name) => {
    // animation
    await handleCall("get", `${WISH_EP}${name}`);
  }

  useEffect(() => {
    getBirthDates();
  }, []);
  
  return { sendWish, response: { error, data, loading } }
}

export default useLoggedHome;