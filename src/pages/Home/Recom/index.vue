<template>
  <div>
    <div class="w">
        <ul class="recom-container">
            <li class="recom-title ">
                <h2>今日推薦</h2>
            </li>
            <li class="recom-item">
                <div class="recom-text">
                    <h3>優質好貨</h3>
                        <p class="skyblue">滿500送200</p>                   
                </div>
                <div class="recom-img">
                    <img src="./img/aifa-i-Ctrl-Pro-17.jpg" alt="商品">
                </div>
            </li>
            <li class="recom-item">
                <div class="recom-text">
                    <h3>品牌好貨</h3>
                        <p class="green">滿500送200</p>                   
                </div>
                <div class="recom-img">
                    <img src="./img/aifa-i-Ctrl-Pro-17.jpg" alt="商品">
                </div>
            </li>
            <li class="recom-item">
                <div class="recom-text">
                    <h3>時尚穿搭</h3>
                        <p class="red">滿500送200</p>                   
                </div>
                <div class="recom-img">
                    <img src="./img/aifa-i-Ctrl-Pro-17.jpg" alt="商品">
                </div>
            </li>
            <li class="recom-item">
                <div class="recom-text">
                    <h3>新品上市</h3>
                        <p class="blue">滿500送200</p>                   
                </div>
                <div class="recom-img">
                    <img src="./img/aifa-i-Ctrl-Pro-17.jpg" alt="商品">
                </div>
            </li>

        </ul>
    </div>

  </div>
</template>

<script>
export default {
name:'MyRecom'
}
</script>

<style scoped lang="scss">
.w{
   max-width: 1200px; 
}

.recom-container{
    display: flex;
    margin: 20px 0;
    background-color: rgb(219, 219, 219);
}

.recom-item{
    display: flex;
    gap: 10px;
    width: 20%;
    padding: 20px 10px;
    border-left: 1px solid rgba(0,0,0,.1);
}

.recom-title{
    text-align: center;
    flex-grow: 1;
    line-height:143px ;
    background-color: rgb(83, 83, 83);
    color: #FFF;
    font-weight: 900;
}

.recom-text h3{
    margin-bottom: 10px;
    font-weight: 900;
}

.recom-text p{
    color: white;
    padding: 2px;
}

.skyblue{
    background-color: skyblue;
}
.green{
    background-color: green;
}
.red{
    background-color: red;
}
.blue{
    background-color: blue;
}

.recom-img{
    width: 100px;
    img{
        width: 100%;
    }
}
</style>