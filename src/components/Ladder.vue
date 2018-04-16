<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr @click="goToTeam(props.item.id)" :style="{cursor: 'pointer'}">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.position }}</td>
          <td>{{ props.item.played }}</td>
          <td>{{ props.item.wins }}</td>
          <td>{{ props.item.draws }}</td>
          <td>{{ props.item.losses }}</td>
        </tr>
      </template>
    </v-data-table>
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
      api.getLadder().then(res => {
        this.items = res
      })
    }
  },
  created () {
    this.fetch()
  },
  data () {
    return {
      drawer: true,
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Pos',
          value: 'position'
        },
        {
          text: 'Played',
          value: 'played'
        },
        {
          text: 'Wins',
          value: 'wins'
        },
        {
          text: 'Draws',
          value: 'draws'
        },
        {
          text: 'Losses',
          value: 'losses'
        }
      ],
      items: []
    }
  }
}
</script>

