<template>
  <div>Hello: {{this.title}}</div>
</template>

<script>

import Vuex, { mapState } from 'vuex';
import Vue from 'vue';

import store from '../store/store';

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
