<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
        <template slot="items" slot-scope="props">
          <tr @click="goToTeam(props.item.name)">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.position }}</td>
          <td class="text-xs-right">{{ props.item.played }}</td>
          <td class="text-xs-right">{{ props.item.wins }}</td>
          <td class="text-xs-right">{{ props.item.draws }}</td>
          <td class="text-xs-right">{{ props.item.losses }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
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
        
      ],
      items: [
        {
          name: 'Moose FC',
          position: 1,
          played: 2,
          wins: 1,
          losses: 1,
          draws: 0
        }
      ]
    }
  }
}
</script>

