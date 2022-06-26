<template>
    <div>
        <TypeNav />
        <ListContainer />
        <TodayRecommend />
        <GoodsRank />
        <GuessYouLike />
        <TheFloor />
        <TheFloor />
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

export default {
    components: {
        TypeNav,
        ListContainer,
        TodayRecommend,
        GoodsRank,
        GuessYouLike,
        TheFloor,
        TheBrand,
    },
}
</script>

<style scoped lang="less">
</style>