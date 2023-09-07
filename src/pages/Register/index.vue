<template>
    <div class="register-container">
      <div class="register">
        <h3>註冊新用戶
          <span class="go">我有帳號,去<router-link to="/login">登入</router-link></span>
        </h3>
        <div class="content">
          <label for="">手機號</label>
          <input type="text" placeholder="請輸入手機號" v-model="phone">
        </div>
        <div class="content ">
          <label for="">驗證碼</label>
          <input type="text" placeholder="請輸入驗證碼" v-model="code">
          <button @click="getCode(phone)">獲取驗證碼</button>
        </div>
        <div class="content">
          <label for="">登錄密碼</label>
          <input type="password" placeholder="請輸入密碼" v-model="password">
        </div>
        <div class="content">
          <label for="">確認密碼</label>
          <input type="password" placeholder="請輸入確認密碼" v-model="checkPassWord">
        </div>

        <div class="controls">
          <input type="checkbox" :checked="agree">
          <span>同意協議</span>
        </div>

        <div class="btn">
          <button @click="userRegister">完成註冊</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name:'MyRegister',
  data() {
    return {
      phone:'',
      code:'',
      password:'',
      checkPassWord:'',
      agree:true
    }
  },
  methods:{
    async getCode(phone){
      try {
        if(this.phone == ''|| isNaN(this.phone)){
          alert('請輸入電話')
        }
        await this.$store.dispatch('getCode',phone)
        this.code = this.$store.state.user.code
        // alert(this.$store.state.user.code)
          }
       catch (error) {
        alert('取得失敗')
          }
  },
  async userRegister(){

    try {
      const {phone,code,password,checkPassWord} = this;
      (phone && code && password == checkPassWord) && await this.$store.dispatch('userRegister',{phone,code,password})
        this.$router.push('/login')
    } catch (error) {
      alert('失敗或手機已被註冊')
    }
  }
  }
}
  </script>
  
  <style lang="scss" scoped>

  .register-container{
    width: 1200px;
    margin: 0 auto;

  }

  input{
    width: 200px;
    height: 30px;
    border: 1px solid;
  }

  .register{
    display: flex;
    flex-direction: column;
    border: 1px solid hsl(0, 0%, 50%,.2);
    padding-bottom: 20px;
    h3{
      font-weight: 900;
      font-size: 24px;
      background-color: hsl(0, 0%, 50%,.2);
      padding: 10px;
      margin-bottom: 30px;
    }
    .go
    {
      float: right;
      font-size: 18px;
      line-height: 24px;

    }
    a{
      float: right;
      color: red;
      font-size: 20px;
    }
  }

  .content{
    margin-top: 10px ;
    margin-left: 430px;
    width: 900px;

    .error-msg{
      display: block;
      margin-left: 90px;
      margin-top: 5px;
      color: red;
    }
    label{
      width: 80px;
      display: inline-block;
      text-align: right;
      margin-right: 3px;
    }
    button{
      height: 35px;
      width: 100px;
    }
  }

.controls{
  margin: 0 auto;
  margin-top: 10px;
  span{
    line-height: 20px;
  }
  input{
    width: 15px;
    height: 15px;
  }
  .error-msg{
      margin-left: 10px;
      color: red;
    }
}
.btn{
  margin: 0 auto;
  margin-top: 20px;
  button{
  background-color: red;
  color:white;
  width: 200px;
  height: 30px;
  font-size: 18px;
  font-weight: 900;
  }
}
  </style>