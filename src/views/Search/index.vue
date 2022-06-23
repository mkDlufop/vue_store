<template>
    <div>
        搜索
        {{ keyword }}
        {{ $route.query.keyword }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: this.$route.params.keyword,
        }
    }
}
</script>

<style lang="less">
</style>