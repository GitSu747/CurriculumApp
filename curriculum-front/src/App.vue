<template>
  <div id="app">
    <v-app>
      <v-toolbar class="app-toolbar-container">
        <v-toolbar-title> The Curriculum App!!!</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text href="#/">
          Home
        </v-btn>
        <v-btn text href="#/upsert/curriculum">
          Create
        </v-btn>
      </v-toolbar>
      <!--<v-app-bar app
                 dark>
        <router-link to="/">Home</router-link> |
        <router-link to="/upsert/curriculum"> Home Curriculum </router-link> |
        <router-link to="/curriculum"> Curriculum</router-link> |
        This is the app page.
      </v-app-bar>-->
      <v-content>
        <v-container>
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
