export const fetchJSONPlaceholder = async (endpoint: string) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);

    const users = await response.json();

    return users;
  } catch (error) {
    console.error(error);
  }
};
