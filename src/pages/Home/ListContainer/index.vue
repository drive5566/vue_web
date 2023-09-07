<template>
  <!-- main模塊 -->
  <div class="w">
    <div class="main">
      <div class="focus">

        <Carousel :list="bannerList"/> 

      </div>
      <div class="newsflash">
        <div class="news">
          <div class="news-hd">
            <h5>快報</h5>
            <a href="" class="more">更多</a>
          </div>
          <div class="news-bd">
            <ul>
              <li>
                <a href="#">
                  <strong>[最新]</strong> 他們來了!!他們來了!!他們來了!!</a
                >
              </li>
              <li>
                <a href="#">
                  <strong>[最新]</strong> 他們來了!!他們來了!!他們來了!!</a
                >
              </li>
              <li>
                <a href="#">
                  <strong>[最新]</strong> 他們來了!!他們來了!!他們來了!!</a
                >
              </li>
              <li>
                <a href="#">
                  <strong>[最新]</strong> 他們來了!!他們來了!!他們來了!!</a
                >
              </li>
              <li>
                <a href="#">
                  <strong>[最新]</strong> 他們來了!!他們來了!!他們來了!!</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="lifeservice">
          <ul>
            <li>
              <span class="material-symbols-outlined">favorite</span>
              <p>停車</p>
            </li>
            <li>
              <span class="material-symbols-outlined">call</span>
              <p>話費</p>
            </li>
            <li>
              <span class="material-symbols-outlined">Payments</span>
              <p>水電</p>
            </li>
            <li>
              <span class="material-symbols-outlined">mail</span>
              <p>信箱</p>
            </li>
            <li>
              <span class="material-symbols-outlined">home</span>
              <p>社團</p>
            </li>
            <li>
              <span class="material-symbols-outlined">Tooltip</span>
              <p>八卦</p>
            </li>
            <li>
              <span class="material-symbols-outlined">Feed</span>
              <p>新聞</p>
            </li>
            <li>
              <span class="material-symbols-outlined">Swap_Vert</span>
              <p>股票</p>
            </li>
            <li>
              <span class="material-symbols-outlined">Sunny</span>
              <p>天氣</p>
            </li>
            <li>
              <span class="material-symbols-outlined">Globe</span>
              <p>世界</p>
            </li>
            <li>
              <span class="material-symbols-outlined">map</span>
              <p>地圖</p>
            </li>
            <li>
              <span class="material-symbols-outlined">Full_Coverage</span>
              <p>國際</p>
            </li>
          </ul>
        </div>
        <div class="bargain"><img src="" alt="" /></div>
      </div>
    </div>
  </div>
  <!-- main模塊 end-->
</template>

<script>
import Carousel from '@/components/Carousel'
import { mapState } from "vuex";

export default {
  name: "ListContainer",
  components:{Carousel},
  computed: {
    ...mapState({
      bannerList: (state) => state.home.bannerList,
    }),
  },
  mounted() {
    this.$store.dispatch("getBannerList");
  },


};
</script>

<style  scoped>

.w {
  width: 1200px;
  margin: 0 auto;
}

.main {
  width: 980px;
  height: 455px;
  /* background-color: pink; */
  margin-left: 220px;
  margin-top: 10px;
}

.focus {
  float: left;
  width: 721px;
  height: 455px;
  /* background: url(https://picsum.photos/1442/455/?gravity=east) 0 0; */
  transition: 0.5s;
}
.newsflash {
  float: right;
  width: 250px;
  height: 100%;
  /* background-color: rgb(75, 42, 42); */
}

.news {
  height: 165px;
  /* background-color: pink; */
  border: 1px solid;
}
.lifeservice {
  height: 209px;
  /* background-color: purple; */
  border: 1px solid;
  border-top: 0;
  overflow: hidden;
}
.lifeservice ul li {
  float: left;
  width: 63px;
  height: 71px;
  border-right: 1px solid;
  border-bottom: 1px solid;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.lifeservice ul {
  width: 252px;
  
}
.lifeservice ul li i {
  display: inline-block;
  width: 24px;
  height: 28px;
  margin-top: 12px;
}

.bargain {
  margin-top: 5px;
}

.news .news-hd {
  height: 33px;
  line-height: 33px;
  border-bottom: 1px dotted;
}

.newsflash .news .news-hd h5 {
  float: left;
  margin-left: 15px;
}
.newsflash .news .news-hd .more {
  float: right;
  padding-left: 10px;
  font-size: 14px;
}
.newsflash .news .news-hd .more::after {
  content: ">";
  margin: 0 3px;
}
.newsflash .news .news-bd li {
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.newsflash .news .news-bd {
  margin: 5px 15px 0;
}

.focus {
  width: 700px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.focus .arrow_l {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #000;
  color: #fff;
  padding: 10px;
  display: none;
  border-radius: 0 20px 20px 0;
  z-index: 99;
}

.focus .arrow_r {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  background-color: #000;
  color: #fff;
  padding: 10px;
  display: none;
  border-radius: 20px 0 0 20px;
  z-index: 99;
}

.circle {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 300px;
}

.circle li {
  width: 10px;
  height: 10px;
  border: 1px solid;
  border-radius: 50%;
  margin: 10px;
  background-color: #fff;
}

.focus ul {
  width: 600%;
  position: absolute;
  top: 0;
  left: 0;
}

.focus ul li {
  float: left;
}

.black {
  background-color: #000 !important;
}
.fl .register {
  animation: flashing 1s infinite steps(1);
}
.swiper-slide img {
  width: 700px;

}

.swiper-container {
  --swiper-theme-color: #fff;
  width: 700px;
  height: 455px;
}
</style>