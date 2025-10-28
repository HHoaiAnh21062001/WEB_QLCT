<style scoped>
.chung{
    display: flex;
    justify-content: space-between;
    margin: 5px 10%;
}
.filter {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    margin: 10px 0px;
}

.them {
    display: flex;
    justify-content: end;
    background-color:  #2196f3;
    margin-top: 10px;
}
.them:hover {
    background-color:   #1976d2;
}
.btn_them {
    border: 1px solid black;
    border-radius: 5px;
    height: 40px;
    box-shadow: 0 0 10px black;
}
.btn_them:hover {
    background-color:  #64b5f6;
}

.filter-item {
    margin-left: 5px;
    font-size: 16px;
    border: none;
    border-radius: 25px;
    background-color: rgb(255, 255, 255);
}

.filterinput {
    border-radius: 25px;
    border: none;
}

.filterinput2 {
    border: 2px solid black;
    border-radius: 25px;
}

.filterinput:focus {
    outline: none;
    border: none;
}

.describe {
    display: grid;
    grid-template-columns: 16.8% 20.9% 16.8% 16.8% 16.8% 11.8%;
    column-gap: 0px;
    background-color:  #1976d2;
    border: 1px solid black;
    
}
.describe2 {
    display: grid;
    grid-template-columns: 16.8% 20.9% 16.8% 16.8% 16.8% 11.9%;
    column-gap: 0px;
    border: 1px solid black;
}

