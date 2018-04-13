
export default {

  getFixtures () {
    return Promise.resolve([
      {

      }
    ])
  },

  getLadder () {
    return Promise.resolve([
      {
        id: 1,
        name: 'Moose FC',
        position: 1,
        played: 2,
        wins: 1,
        losses: 1,
        draws: 0
      },
      {
        id: 2,
        name: 'Moose #2',
        position: 2,
        played: 1,
        wins: 0,
        losses: 1,
        draws: 0
      }
    ])
  }

}
