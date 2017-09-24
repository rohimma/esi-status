<template>
  <div class="status-grid">
    <esi-status-object v-for="status in statusData" :data="status" :key="status.index"></esi-status-object>
  </div>
</template>

<script>
  import EsiStatusObject from './EsiStatusObject'

  export default {
    components: {EsiStatusObject},
    name: 'esi-status-grid',
    computed: {
      statusData () {
        return this.$store.getters.getEsiStatusFiltered
      }
    }
  }
</script>

<style scoped>
  .status-grid {
    grid-area: status-grid;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, auto));
    grid-auto-rows: 110px;
    width: 100%;

    overflow: visible;
  }
</style>
