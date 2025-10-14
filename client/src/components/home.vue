<style>
.so-du {
    display: flex;
    align-items: center;
    font-size: 40px;
    margin: 2% 10%;
    background-color: rgb(188, 188, 188);
    height: 200px;
    border: 1px solid rgb(114, 114, 255);
    border-radius: 25px;
}

.in-today {
    display: flex;
    align-items: center;
    background-color: red;
    margin: 2% 10%;
    border-radius: 25px;
}

.thu-in-today {
    background-color: green;
    border-radius: 25px;
    width: 50%;
}
.chi-in-today {
    border-radius: 25px;
    width: 50%;
}

.number-du {
    margin-left: 10px;
}


</style>

<template>

    <div class="so-du">
        <span>Số Dư: </span>
        <span class="number-du">1236tỷ VNĐ</span>
    </div>
    <div class="in-today">
        <div class="thu-in-today">
            <span>thu trong ngày: </span>
            <div class="chi-tiet-thu">
                
            </div>
        </div>
        <div class="chi-in-today">
            <span>Chi trong ngày: </span>
            <div class="chi-tiet-chi">

            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            today: new Date(),
            chi_in_day: []

        }
        
    },
    async created() {
        console.log(localStorage.getItem('userId'))
        this.userId = localStorage.getItem('userId')
        if (this.userId == 'null') {
            this.$router.push('/login')
        alert('bạn chưa đăng nhập')
        }

        const chi_in_day = await this.$axios.get(`http://localhost:2161/chitien/${this.userId}`)
        
    },
    methods: {

    }


}
</script>