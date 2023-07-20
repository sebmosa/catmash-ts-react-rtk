export const getRandomCompetitors = <T>(competitors: T[]): T[] => {
  const randomCompetitors = [...competitors]
  // Fisher–Yates algorithm
  for (let i = randomCompetitors.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[randomCompetitors[i], randomCompetitors[randomIndex]] = [
      randomCompetitors[randomIndex],
      randomCompetitors[i],
    ]
  }
  return randomCompetitors.slice(0, 2)
}
