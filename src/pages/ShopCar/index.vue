<template>
    <div class="cart">
        <h4>全部商品</h4>
        <div class="cart-main">
            <div class="cart-th">
                <div class="cart-th1">全部</div>
                <div class="cart-th2">商品</div>
                <div class="cart-th3">單價</div>
                <div class="cart-th4">數量</div>
                <div class="cart-th5">小計</div>
                <div class="cart-th6">操作</div>
            </div>
            <div class="cart-body">
                <ul class="cart-list" v-for="cart in carInfoList" :key="cart.id">
                    <li class="cart-list-con1">
                        <input type="checkbox" :checked="cart.isChecked == 1" @change="getchecked(cart, $event)">
                    </li>
                    <li class="cart-list-con2">
                        <img :src="cart.imgUrl" alt="">
                        <div class="item-msg">{{ cart.skuName }}</div>
                    </li>
                    <li class="cart-list-con4">
                        <span class="srice">{{ cart.skuPrice }}</span>
                    </li>
                    <li class="cart-list-con5">
                        <a class="mins" @click="handler('min', -1, cart)">-</a>
                        <input type="text" :value="cart.skuNum" class="itxt" disabled>
                        <a class="plus" @click="handler('add', 1, cart)">+</a>
                    </li>
                    <li class="cart-list-con6">
                        <span class="sum">{{ cart.skuPrice * cart.skuNum }}</span>
                    </li>
                    <li class="cart-list-con7">
                        <a class="sindelet" @click="deleteList(cart.skuId)">刪除</a>
                    </li>
                </ul>
                <div class="money-box">
                    <div class="sumprice">
                        <em>總價: </em>
                        <i class="summoney">{{ totalPrice }}</i>
                    </div>
                    <div class="sumbtn">
                        <a  class="sum-btn">結算</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import throttle from "lodash/throttle";

export default {
    name: 'ShopCar',
    mounted() {
        this.getCartList()
    },
    methods: {

        getCartList() {
            this.$store.dispatch('getCartList')
        },

        handler: throttle(async function (type, num, cart) {
            if (cart.skuNum <= 1) {
                cart.skuNum = 1
            }
            switch (type) {
                case 'add':
                    num = 1
                    break

                case 'min':
                    cart.skuNum > 1 ? num = -1 : num = 0
                    break
            }
            try {
                await this.$store.dispatch('getShopCar', { skuId: cart.skuId, skuNum: num })
                this.getCartList()
            } catch (error) {
                console.log(error);
            }
        }, 1500),

        async deleteList(skuId) {
            try {
                await this.$store.dispatch('deleteCarList', skuId)
                this.getCartList()
            } catch (error) {
                alert(error.message)
            }
        },

        async getchecked(cart, event) {
            try {
                let isChecked = event.target.checked ? '1' : '0'
                await this.$store.dispatch('getchecked', { skuId: cart.skuId, isChecked })
                this.getCartList()
            } catch (error) {
                alert(error.message)
            }
        }

    },
    computed: {
        ...mapGetters(['carList']),
        carInfoList() {
            return this.carList.cartInfoList || []
        },
        totalPrice() {
            let sum = 0
            this.carInfoList.forEach(item => {
                sum += item.skuNum * item.skuPrice
            });
            return sum
        }
    }
}
</script>

<style lang="scss" scoped>
.cart {
    width: 1200px;
    margin: 0 auto;
}

.cart-th {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    background-color: rgb(230, 230, 230);
    border: 1px solid hsl(0, 0%, 0%, .3);
    padding: 5px;
}

.cart-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid hsl(0, 0%, 0%, .1);
    margin-top: -1px;
    padding: 5px;
}

.cart-list-con2 {
    display: flex;
    align-items: center;
    width: 25%;

    img {
        width: 50px;

    }
}

.cart-list-con5 {
    input {
        width: 30px;
        padding: 2px 5px;
        text-align: center;
        border: 1px solid;
    }

    a {
        border: 1px solid;
        padding: 0 5px;
        padding-bottom: 2px;
        cursor: pointer;
    }
}

.cart-th2 {
    width: 25%;
}

.cart-list-con4 {
    margin-left: 40px;
    width: 2%;
}

.item-msg {
    line-height: 18px;
    font-size: 14px;
    word-break: break-all;
}

.cart-list-con6 {
    width: 2%;
}


.money-box {
    margin: 20px 0;
    display: flex;
    justify-content: end;
    gap: 20px;
    align-items: center;

    .summoney {
        font-size: 22px;
        color: red;
    }
}

.sum-btn {
    color: #fff;
    background-color: red;
    padding: 10px 20px;
}

.sindelet {
    cursor: pointer;
}
</style>

