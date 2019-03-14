<template>
  <v-card flat>
    <v-card-text>
      <div v-for="category in categories" :key="category.name">
        <h1>{{ $t(category.name) }}</h1>
        <v-layout row wrap>
          <v-flex xs2 v-for="skill in category.skills" :key="skill.name" pa-2>
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
                      <center>{{ skill.name }}</center>
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
      </div>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
      categories: [
        {
          name: 'languagesAndTechnologies',
          skills: [
            {
              name: 'PHP',
              logo: 'https://ih0.redbubble.net/image.541875989.4233/flat,550x550,075,f.jpg'
            },
            {
              name: 'JavaScript',
              logo: 'https://bognarjunior.files.wordpress.com/2018/01/1crcyaithv7aiqh1z93v99q.png?w=256'
            },
            {
              name: 'HTML5',
              logo: 'https://img.icons8.com/color/260/html-5.png'
            },
            {
              name: 'CSS3',
              logo: 'https://icons-for-free.com/free-icons/svg/128/1313568.svg'
            },
            {
              name: 'Java',
              logo: 'https://img.ibxk.com.br/2013/10/16/16170722149.jpg'
            },
            {
              name: 'Node.js',
              logo: 'https://d33wubrfki0l68.cloudfront.net/473fea1000dee632d1fd2fd7724feb81c5f4cebd/59f56/images/posts/nodejs.png'
            }
          ]
        },
        {
          name: 'frameworks',
          skills: [
            {
              name: 'Vue.js',
              logo: require('@/assets/vue.png')
            },
            {
              name: 'React',
              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png'
            },
            {
              name: 'Laravel',
              logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtPkiuaLOOht9Y_gIHSmwJYqRO-nOUO5nExtILgBX8OViwLzMd'
            },

            {
              name: 'Zend Framework 2',
              logo: 'https://sumitghosh.co.in/wp-content/uploads/2012/11/Zend-Framework-2.o.png'
            }
          ]
        },
        {
          name: 'databases',
          skills: [
            {
              name: 'PostgreSQL',
              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
            },
            {
              name: 'ElasticSearch',
              logo: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1489699793/elasticsearch.png'
            },
            {
              name: 'MySQL',
              logo: 'https://i2.wp.com/elias.praciano.com/wp-content/uploads/2015/07/mysql-featured-dolphin-blue-white-300x200.png?resize=300%2C200&ssl=1'
            },
            {
              name: 'Redis',
              logo: 'https://cdn.auth0.com/blog/logos/redis-icon-logo.png'
            },
            {
              name: 'MongoDB',
              logo: 'https://i.dlpng.com/static/png/359589_preview.png'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped src="@/assets/css/components/skills.css" />
