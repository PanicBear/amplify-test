import { useState } from 'react';

interface UseMutationState<T> {
  isLoading: boolean;
  data?: T;
  error?: object;
}

export default function useMutation<T = any>(url: string): [(data: any) => void, UseMutationState<T>] {
  const [state, setState] = useState<UseMutationState<T>>({
    isLoading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setState((prev) => {
      return {
        ...prev,
        isLoading: true,
      };
    });
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) =>
        setState((prev) => {
          return {
            ...prev,
            data,
          };
        }),
      )
      .catch((error) =>
        setState((prev) => {
          return { ...prev, error };
        }),
      )
      .finally(() => {
        setState((prev) => {
          return {
            ...prev,
            isLoading: false,
          };
        });
      });
  }
  return [mutation, state];
}
