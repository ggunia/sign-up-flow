import { useMutation } from "@tanstack/react-query"

export const useSignUpService = () => {
  const mutation = useMutation((body: any) => fetch('/api/sign-up', {
    method: 'POST',
    body
  }).then(response => response.blob()))

  return mutation
}
