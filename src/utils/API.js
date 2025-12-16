const minPageNumber = 1
const maxPageNumber = 11

function getCharacterEndpointJSON(pageNumber) {
  return new Promise((resolve, reject) => {
    if (pageNumber < 0 || pageNumber > 11)
      reject("Invalid Page Number")
    fetch(
      `https://api.attackontitanapi.com/characters?page=${pageNumber}`,
      { mode: "cors" }
    ).then(response => {
      if (response.status == 400) {
        reject("Cannot access API endpoint.")
      } else {
        return response.json();
      }
    }).then(json => {
      resolve(json)
    }).catch(error => {
      reject(error)
    })
  })
}

export { minPageNumber, maxPageNumber, getCharacterEndpointJSON };