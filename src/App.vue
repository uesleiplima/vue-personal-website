<template>
  <v-app dark>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex xs4>
            <fixed-informations />
          </v-flex>
          <v-flex xs6>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
const FixedInformations = () => import(/* webpackChunkName: "FixedInformations" */'@/components/FixedInformations')

export default {
  name: 'App',
  components: {
    FixedInformations
  }
}
</script>
