import { useMutation } from "@tanstack/react-query"

export const useSignUpService = () => {
  const mutation = useMutation((body: any) => fetch('/api/sign-up', {
    method: 'POST',
    body
  })
    .then(response => response.json())
    .then((data) => {
      const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(data)
      )}`;
      const link = document.createElement("a");
      link.href = jsonString;
      link.download = "data.json";

      link.click();
      return Promise.resolve()
    }))

  return mutation
}
