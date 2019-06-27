<template>
  <div>Map</div>
</template>

<script>

import Vuex, { mapState } from 'vuex';
import Vue from 'vue';
import Vuetify from 'vuetify'

import store from '../store/store';
import 'vuetify/dist/vuetify.min.css';

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default {
  computed: {
    ...mapState({
      title: state => state.title
    })
  },
  store: store
}
</script>

<style>

</style>
