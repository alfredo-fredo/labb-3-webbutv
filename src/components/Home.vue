<template>
  <div>
    <router-link :to="{name: 'DataView'}">
    <input type="button" value="Fetch Covid-19 Data" />
    </router-link>
    <br>
    <br>
    <label for="checkbox">{{ 'New covid data ' }}</label>
    <input type="checkbox" id="checkbox" v-model="checked" @click="updateCheck(!checked)">
  </div>
</template>

<script>

export default {
  data () {
    return { checked: this.$store.state.dataPeriodNew }
  },
  methods: {
    updateCheck (value) {
      this.$store.commit('updateDataPeriod', value)
      console.log('Now ' + value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
