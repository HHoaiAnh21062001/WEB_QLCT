<style>
.so-du {
    display: flex;
    align-items: center;
    font-size: 25px;
    margin: 2% 10%;
    background-color: rgb(188, 188, 188);
    height: 100px;
    border: 1px solid rgb(114, 114, 255);
    border-radius: 25px;
    justify-content: space-around;
}

.in-today {
    background-color: white;
    margin: 2% 10%;
    border-radius: 25px;
}

.number-du {
    margin-left: 10px;
}
.text{
    text-align: center; 
}
.describe {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    column-gap: 0px;
    background-color: #1976d2;
}
.describe-item {
    display: grid;
    text-align: center;
    border: 1px solid black;
    
    height: 50px;
    align-items: center;
}
.number-du{
    color: aqua;
}
.number-thu{
    color: lightgreen;
}
.number-chi{
    color: lightcoral;
}
.number-thu, .number-du, .number-chi {
    -webkit-text-stroke: 1px black;
    font-size: 30px;

}
.describe-item2 {
    
    display: grid;
    text-align: center;
    border: 1px solid black;
    border-top: none;
    border-bottom: none;
    height: 50px;
    align-items: center;
}
.describe2 {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%  ;
    column-gap: 0px;
    border: 1px solid black;
}
</style>

<template>

    <div class="so-du">
        <div class="number-thu">
            <span>tổng thu: </span>
            <span>{{ formatVND(tongThu) }}</span>
        </div>

        <div class="number-du">
            <span>Số Dư: </span>
            <span>{{ formatVND(SoDu) }}</span>
        </div>
        
        <div class="number-chi">
            <span>tổng chi:</span>
        <span>{{ formatVND(tongchi) }}</span>
        </div>
    </div>
        <div class="in-today">
            <h1 class="text">giao dịch gần đây </h1>
            <div class="describe">
            <div class="describe-item">ngày</div>
            <div class="describe-item">loại hình</div>
            <div class="describe-item">Số tiền</div>
            <div class="describe-item">danh mục</div>
            <div class="describe-item">Ghi chú</div>
        </div>
           <div class="item" v-for="(item, index) in dsTong" :key="index"  :style="{
            backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#ffffff',
            color: item.Loaihinh == 'Thu nhập' ? 'green' : 'red'
            } ">
            <div class="describe2" >
                <div class="describe-item2">{{ formatVNDate(item.ngaychitien || item.ngay) }}</div>
                <div class="describe-item2">{{ item.Loaihinh }}</div>
                <div class="describe-item2">{{ formatVND(item.sotienchira || item.sotien) }}</div>
                <div class="describe-item2">{{ item.danhmuc }}</div>
                <div class="describe-item2">{{ item.mota }}</div>
                

                
            </div>
            
        </div>
        </div>

</template>
<script>


export default {
    name: 'Home',
    data() {
        return {
            dsChiTieu: [],
            tongchi: 0,
            dsThuNhap: [],
            tongThu: 0,
            dsTong: [],
            SoDu: 0,
        }
    },
    async created() {
        console.log(localStorage.getItem('userId'))
        this.userId = localStorage.getItem('userId')
        if (this.userId == 'null') {
            this.$router.push('/login')
        alert('bạn chưa đăng nhập')
        }
        this.userId = localStorage.getItem('userId');

        
        


        await this.loadChiTieu()
        console.log('Danh sách chi tiêu:', this.dsChiTieu);
        await this.loadThuNhap()
        console.log('Danh sách thu nhập:', this.dsThuNhap);
        this.loadTong()
        
        
        
    },
    methods: {
        
        async loadChiTieu() {
    console.log(this.userId);
    if (this.userId != 'null') {
        try {
            const response = await fetch(`http://localhost:2161/api/chitien/${this.userId}`);
            if (response.ok) {
                const data = await response.json();
                this.dsChiTieu = data.map(item => ({
                    ...item,
                    Loaihinh: "Chi tiêu"
                }));
                this.tongchi = this.dsChiTieu.reduce((sum, item) => sum + parseInt(item.sotienchira), 0);
            }
        } catch (error) {
            console.error('Lỗi khi tải dữ liệu:', error);
        }
    } else {
        this.$router.push('/login');
    }
},
    formatVNDate(value) {
    if (!value) {
        return "Không xác định"; // Trả về giá trị mặc định nếu ngày không hợp lệ
    }
    const date = new Date(value);
    if (isNaN(date.getTime())) {
        return "Không xác định"; // Trả về giá trị mặc định nếu không thể chuyển đổi thành ngày
    }
    return new Intl.DateTimeFormat('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).format(date);
},
    formatVND(value) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
        },
    async loadThuNhap() {
    console.log(this.userId);
    if (this.userId != 'null') {
        try {
            const response = await fetch(`http://localhost:2161/api/thunhap/${this.userId}`);
            if (response.ok) {
                const data = await response.json();
                this.dsThuNhap = data.map(item => ({
                    ...item,
                    Loaihinh: "Thu nhập"
                }));
                this.tongThu = this.dsThuNhap.reduce((sum, item) => sum + parseInt(item.sotien), 0);
            }
        } catch (error) {
            console.error('Lỗi khi tải dữ liệu:', error);
        }
    }
},
    async loadTong() {
            this.dsTong = [...this.dsChiTieu, ...this.dsThuNhap];
            this.SoDu = this.tongThu - this.tongchi;
            this.dsTong.sort((a, b) => new Date(a.ngaychitien || a.ngay) - new Date(b.ngaychitien || b.ngay ));
        },
    }
}
</script>