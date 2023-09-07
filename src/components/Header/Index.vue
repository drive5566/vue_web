<template>
<div>
  <div class="wrap">
    <div class="shortcut">
            <div class="w">
                <div class="fl">
                    <ul>
                        <li>商城歡迎你!&nbsp;&nbsp;</li>
                        <li v-show="!userName">
                            <router-link to="/Login">請登入</router-link>&nbsp;
                            <router-link to="/Register">免費註冊</router-link>
                        </li>
                        <li v-show="userName">
                            <a >{{ userName }}</a>
                            <a class="register" @click="logout"> 登出</a>
                        </li>
                    </ul>
                </div>
                <div class="fr">

                    <ul>
                        <li><a href="#">我的訂單</a> </li>
                        <li></li>
                        <li ><a href="#">我的商城</a> </li>
                        <li></li>
                        <li><a href="#">商城會員</a> </li>
                        <li></li>
                        <li><a href="#">企業採購</a> </li>
                        <li></li>
                        <li><a href="#">關注商城</a> </li>
                        <li></li>
                        <li><a href="#">客戶服務</a> </li>
                        <li></li>
                        <li><a href="#">網站導航</a> </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 快捷導航模快結束 end-->

        <!-- header頭部模塊 -->
        <header class="header w">
            <!-- logo模塊 -->
            <div class="logo">
                <!-- logo優化要給h1 裡面給a ，a要寫網頁名稱 -->
                <h1>
                    <router-link to="/Home" title="品優購商城">品優購商城</router-link>
                </h1>
            </div>

            <!-- search搜索模塊 -->
            <div class="search-container">
                <div class="search">
                    <input type="search" placeholder="語言開發" v-model="keyWord">
                    <button @click="GoSearch">搜索</button>
                </div>

                    <div class="hotwrods">
                        <ul>
                            <li><a href="#" class="hotwrods-a">優惠購首發</a></li>
                            <li><a href="#" class="hotwrods-a">億元優惠</a></li>
                            <li><a href="#" class="hotwrods-a">9.9員團購</a></li>
                            <li><a href="#">辦公用品</a></li>
                            <li><a href="#">電腦</a></li>
                            <li><a href="#">電腦</a></li>
                            <li><a href="#">通信</a></li>
                        </ul>
                    </div>
            </div>
            
           

            <div class="shop">
                <router-link to="/shopCar">我的購物車</router-link>
                <i class="num">88</i>
            </div>
        </header>
        <!-- header頭部模塊結束 end -->
  </div>
</div>
</template>

<script>

export default {
    name:'MyHeader',
    data(){
        return{
            keyWord:''
        }
    },
    methods:{
        //搜索按鈕的回調函數，需要項search路由進行跳轉
        GoSearch(){
            //路由傳參
            //第一種 字符串形式
            // this.$router.push('/Search/' +this.keyWord+'?k='+this.keyWord.toUpperCase())
            //第二種 模板字符串
            // this.$router.push(`/Search/${this.keyWord}?k=${this.keyWord.toUpperCase()}`)
            //第三種 對象寫法
            if(this.$route.query){
                this.$router.push({
                    name:'Search',
                    params:{keyWord:this.keyWord},
                    query:this.$route.query
                })
            }
        // *************************************************************************************
            //面試題一 路由傳遞參數(對象寫法)path是否可以結合params參數一起使用
            // 答:路由跳轉傳參的時候，對象寫法可以是name、path形式，但是需要注意的是，path這種寫法不能與params參數一起使用
            // this.$router.push({
            //     path:'/search',
            //     params:{keyWord:this.keyWord},
            //     query:{k:this.keyWord.toUpperCase()}
            // })

            //面試提二 如何指定params參數可傳可不傳
            // 如果路由要求傳遞params參數，但是你就不傳params參數，URL會有問題
            // 如何指定params參數可以傳遞，或者不傳遞，在配置路由的時後，在佔位上的後面加上一個問號
            // this.$router.push({name:'search',query:{k:this.keyWord.toUpperCase()}})

            //面試題三 params參數可以傳遞也可以不傳遞，但如果傳遞是空串，如何解決
            // 使用undefined解決:params參數可以傳遞、不傳遞(空的字符串)
            // this.$router.push({
            //     name:'Search',
            //     params:{keyWord:''|| undefined},
            //     query:{k:this.keyWord.toUpperCase()}
            // })

            // 面試題四 路由組件能不能傳遞props數據
            //可以的:三種寫法
            //     this.$router.push({
            //     name:'Search',
            //     params:{keyWord:this.keyWord},
            //     query:{k:this.keyWord.toUpperCase()}                
            // },()=>{},()=>{})
        },
        async logout(){
            // 發請求、清除數據token
           try {
            await this.$store.dispatch('userLogout');       
            this.$router.push('/Home')
           } catch (error) {
            alert(error)
           }
        }
    },
    computed:{
        userName(){
            return this.$store.state.user.user.name
        }
    },
    mounted(){
        this.$bus.$on('clear',()=>{
            this.keyWord = ''
        }),

        this.$store.dispatch('userInfo')

    }

}
</script>

