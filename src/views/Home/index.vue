<template>
    <div>
        <TypeNav />
        <ListContainer />
        <TodayRecommend />
        <GoodsRank />
        <GuessYouLike />
        <TheFloor v-for="(floor, index) in floorList" :key="floor.id" :floorList="floor"/>
        <TheBrand />
    </div>
</template>

<script>
import TypeNav from '@/components/TypeNav'
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import GoodsRank from './GoodsRank'
import GuessYouLike from './GuessYouLike'
import TheFloor from './TheFloor'
import TheBrand from './TheBrand'
import { mapState } from 'vuex'

export default {
    name: 'home',
    components: {
        TypeNav,
        ListContainer,
        TodayRecommend,
        GoodsRank,
        GuessYouLike,
        TheFloor,
        TheBrand,
    },
    computed: {
        ...mapState({
            floorList: state => state.home.floorList,
        })
    },
    mounted() {
        this.$store.dispatch("getFloorList"); // 获取 TheFloor 组件所需的楼层数据
    }
}
</script>

<style scoped lang="less">
</style>