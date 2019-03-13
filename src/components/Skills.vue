<template>
  <v-card flat>
    <v-card-text>
      <h1>Skills</h1>
      <v-layout row wrap>
        <v-flex xs2 v-for="skill in skills" :key="skill.name" pa-2>
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="white mx-auto"
            >
              <v-img
                :aspect-ratio="1"
                :src="skill.logo"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-out-fast-in blue darken-2 v-card--reveal title white--text"
                    style="height: 100%;"
                  >
                    {{ skill.name }}
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      skills: [
        {
          name: 'Vue.js',
          logo: require('@/assets/vue.png')
        },
        {
          name: 'React',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png'
        }
      ]
    }
  }
}
</script>

<style scoped src="@/assets/css/components/skills.css" />
