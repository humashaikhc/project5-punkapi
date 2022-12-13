const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = (enquiry) => {
  return fetch(`${API_URL}${enquiry}`)
    .then(response => response.json())
    .then(jsonResponse => {
      return jsonResponse
    })
}