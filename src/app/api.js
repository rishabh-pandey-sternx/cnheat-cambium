
export const mockFetchData = () => {
const response =	fetch('https://cnheat.cambiumnetworks.com/accounts/images/images.json')
  .then(response => response.json())
  .then(data => console.log(data)).catch(e => console.log(e));
  console.log( response, "eee")
  return response;
};
