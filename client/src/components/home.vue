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

.chi-in-today {
    background-color: red;
}

.thu-in-today {
    background-color: green;
}

.number-du {
    margin-left: 10px;
}


</style>

<template>

    <div class="so-du">
        <span>Số Dư: </span>
        <span class="number-du">{{ sodu }}</span>
    </div>
    

</template>
<script>
export default {
    name: 'Home',

    }
</script>