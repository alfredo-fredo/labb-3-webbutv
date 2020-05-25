<template>
  <div>
    <ul v-if="newData">
      <li v-for="item in countryData" :key="item.Country">
        <h3>
          {{ item.Country }}
        </h3>
        <h4>
          {{ 'New cases ' + item.NewConfirmed }}
        </h4>
        <h4>
          {{ 'New deaths ' + item.NewDeaths }}
        </h4>
      </li>
    </ul>

    <ul v-else>
      <li v-for="item in countryData" :key="item.Country">
        <h3>
          {{ item.Country }}
        </h3>
        <h4>
          {{ 'Total cases ' + item.TotalConfirmed }}
        </h4>
        <h4>
          {{ 'Total deaths ' + item.TotalDeaths }}
        </h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      globalData: null,
      countryData: null,
      newData: this.$store.state.dataPeriodNew
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      var apiAdress = 'https://api.covid19api.com/summary'
      fetch(apiAdress)
        .then(res => {
          if (res.ok) {
            console.log('success')
            return res.json()
          } else {
            console.log('res failed')
            return undefined
          }
        })
        .then(data => {
          this.$data.globalData = data.Global
          this.$data.countryData = data.Countries
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>
