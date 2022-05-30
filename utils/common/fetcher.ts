import { API_URL } from '@constants/index';

interface FetcherProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  token?: string;
  options?: RequestInit;
}

const fetcher: (props: FetcherProps) => Promise<any> = async ({ method, url, token, options }) => {
  const data = await fetch(API_URL + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  })
    .then((response) => response.json())
    .catch(console.error);
  return data;
};

export default fetcher;
