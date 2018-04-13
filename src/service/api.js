export default {

  getFixtures (date) {
    return Promise.resolve({
      round: 4,
      totalRounds: 10,
      date: 'Thursday 27th of February',
      games: [
        {
          time: '6:30',
          home: {
            id: 1,
            name: 'Moose FC'
          },
          away: {
            id: 2,
            name: 'Moose #2'
          }
        },
        {
          time: '7:15',
          home: {
            id: 1,
            name: 'Moose FC'
          },
          away: {
            id: 2,
            name: 'Moose #2'
          }
        }
      ]
    })
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