<style scoped>

/* 板心 */


.w{
    max-width: 1100px;
    margin: 0 auto;
}


.fl{
    float: left;
}
.fr{
    float: right;
}

.fr ul li a:hover,
.fl ul li a:hover{
    color: red;
}


/* 快捷導航模塊 */
.shortcut{
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
    
}

.shortcut ul   {
    display: flex;
}

a{
    text-decoration: none;
    color: black;
    
}

.style_red{
    color: red;
}

.shortcut .fr ul li:nth-child(2n){
    
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0 15px;
}

.arrow-icon::after{
    content: '\e91b';
    font-family: 'icomoon';
    margin-left: 2px;
}

/* header頭部製作 */

.header{
    display: flex;
    justify-content: space-between;
    margin: 20px auto;


}

.logo{
    width: 120px;
    height: 70px; 
}

.logo a{
    display: block;
    width: 120px;
    height: 70px; 
    background: url(https://1000logos.net/wp-content/uploads/2022/10/Pringles-logo.png) no-repeat ;
    font-size: 0;
    background-size: 100%;
}

.search-container{
    display: flex;
    flex-flow: column;

}
.search{
    display: flex;
    width: 538px;
    height: 36px; 
    border: 2px solid red;
    margin-bottom: 10px;
}
.search input{
    width: 454px;
    height: 32px;
    padding-left: 10px;
}    
.search button{
    float:right ;
    background-color: red;
    border: transparent;
    color: white;
    width: 80px;
    height: 34px;
    font-size: 16px;
    cursor: pointer;
}

.hotwrods{
    left: 246px;
    top: 66px;
}

.hotwrods ul{
    display: flex;
}
.hotwrods ul li{
    margin:0 10px;
    font-size: 14px;
}

.hotwrods ul li a:hover{
    color: red;
}


.shop{
    position: relative;
    width: 140px;
    height: 35px;
    border: 1px solid rgb(168, 168, 168);
    background-color: rgb(204, 204, 204);
    text-align:center ;
    line-height: 35px;
    cursor: pointer;
}

.shop:hover{
    box-shadow: 1px 1px 3px rgba(0,0,0,.3);
}
.shop::after{
    content: '>';
    margin-left: 10px;
}
    

.num{
    position: absolute;
    top: -5px;
    left: 105px;
    border-radius: 15px;
    /* width: 25px; */
    padding:  0 5px;
    height: 14px;   
    background-color: red;
    line-height: 14px;
    color: white;
    border-radius: 7px 7px 7px 0;
}


nav{
    height: 47px;
    border-bottom: 2px solid red;
} 

.register{
    cursor: pointer;
}


</style>