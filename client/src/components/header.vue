<style>
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
    background-color: blue;
}

.active {
    background-color: blue;
}
</style>

<template>
    <div class="row justify-content-center">
    <div class="col-12 header">
        <div class="title">
            <img src="/img/image (1).jpg" class="logo" alt="">
            <span>Quản Lý Chi Tiêu</span>
        </div>
        <div class="menu">
            <a href="#" :class="{ active: homeactive }" class="item-menu" v-on:click="homeon">home</a>
            <a href="#" :class="{ active: chitieuactive }" class="item-menu" v-on:click="chitieuon">Chi Tiêu</a>
            <a href="#" :class="{ active: thunhapctive }" class="item-menu" v-on:click="thunhapon">thu nhập</a>
            <a href="http://localhost:1236/login" class="item-menu">đăng xuất</a>
        </div>
    </div>
</div>
</template>