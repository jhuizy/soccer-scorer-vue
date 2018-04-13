<template>
  <v-container>
    <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>alarm</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-spacer></v-spacer>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <div>{{ item.time }}</div>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.fixture"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-container>
</template>

<script>
import api from '../service/api'

export default {
  methods: {
    goToTeam (id) {
      this.$router.push({name: 'team', params: { id: id }})
    },
    fetch () {
      api.getFixtures(new Date()).then(res => {
        this.items = res.games.map(game => {
          return {
            time: game.time,
            fixture: `${game.home.name} vs ${game.away.name}`
          }
        })
      })
    }
  },
  created () {
    this.fetch()
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

