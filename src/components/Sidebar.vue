<template>
    <div class="sidebar">
        <h1>ESI status</h1>
        <ul>
            <li v-for="tag in statusDataTags" :key="tag.index" @click="setFilter(tag)" :class="{ active: isActiveFilter(tag) }" style="cursor:pointer">{{ tag }}</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'sidebar',
    computed: {
      statusDataTags () {
        let _tags = []
        this.$store.getters.getEsiStatus.forEach(function (status) {
          status.tags.forEach(function (tag) {
            if (_tags.indexOf(tag) === -1) {
              _tags.push(tag)
            }
          })
        })

        return _tags.sort()
      }
    },
    methods: {
      setFilter (tag) {
        this.$store.commit('set_filter', tag)
      },
      isActiveFilter (filter) {
        return this.$store.getters.getTagFilter === filter
      }
    }
  }
</script>

<style scoped>
    .sidebar {
        background-color: #4f4f4f;
        grid-area: sidebar;
        height: 100%;
    }

    .active {
        color: hotpink;
    }
</style>
