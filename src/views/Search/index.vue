<template>
    <div>
        搜索
        {{ keyword }}
        {{ $route.query.keyword }}
        {{ $route.query.categoryName + ' ' }}
        {{ $route.query.category1Id + ' ' +
            $route.query.category2Id + ' ' +
            $route.query.category3Id
        }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: this.$route.params.keyword,
            categoryName: this.$route.query.categoryName,
            category1Id: this.$route.query.category1Id,
            category2Id: this.$route.query.category2Id,
            category3Id: this.$route.query.category3Id,
        }
    }
}
</script>

<style lang="less">
</style>