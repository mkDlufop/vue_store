<template>
    <div>
        <TypeNav />
    </div>
</template>

<script>
import TypeNav from '@/components/TypeNav';

export default {
    name: 'search',
    components: {
        TypeNav,
    },
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