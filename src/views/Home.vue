<template>
  <div>
    <v-tabs
      v-model="active"
      dark
      slider-color="blue"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab"
        ripple
      >
        {{ $t(tab) }}
      </v-tab>
      <v-tab-item v-for="tab in tabs" :key="tab">
        <component :is="`tab-${tab}`" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'

export default {
  name: 'home',
  components: {
    'tab-about': About,
    'tab-skills': Skills,
    'tab-projects': Projects,
    'tab-experience': Experience
  },
  data () {
    return {
      active: 0,
      tabs: [
        'skills',
        'about',
        'projects',
        'experience'
      ]
    }
  }
}
</script>
