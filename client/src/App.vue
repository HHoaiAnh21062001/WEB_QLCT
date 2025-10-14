<style>
body{
    margin: 0px !important;
    padding: 0px !important;
}
.header {
    align-items: center;
    height: 50px;
    display: flex;
    background-color: rgb(106, 117, 234);
    width: 100% !important;
}

.title {
    width: 30%;
}

.logo {
    width: 10%;
    border-radius: 75px;
}

.menu {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
}

.item-menu {
    justify-content: end;
    align-items: center;
    height: 50px;
    padding-left: 5px;
    padding-right: 5px;
    text-decoration: none;
    color: black;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
}

.item-menu:hover {
    background-color: rgb(136, 136, 253);
}

.active {
    background-color: rgb(57, 57, 173);
}
#app {
    width: 100%;
    margin: 0px !important;
}
</style>

<template>
  <div class="app">
    <div class="col-12 header">
        <div class="title">
            <img src="/img/image (1).jpg" class="logo" alt="">
            <span>Quản Lý Chi Tiêu</span>
        </div>
        <div class="menu">
            <router-link :to="`/home/${userId}`"  class="item-menu" exact-active-class="active">home</router-link >
            <router-link :to="`/chitieu/${userId}`"  class="item-menu" active-class="active">Chi Tiêu</router-link >
            <router-link :to="`/thunhap/${userId}`"  class="item-menu" active-class="active">thu nhập</router-link >
            <router-link :to="`/login`"  class="item-menu" v-on:click="" >đăng xuất</router-link>
        </div>
    </div>
    <router-view></router-view>
</div>

</template>

<script>
import login from './components/login.vue';


export default {
  name: 'App',
  components: {
    login
    },
    
    
  created() {
      // Lấy userId từ localStorage khi component được tạo
    
      this.userId = localStorage.getItem('userId')
      
      
  },
    methods: {
        setUserId(id) {
            this.userId = id
            localStorage.setItem('userId', id)
        },
        logout() {
            this.userId = null
            localStorage.setItem('userId', null)
            this.$router.push('/login')
        },
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>