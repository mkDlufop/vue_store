<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 在以下三级联动中使用事件委托 -->
      <div @mouseleave="resetIndex" @mouseenter="enterAll">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="sortShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ current: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <!-- 二级、三级分类 -->
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.catogoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.catogoryId"
                        >
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

// 引入lodash的节流函数throttle
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      sortShow: true,
    };
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    changeIndex: throttle(function (index) {
      // 分析用户划过一级分类：
      // （index：鼠标移上某一个一级分类的元素的索引值）
      // - 用户慢慢操作：鼠标进入每一个一级分类 h3，都会触发鼠标进入事件。
      // - 用户快速划过：本身全部的一级都应该触发鼠标进入事件，但是经过测试，只有部分 h3
      //    触发了。
      // 这是因为用户行为过快，导致浏览器反应不过来。如果当前回调函数中有大量业务，有可能
      // 出现卡顿现象。这里可以使用节流来解决卡顿的问题。
      //
      // 防抖：前面的所有触发都被取消，只有最后一次触发会被执行，且最后一次触发是在规定的时间
      //     之后才会被执行。
      //     例子：搜索框中输入文字，在最后一个字符输入完成后再等一段时间才发送 ajax 请求。
      // 节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁
      //     触发变为少量触发。
      //     例子：快速点击轮播图的按钮，但规定它 1s 内只切换一次。
      this.currentIndex = index;
    }, 50),
    resetIndex() {
      this.currentIndex = -1;
      if (
        this.$route.path.indexOf("/search") != -1 ||
        this.$route.path.indexOf("/detail") != -1
      )
        this.sortShow = false;
    },
    goSearch(event) {
      // 业务：携带参数跳转到搜索页
      //      为什么不用声明式导航？
      //          <router-link>是一个组件，当服务器数据返回后，页面会循环出很多个组件，
      //          一瞬间创建很多个组件实例很耗内存，因此很容易造成卡顿现象。
      //      为什么不给<a>绑定点击事件？
      //          给每一个<a>都绑定一个点击事件，页面会出现很多回调函数。使用事件委派就
      //          只用给最外层的<div>绑定一个点击事件。但使用事件委派有两个问题：
      //              1，点击事件触发的时候分不清是哪个标签触发的；
      //              2，回调里面怎么拿到不同的categoryId。
      //          这时使用自定义属性可以解决上述的问题。
      // 解决方案：编程式导航+事件委派+html标签自定义属性
      let element = event.target;
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      let location = { name: "search" };
      let query = { categoryName: categoryname };
      if (categoryname) {
        if (category1id) query.category1Id = category1id;
        else if (category2id) query.category2Id = category2id;
        else query.category3Id = category3id;
        location.query = query;
        location.params = this.$route.params;
        this.$router.push(location);
      }
    },
    enterAll() {
      this.sortShow = true;
    },
  },
  mounted() {
    if (
      this.$route.path.indexOf("/search") != -1 ||
      this.$route.path.indexOf("/detail") != -1
    )
      this.sortShow = false;
  },
};
</script>

<style lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // 控制二三级分类的显示与隐藏
          // &:hover {
          //     .item-list {
          //         display: block;
          //     }
          // }
        }
        .current {
          background: skyblue;
        }
        // css实现商品一级分类动态添加背景颜色
        // .item:hover{
        // background: skyblue;
        // }
      }
    }
    // 过渡动画的样式
    // 过渡动画开始状态
    .sort-enter {
      height: 0px;
    }
    // 过渡动画结束状态
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>