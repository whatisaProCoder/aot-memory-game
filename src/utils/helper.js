function generateRandom(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start)
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function extractCharactersInfo(apiJSON) {
  let characterInfo = []
  apiJSON.results.forEach(character => {
    if (character.img !== undefined)
      characterInfo.push({
        id: character.id, name: character.name, img: character.img.substring(0, character.img.indexOf("png")) +
          "png"
      })
  });
  return characterInfo;
}

export { generateRandom, shuffleArray, extractCharactersInfo }