.describe-item {
    display: grid;
    text-align: center;
    border: 1px solid black;
    border-top: none;
    border-bottom: none;
    height: 50px;
    align-items: center;
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

.nutXoa {
    display: block;
    margin: 10px auto;
    width: 25px;
    height: 25px;
    border: 1px solid black !important;
    border-radius: 25px;
    background-color: red;
    padding: 0px !important;
}
.nutSua{
    display: block;
    margin: 10px auto;
    width: 25px;
    height: 25px;
    border: 1px solid black !important;
    border-radius: 25px;
    background-color: skyblue;
    padding: 0px !important;
}
.imgdelete {
    border-radius: 25px;
    margin: 3px 0px 10px 1px;
    width: 20px;
    height: 20px;
}
.range{
    height: 100%;
}
.thu-nhap{
    margin: 0px 10%;
    
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
.modal-buttons{
  display: flex;
  justify-content: space-around;
}
.xacnhan, .huy{
  width: 80px;
}
.xacnhan {
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
}
.huy {
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
}
.item2{
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
label{
  text-align: left;
}
.them{
  
  justify-content: center !important;
}
.dong{
  background-color:  #ef5350;
}
.dong:hover{
  background-color: #e53935;
}
.describe2more{
    display: grid;
    grid-template-columns: 16.8% 83.2%;
    
    border: 1px solid black;
}
</style>

<template>
<div class="range">
    <div class="chung">
        <div class="them">
            <button class="btn_them" v-on:click="hienthem">Thêm thu nhập</button>
        </div>
        <!-- <div class="filter">
            <input type="date" class="filterinput" id="date" v-model="date">
            <input type="date" class="filterinput" id="date2" v-model="date2">
            <button class="filter-item" v-on:click="locNgay">Lọc</button>
        </div> -->
    </div>
    <div class="thu-nhap">
        <div class="describe">
            <div class="describe-item">Ngày</div>
            <div class="describe-item">Số tiền</div>
            <div class="describe-item">Danh mục</div>
            <div class="describe-item">Ghi chú</div>
            <div class="describe-item">chỉnh sửa</div>
            <div class="describe-item">Xóa</div>
        </div>
        <div class="item" v-for="(item, index) in dsThuNhap" :key="index" :style="{ backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#ffffff' }">
            <div class="describe2">
                <div class="describe-item2">{{ formatVNDate(item.ngay) }}</div>
                <div class="describe-item2">{{ formatVND(item.sotien) }}</div>
                <div class="describe-item2">{{ item.danhmuc }}</div>
                <div class="describe-item2">{{ item.mota }}</div>
                <div class="describe-item2">
                    <button class="nutSua" v-on:click="hiensua(item)">
                        <img src="../public/img/1644056881548336160-128.png" alt="" class="imgdelete">
                    </button>
                </div>
                <div class="describe-item2">
                    <button class="nutXoa" v-on:click="xoaGiaoDich(item)">
                        <img src="../public/img/4177409791543238955-128.png" alt="" class="imgdelete">
                    </button>
                </div>
            </div>
            
        </div>
        <div class="describe2 describe2more" >
              <div class="describe-item2" style="background-color: #bbdefb;">Tổng Thu</div>
              <div class="describe-item2" style="background-color: #bbdefb; text-align: end;">{{ formatVND(tong) }}</div>
        </div>
        <!-- sua -->
        <div>
            <div v-show="showsuaGiaoDich" class="modal">
                <div style="font-size: 35px;">Sửa thu nhập</div>
                <form @submit.prevent="suaGiaoDich" class="item2">
                    <label for="ngay">Ngày:</label>
                    <input type="date" v-model="formsua.ngaysua" required>
                    <label for="tien">Số tiền:</label>
                    <input type="number" v-model="formsua.tiensua" required>
                    <label for="danhmuc">Danh mục:</label>
                    <select v-model="formsua.danhmucsua" required>
                      <option value="luong">Lương</option>
                      <option value="thuong">Thưởng</option>
                      <option value="dau tu">Đầu tư</option>
                      <option value="khac">Khác</option>
                    </select>
                    <label for="ghichu">Ghi chú:</label>
                    <input type="text" v-model="formsua.ghichusua">
                    <button type="submit" class="them">Sửa</button>
                </form>
                <button @click="dong" class="dong">Đóng</button>
            </div>
         </div>
        <!-- them -->
         <div>
            <div v-show="showThemGiaoDich" class="modal">
                <div style="font-size: 35px;">Thêm thu nhập</div>
                <form @submit.prevent="themGiaoDich" class="item2">
                    <label for="ngay">Ngày:</label>
                    <input type="date" v-model="formThuNhap.ngay" required>
                    <label for="tien">Số tiền:</label>
                    <input type="number" v-model="formThuNhap.tien" required>
                    <label for="danhmuc">Danh mục:</label>
                    <select v-model="formThuNhap.danhmuc" required>
                      <option value="luong">Lương</option>
                      <option value="thuong">Thưởng</option>
                      <option value="dau tu">Đầu tư</option>
                      <option value="khac">Khác</option>
                    </select>
                    <label for="ghichu">Ghi chú:</label>
                    <input type="text" v-model="formThuNhap.ghichu">
                    <button type="submit" class="them">Thêm</button>
                </form>
                <button @click="showThemGiaoDich = false" class="dong">Đóng</button>
            </div>
         </div>
        <!-- xoa -->
        <div v-show="showXacNhanXoa" class="modal">
          <p>Bạn có chắc chắn muốn xóa thu nhập này?</p>
          <div class="modal-buttons">
            <button @click="xacNhanXoa" class="xacnhan">Xác nhận</button>
            <button @click="huy" class="huy">Hủy</button>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'thunhap',
  data() {
    return {
      showThemGiaoDich: false,
      showsuaGiaoDich: false,
      showXacNhanXoa: false,
      idToDelete: null,
      dsThuNhap: [],
      pollingInterval: null,
      date: '',
      date2: '',
      formThuNhap: {
        ngay: '',
        danhmuc: '',
        tien: 0,
        ghichu: '',
      },
      formsua: {
        ngaysua: '',
        danhmucsua: '',
        tiensua: 0,
        ghichusua: '',
      },
      tong: 0

    }
  },
   created() { 
    console.log(localStorage.getItem('userId'))
    this.userId = localStorage.getItem('userId')
    this.loadThuNhap();
    if (this.userId == 'null') {
      this.$router.push('/login')
      alert('bạn chưa đăng nhập')
    }
    
      
        
    console.log(this.dsThuNhap)
  },
  methods: {
    formatVNDate(value) {
      return new Intl.DateTimeFormat('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date(value));
    },
    formatVND(value) {
      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    },
    formatCurrency(value) {
      return parseFloat(value).toFixed(3); // Chuyển số thành chuỗi với 2 chữ số thập phân
    },
    async loadThuNhap() {
      console.log(this.userId)
      if (this.userId != 'null') {
        try {
        
        const response = await fetch(`http://localhost:2161/api/thunhap/${this.userId}`);
        if (response.ok) {
          const data = await response.json();
          this.dsThuNhap = data;
          for (let i = 0; i < this.dsThuNhap.length; i++) {
          this.tong += parseInt(this.dsThuNhap[i].sotien);
    }
        }
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
      }
      }
    },
    async themGiaoDich() {
      
      const response = await fetch(`http://localhost:2161/api/thunhap/${this.userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ngay: this.formThuNhap.ngay,
          sotien: this.formThuNhap.tien,
          danhmuc: this.formThuNhap.danhmuc,
          mota: this.formThuNhap.ghichu,
          mataikhoan: this.userId
        })
      });
      if (response.ok) {
        window.location.reload();
        this.showThemGiaoDich = false;
        this.formThuNhap = {
          ngay: '',
          danhmuc: '',
          tien: 0,
          ghichu: '',
        };
      }
    },
    async suaGiaoDich() {
      
      const response = await fetch(`http://localhost:2161/api/thunhap/${this.userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ngay: this.formsua.ngaysua,
          sotien: this.formsua.tiensua,
          danhmuc: this.formsua.danhmucsua,
          mota: this.formsua.ghichusua,
          mathunhap: this.formsua.id
        })
      });
      if (response.ok) {
        window.location.reload();
        this.showsuaGiaoDich = false;
        this.formsua = {
          ngaysua: '',
          danhmucsua: '',
          tiensua: 0,
          ghichusua: '',
        };
      }
    },
    hiensua(item) {
      this.showsuaGiaoDich = true;
      this.formsua = {
        ngaysua: item.ngay,
        tiensua: item.sotien,
        danhmucsua: item.danhmuc,
        ghichusua: item.mota,
        id: item.mathunhap
      }
    },
    hienthem() {
      this.showThemGiaoDich = true;
    },
    xacNhanXoa() {
      
      fetch(`http://localhost:2161/api/thunhap/${this.userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mathunhap: this.idToDelete,
          mataikhoan: this.userId
        })
      })
      .then(response => {
        if (response.ok) {
          this.loadThuNhap();
          this.showXacNhanXoa = false;
          this.idToDelete = null;
        }
      })
      .catch(error => {
        console.error('Lỗi khi xóa thu nhập:', error);
      });
    },
    async xoaGiaoDich(item) {
      this.idToDelete = item.mathunhap;
      this.showXacNhanXoa = true;
    },
    huy() {
      this.showXacNhanXoa = false;
      this.idToDelete = null;
    },
    dong() {
      this.showThemGiaoDich = false;
      this.showsuaGiaoDich = false;
      this.formThuNhap = {
        ngay: '',
        danhmuc: '',
        tien: 0,
        ghichu: ''
      };
    },
    async locNgay() {
      try {
        const userId = this.$route.params.id;
        const response = await fetch(`http://localhost:2161/api/thunhap/${userId}/loc?from=${this.date}&to=${this.date2}`);
        if (response.ok) {
          const data = await response.json();
          this.dsThuNhap = data;
        }
      } catch (error) {
        console.error('Lỗi khi lọc dữ liệu:', error);
      }
    }
  }
}
</script>
