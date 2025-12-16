function setBestScores(levelID, bestScore) {
  const bestScores = getBestScores();
  if (bestScores !== undefined) {
    bestScores.scores.filter(scoreObject => scoreObject.levelID === levelID)[0].score = bestScore
    console.log(bestScores)
    localStorage.setItem("best-scores", JSON.stringify(bestScores))
  }
}

function getBestScores() {
  const data = localStorage.getItem("best-scores");
  return data ? JSON.parse(data) : null;
}

function initialiseScoreObject() {
  if (getBestScores() === null)
    localStorage.setItem("best-scores", JSON.stringify({
      scores: [
        { levelID: 0, score: 0 },
        { levelID: 1, score: 0 },
        { levelID: 2, score: 0 }
      ]
    }))
}

function Storage() {
  return { setBestScores, getBestScores, initialiseScoreObject }
}

export default Storage