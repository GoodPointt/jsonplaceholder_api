const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function getData(param) {
  try {
    const response = await fetch(`${BASE_URL}/${param}`);
    if (!response.ok) {
      const errorAnswer =
        response.statusText === "" ? response.status : response.statusText;
      throw new Error(errorAnswer);
    }
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}
