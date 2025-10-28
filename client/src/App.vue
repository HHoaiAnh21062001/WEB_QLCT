<style>
body{
    margin: 0px !important;
    padding: 0px !important;
    background-color:  #f5f7fa;
}
.header {
    align-items: center;
    height: 60px;
    display: grid;
    background-color:  #0277bd;
    width: 100% !important;
    grid-template-columns: 40% 60%;
}

.title {
    display: flex;
    color:black;
    justify-content: center;
}

.logo {
    width: 8%;
    border-radius: 75px;
}

.menu {
    
    display: flex;
    justify-content: flex-end;
    
    right: 0;
    background-color:  #0277bd;
    
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
    background-color: rgb(78, 78, 188);
}
#app {
    width: 100%;
    margin: 0px !important;
}
button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    color: black;
}
.modal{
  border-radius: 10px;
  position: absolute;
  top: 27%;
  left: 33.333%;
  background-color:  #e3f2fd;
  padding: 40px;
  width: 30%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px black;
}
.them-app {
    display: flex;
    justify-content: end;
    background-color: #2196f3;
    text-decoration: none;

}
.them-app:hover {
    background-color: #1976d2;
    
}
.dong-app{
  background-color: #ef5350;
}
.dong-app:hover{
  background-color: #e53935;
}
.them-app, .dong-app{
  width: 80px;
  height: 25px;
  align-items: center;
}
.modal-buttons{
  display: flex;
  justify-content: space-around;
}
.name{
    display: inline-block;
    width: 150px;
    
}
.logo-text{
    display: grid;
    align-items: center;
}
</style>

<template>
  <div class="app">
    <div class="col-12 header">
        <div class="title">
            <img src="./image/logo.jpg" class="logo" alt="">
                <div class="logo-text">Quản Lý Chi Tiêu</div> 
            <!-- <div class="name">
                <img src="./image/logo.jpg" class="logo" alt="">
                <span>Quản Lý Chi Tiêu</span>   
            </div> -->

            
        </div>
<div>
            <div class="menu">
            <router-link :to="`/home/${userId}`" class="item-menu" @click="huy" active-class="active">Home</router-link>
            <router-link :to="`/chitieu/${userId}`"  class="item-menu" @click="huy" active-class="active">Chi Tiêu</router-link >
            <router-link :to="`/thunhap/${userId}`"  class="item-menu" @click="huy" active-class="active">Thu Nhập</router-link >
            <button v-on:click="show" class="item-menu">Đăng Xuất</button>
            </div>
        </div>
    </div>
    <div v-show="showXacnhanDX" class="modal">
                <p>Bạn có chắc chắn muốn đăng xuất khỏi tài khoản nầy ?</p>
                <div class="modal-buttons">
                    <router-link :to="`/login`"  class="them-app" @click="xacNhanDX" >Đăng Xuất</router-link> 
                    <button @click="huy" class="dong-app">Hủy</button>
                </div>
            </div>
    
    <router-view></router-view>
</div>



</template>

<script>
import login from './components/login.vue';


export default {
    name: 'App',
    data() {
        return {
            showXacnhanDX: false,
        }
    },
  components: {
    login
    },
    
    
  created() {
      // Lấy userId từ localStorage khi component được tạo
    
      this.userId = localStorage.getItem('userId')
      
      
  },
    methods: {
        huy() {
            this.showXacnhanDX = false
        },
        xacNhanDX() {
            this.logout();
            this.showXacnhanDX = false
        },
        show() {
            this.showXacnhanDX = true;
        },
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