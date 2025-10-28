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
    margin-top: 10px;
    background-color: #2196f3;
    
}
.them:hover {
    background-color: #1976d2;
    
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
    background-color: #1976d2;
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
    
    height: 50px;
    align-items: center;
}

.describe-item2 {
    
    display: grid;
    text-align: center;
    border: 1px solid black;
    
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
.chi-tieu{
    margin: 0px 10%;

}
.modal{
  border-radius: 10px;
  position: absolute;
  top: 27%;
  left: 33.333%;
  background-color: #e3f2fd;
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
  background-color: #ef5350;
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
            <button class="btn_them" v-on:click="hienthem">Thêm giao dịch</button>
        </div>
        <!-- <div class="filter">
            <input type="date" class="filterinput" id="date" v-model="date">
            <input type="date" class="filterinput" id="date2" v-model="date2">
            <button class="filter-item" v-on:click="locNgay">Lọc</button>
        </div> -->
    </div>
    <div class="chi-tieu">
        <div class="describe">
            <div class="describe-item">Ngày</div>
            <div class="describe-item">Số tiền</div>
            <div class="describe-item">danh mục</div>
            <div class="describe-item">Ghi chú</div>
            <div class="describe-item">chỉnh sửa</div>
            <div class="describe-item">Xóa</div>
        </div>
        <div class="item" v-for="(item, index) in dsChiTieu" :key="index" :style="{ backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#ffffff' }">
            <div class="describe2" >
                <div class="describe-item2">{{ formatVNDate(item.ngaychitien) }}</div>
                <div class="describe-item2">{{ formatVND(item.sotienchira) }}</div>
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
                <div style="font-size: 35px;">Chỉnh sửa giao dịch</div>
                <form @submit.prevent="suaGiaoDich" class="item2">
                    <label for="ngay">Ngày:</label>
                    <input type="date" v-model="formsua.ngaysua" required>
                    <label for="tien">Số tiền:</label>
                    <input type="number" v-model="formsua.tiensua" required>
                    <label for="danhmuc">Danh mục:</label>
                    <select v-model="formsua.danhmucsua" required>
                      <option value="an sang">an sang</option>
                      <option value="an trua">an trua</option>
                      <option value="mua sam">mua sam</option>
                      <option value="di choi">di choi</option>
                      <option value="khac">khac</option>
                    </select>
                    <label for="ghichu">Ghi chú:</label>
                    <input type="text" v-model="formsua.ghichusua">
                    <button type="submit" class="them">Thêm</button>
                </form>
                <button @click="dong" class="dong">Đóng</button>
            </div>
         </div>
        <!-- them -->
         <div>
            <div v-show="showThemGiaoDich" class="modal" >
                <div style="font-size: 35px;">Thêm giao dịch</div>
                <form @submit.prevent="themGiaoDich()" class="item2">
                    <label for="ngay">Ngày:</label>
                    <input type="date" v-model="formChiTieu.ngay" required>
                    <label for="tien">Số tiền:</label>
                    <input type="number" v-model="formChiTieu.tien" required>
                    <label for="danhmuc">Danh mục:</label>
                    <select v-model="formChiTieu.danhmuc" required>
                      <option value="an sang">ăn sáng</option>
                      <option value="an trua">ăn trưa</option>
                      <option value="mua sam">mua sắm</option>
                      <option value="di choi">đi chơi</option>
                      <option value="khac">khác</option>
                    </select>
                    <label for="ghichu">Ghi chú:</label>
                    <input type="text" v-model="formChiTieu.ghichu">
                  
                    <button type="submit" class="them">Thêm</button>
                </form>
                <button @click="showThemGiaoDich = false" class="dong">Đóng</button>
            </div>
         </div>
        <!-- xoa -->
        <div v-show="showXacNhanXoa" class="modal">
          <p>Bạn có chắc chắn muốn xóa giao dịch này?</p>
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
  name: 'chitieu',
  data() {
    return {
      showThemGiaoDich: false,
      showsuaGiaoDich: false,
      showXacNhanXoa: false,
      idToDelete: null,
      dsChiTieu: [],
      pollingInterval: null,
      color1: '#e3f2fd',
      color2: '#ffffff',
      date: '',
      date2: '',
      formChiTieu: {
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
      this.loadChiTieu();
        if (this.userId == 'null') {
        this.$router.push('/login')
        alert('bạn chưa đăng nhập')
      }
    }
,

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
    async loadChiTieu() {
      console.log(this.userId)
        if (this.userId != 'null') {
          try {
          const response = await fetch(`http://localhost:2161/api/chitien/${this.userId}`);
          console.log(response)
          if (response.ok) {
            const data = await response.json();
            this.dsChiTieu = data;
            for (let i = 0; i < this.dsChiTieu.length; i++) {
              this.tong += parseInt(this.dsChiTieu[i].sotienchira);
            }
          }
          } catch (error) {
            console.error('Lỗi khi tải dữ liệu:', error);
          }
        }
      else {
        this.$router.push('/login')
      }
    },
    async themGiaoDich() {
      const response = await fetch(`http://localhost:2161/api/chitien/${this.userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ngaychitien: this.formChiTieu.ngay,
          sotienchira: this.formChiTieu.tien,
          danhmuc: this.formChiTieu.danhmuc,
          mota: this.formChiTieu.ghichu,
          mataikhoan: this.userId
        })
      });
      if (response.ok) {
        window.location.reload();
        this.showThemGiaoDich = false;
        this.formChiTieu = {
          ngay: '',
          danhmuc: '',
          tien: 0,
          ghichu: '',
        };
      }
      },
      async suaGiaoDich() {
      
      const response = await fetch(`http://localhost:2161/api/chitien/${this.userId}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ngaychitien: this.formsua.ngaysua,
          sotienchira: this.formsua.tiensua,
          danhmuc: this.formsua.danhmucsua,
          mota: this.formsua.ghichusua,
          machitien: this.formsua.id
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
          ngaysua: item.ngaychitien,
          tiensua: item.sotienchira,
          danhmucsua: item.danhmuc,
          ghichusua: item.mota,
          id: item.machitien
        }
      },
      hienthem() {
        this.showThemGiaoDich = true;
      },
      async xacNhanXoa() {
        
        const response = await fetch(`http://localhost:2161/api/chitien/${this.userId}`, {
          method: 'DELETE',
          headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            machitien: this.idToDelete,
            mataikhoan: this.userId

        })
        })
        .then(response => {
          if (response.ok) {
            this.loadChiTieu();
            this.showXacNhanXoa = false;
            this.idToDelete = null;
          }
        })
        .catch(error => {
          console.error('Lỗi khi xóa giao dịch:', error);
        });
      },  
    
    async xoaGiaoDich(item) {
      this.idToDelete = item.machitien;
      this.showXacNhanXoa = true;
      },
      huy() {
        this.showXacNhanXoa = false;
        this.idToDelete = null;
      },
      dong() {
        this.showThemGiaoDich = false;
        this.showsuaGiaoDich = false;
        this.formChiTieu = {
          ngay: '',
          danhmuc: '',
          tien: 0,
          ghichu: ''
        };
      }
  }
}
</script>