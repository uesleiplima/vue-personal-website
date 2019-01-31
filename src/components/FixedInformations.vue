<template>
  <div>
    <div class="container-image-profile gradient">
      <img src="@/assets/logo.png" class="image-profile" alt="Me :)">
    </div>
    <div class="text-xs-center">
      <v-menu top transition="scale-transition">
        <v-btn
          slot="activator"
          flat
        >
          <img :src="localeSelected.flag" class="locale-flag">
          <v-icon small>mdi-arrow-down</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile
            v-for="(item, i) in languages"
            :key="i"
            @click="changeLocale(item.locale)"
          >
            <v-list-tile-title class="text-xs-center">
              <img :src="item.flag" />
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
    <!-- <div class="display-1 text-xs-center">Ueslei Pereira de Lima</div> -->
    <!-- <div class="title text-xs-center">{{ $t('analystDeveloper') }}</div> -->
  </div>
</template>

<script>
import i18n from '@/i18n'

export default {
  name: 'FixedInformations',
  computed: {
    localeSelected () {
      let language = null
      this.languages.forEach((lang) => {
        if (lang.locale === i18n.locale) {
          language = lang
        }
      })
      return language
    }
  },
  data () {
    return {
      languages: [
        {
          flag: 'https://www.countryflags.io/br/flat/32.png',
          locale: 'pt'
        },
        {
          flag: 'https://www.countryflags.io/us/flat/32.png',
          locale: 'en'
        }
      ]
    }
  },
  methods: {
    changeLocale (locale = 'pt') {
      this.languages.forEach((lang) => {
        if (lang.locale === locale) {
          i18n.locale = lang.locale
        }
      })
    }
  }
}
</script>

<style scoped src="@/assets/css/components/fixed-informations.css" />
