<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    let _this = this

    let request = new XMLHttpRequest()
    request.open('GET', 'https://gist.githubusercontent.com/a-tal/6c728bf9189a791a81e054f66119fedf/raw/d9e45e5b2939545f78fe50e7c2406f0f90ee3d4f/status.json', true)

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        _this.$store.commit('set_esi_status', JSON.parse(request.responseText))
      } else {
        // We reached our target server, but it returned an error
        _this.showError = true
      }
    }

    request.onerror = function () {
      // There was a connection error of some sort
      _this.showError = true
    }

    request.send()
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
  }
</style>
