function generateRandom(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start)
}

function shuffleArray(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function extractCharactersInfo(apiJSON) {
  let characterInfo = []
  apiJSON.results.forEach(character => {
    if (character.img !== null || character.img !== undefined)
      characterInfo.push({
        id: character.id, name: character.name, img: character.img.substring(0, character.img.indexOf("png")) +
          "png"
      })
  });
  return characterInfo;
}

export { generateRandom, shuffleArray, extractCharactersInfo }