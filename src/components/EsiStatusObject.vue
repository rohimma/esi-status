<template>
    <div class="esi-status-object-grid">
        <div class="esi-status-object-grid-item">
            {{ data.endpoint }} <br />
            {{ data.method }} <br />
            {{ data.route }} <br />
            <span :class="data.status">{{ data.status }}</span><br />
            <span v-for="tag in data.tags">{{ tag }}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'esi-status-object',
    props: ['data']
  }
</script>

<style scoped>
    .esi-status-object-grid {
        display: grid;
        justify-content: center;
    }

    .esi-status-object-grid-item {
        width: 450px;
        border: 1px solid hotpink;
    }
</style>
