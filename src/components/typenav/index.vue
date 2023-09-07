<template>
  <div>
    <!-- nav模塊製作 -->
    <nav class="nav">
      <div class="w">
        <div class="dropdown" @mouseleave="leaveIndex" @mouseenter="drop">
          <div class="dt">全部商品分類</div>
          <!-- 過度動畫 -->
          <transition name="sort">
            <div class="sort" v-show="show">
              <div class="all-sort-list2" @click="goSearch">
                <div
                  class="item"
                  v-for="(c1, index) in categoryList"
                  :key="c1.categoryID"
                  :class="{ cur: currentIndex == index }"
                >
                  <h3 @mouseenter="changeIndex(index)">
                    <a
                      :data-categoryname="c1.categoryName"
                      :data-category1id="c1.categoryId"
                      >{{ c1.categoryName }}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </transition>

        </div>
        <div class="navitems">
          <ul class="navitem-ul">
            <li>
              <a href="#">上衣</a>
              <ul>
                <li><a href="#">男裝</a></li>
                <li><a href="#">女裝</a></li>
                <li><a href="#">童裝</a></li>
              </ul>
            </li>
            <li>
              <a href="#">褲子</a>
              <ul>
                <li><a href="#">男裝</a></li>
                <li><a href="#">女裝</a></li>
                <li><a href="#">童裝</a></li>
              </ul>
            </li>
            <li>
              <a href="#">外套</a>
              <ul>
                <li><a href="#">男裝</a></li>
                <li><a href="#">女裝</a></li>
                <li><a href="#">童裝</a></li>
              </ul>
            </li>
            <li>
              <a href="#">配件</a>
              <ul>
                <li><a href="#">男裝</a></li>
                <li><a href="#">女裝</a></li>
                <li><a href="#">童裝</a></li>
              </ul>
            </li>
            <li>
              <a href="#">居家</a>
              <ul>
                <li><a href="#">男裝</a></li>
                <li><a href="#">女裝</a></li>
                <li><a href="#">童裝</a></li>
              </ul>
            </li>
            <li>
              <a href="#">帽子</a>
              <ul>
                <li><a href="#">男裝</a></li>
                <li><a href="#">女裝</a></li>
                <li><a href="#">童裝</a></li>
              </ul>
            </li>
            <li>
              <a href="#">鞋子</a>
              <ul>
                <li><a href="#">男裝</a></li>
                <li><a href="#">女裝</a></li>
                <li><a href="#">童裝</a></li>
              </ul>
            </li>
            <li>
              <a href="#">其他</a>
              <ul>
                <li><a href="#">男裝</a></li>
                <li><a href="#">女裝</a></li>
                <li><a href="#">童裝</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- nav模塊製作結束 end -->
  </div>
</template>

<script>
import { mapState } from "vuex";
//引入方式:是把lodash全部函數引入
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true,
    };
  },
  //組件掛載完畢，可以項服務器請求
  mounted() {
    //通知vuex發請求，獲取數據，儲存於倉庫中
    // this.$store.dispatch("categoryList");
    //使用組件掛載，來判斷當前頁面，用以決定是否顯示下拉選單
    if (this.$route.path != "/Home") {
      this.show = true;
    }
  },
  computed: {
    ...mapState({
      //右側需要的是一個函數，當使用這個計算屬性時，右側函數會立即執行一次
      //這任一個參數state，其實即為大倉庫的數據
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    //鼠標進入修改響應式數組
    // changeIndex(index){
    //     //index:鼠標移上某一個元素的索引值
    //     this.currentIndex = index
    // },
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    //鼠標移除事件
    leaveIndex() {
      if (this.$route.path != "/Home") {
        this.show = false;
        this.currentIndex = -1;
      }
    },
    goSearch(e) {
      // this.$router.push('/Search')
      //在a標籤，加上自訂義屬性data-categoryName，其餘子節點是沒有的(h3、div)
      //節點有一個dataset屬性，可以獲取節點自訂義屬性與屬性值
      let { categoryname, category1id } = e.target.dataset;
      //如果標籤上有categoryName一定是a標籤
      if (categoryname) {
        let location = { name: "Search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        }
        //判斷:如果路由跳轉的時候，帶有params參數，一併傳過去
        if(this.$route.params){
          location.params = this.$route.params
          location.query = query;
          this.$router.push(location);
        }
      }
    },
    drop() {
      this.show = true;
    },
  },
};
</script>

<style >
.w {
  width: 1200px;
  margin: 0 auto;
}
.main {
  width: 980px;
  height: 455px;
  margin-left: 220px;
  margin-top: 10px;
}

nav {
  height: 47px;
  border-bottom: 2px solid red;
}
.dropdown {
  float: left;
  width: 210px;
  height: 45px;
  background-color: red;
}

.dropdown:hover .sort {
  display: block;
 
}

.dropdown .dt {
  width: 100%;
  height: 100%;
  color: aliceblue;
  text-align: center;
  line-height: 45px;
  font-size: 16px;
  cursor: pointer;
}

.dropdown .dd {
  width: 210px;
  padding: 15px 5px 93px 15px;
  background-color: rgb(228, 227, 227);
  margin-top: 12px;
}

.dropdown .dd ul li {
  position: relative;
  height: 31px;
  line-height: 31px;
  margin-left: 2px;
  padding-left: 10px;
  background-color: rgb(238, 234, 234);
}


.dropdown .dd ul li a {
  font-style: 14px;
  color: #000;
}

.navitems .navitem-ul {
  display: flex;
  position: relative;
}

.navitems .navitem-ul li:hover {
  z-index: 2;
  background-color: rgb(238, 238, 238);
  transition: all 0.2s;
}

.navitems .navitem-ul li a {
  height: 45px;
  line-height: 45px;
  padding: 0 25px;
}

.navitems .navitem-ul ul {
  background-color: #fff;
  display: none;
}


.item {
  padding: 5px;
}
.item h3{
  cursor: pointer;

}
.cur {
  background-color: skyblue;
}
.sort {
  background-color: rgb(230, 229, 229);
  padding: 12px 5px;
  padding-bottom: 13px;
  overflow: hidden;
  z-index: 999;
  position: relative;
}
/* 過度動畫樣式 */

.sort-enter-active{
    animation: block .3s linear;
}

.sort-leave-active{
    animation: block .3s reverse linear;
}
    @keyframes block {
        0%{
          height: 0px;

        }
        100%{
          height: 461px;
      
        }
    }
</style>