<template>
    <div class="status-page">
        <sidebar></sidebar>
        <general-status></general-status>
        <esi-status-grid></esi-status-grid>
    </div>
</template>

<script>
  import EsiStatusGrid from './EsiStatusGrid'
  import Sidebar from './Sidebar'
  import GeneralStatus from './GeneralStatus'

  export default {
    components: {
      GeneralStatus,
      Sidebar,
      EsiStatusGrid
    },
    name: 'esi-status'
  }
</script>

<style scoped>
    .status-page {
        display: grid;

        grid-template-columns: 250px 1fr;
        grid-template-rows: auto 1fr;

        grid-template-areas:
                "sidebar general-status"
                "sidebar status-grid";

        width: 100%;
        height: 100%;
        position: fixed;
    }
</style>
