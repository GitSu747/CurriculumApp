<template>
  <v-row class="home-container">
    <v-col cols="12"
           sm="8"
           offset-sm="2"
           md="6"
           offset-md="3">
      <div class="home-header-div">
        <h1>All Curriculum</h1>
        <v-btn>Create New</v-btn>
      </div>
      <div class="home-card-div" v-for="curriculum in projectData" :key="curriculum.id" >
        <v-card v-if="curriculum.id !== null" >
          <v-card-title > <router-link :to="`/curriculum/${curriculum.id}`">{{ curriculum.name }} </router-link></v-card-title>
          <v-card-text > {{ curriculum.description }}</v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return { }
  },
  computed: {
    ...mapState([
      'projectData'
    ])
  }
}
</script>
