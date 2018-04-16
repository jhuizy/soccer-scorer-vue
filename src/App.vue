<template>
  <v-app>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.xsOnly"
      persistent
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile>
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon v-html="menu"></v-icon>
          </v-btn>
        </v-list-tile>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.route"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="true"
      :extended="!$vuetify.breakpoint.xsOnly"
    >
      <v-toolbar-side-icon
        v-if="$vuetify.breakpoint.xsOnly"
        @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-btn
        v-if="!$vuetify.breakpoint.xsOnly"
        slot="extension"
        v-for="(item, i) in items"
        :key="i"
        @click="$router.push(item.route)"
        flat
        class="ma-0 pa-0 center"
      >
        {{ item.title }}
        <v-icon v-html="item.icon" right></v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Jordan Huizenga</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        {
          icon: 'today',
          title: 'Fixtures',
          route: '/fixtures'
        },
        {
          icon: 'list',
          title: 'Ladder',
          route: '/ladder'
        }
      ],
      miniVariant: false,
      title: 'Byford Indoor Sports'
    }
  },
  name: 'App'
}
</script>
