<template>
    <div class="general-status">
        <span v-for="type in statusTypes" :key="type.index" @click="setStatusFilter(type)" :class="{active: isActiveFilter(type)}">{{ type }} - {{ getStatusAmount(type) }}</span>
    </div>
</template>

<script>
  export default {
    name: 'general-status',
    computed: {
      generalStatus () {
        return this.$store.getters.getGeneralStatus
      },
      statusTypes () {
        return this.generalStatus.filter((value, index, self) => {
          return self.indexOf(value) === index
        })
      }
    },
    methods: {
      getStatusAmount (type) {
        return this.generalStatus.filter((_type) => {
          return _type === type
        }).length
      },
      setStatusFilter (type) {
        console.log(type)
        this.$store.commit('set_status_filter', type)
      },
      isActiveFilter (filter) {
        return this.$store.getters.getStatusFilter === filter
      }
    }
  }
</script>

<style scoped>
    .general-status {
        grid-area: general-status;
        background-color: #909090;
        display: grid;
        justify-content: center;
    }

    .active {
        color: greenyellow;
    }
</style>
